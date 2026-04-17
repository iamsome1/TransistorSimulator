import { Component, inject, signal, computed } from '@angular/core';
import { QuizService } from '../../core/services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  template: `
    <div class="page fade-in">

      <div class="section-header">
        <span class="label">Layer 8 — Quiz Mode</span>
        <h2>Test Your Knowledge</h2>
        <p>20 questions covering binary, logic gates, adders, and transistors. Instant explanations after each answer.</p>
      </div>

      <!-- ── Start screen ── -->
      @if (!quizStarted()) {
        <div class="start-screen card">
          <div class="start-icon">🎯</div>
          <h3>Ready to test yourself?</h3>
          <p>
            The quiz draws 10 random questions from a pool of 20, covering all topics.
            You'll see the correct answer and an explanation after each response.
          </p>
          <div class="quiz-info-grid">
            @for (info of quizInfo; track info.label) {
              <div class="qi-card">
                <span class="qi-icon">{{ info.icon }}</span>
                <span class="qi-label">{{ info.label }}</span>
                <span class="qi-val">{{ info.val }}</span>
              </div>
            }
          </div>
          <button class="btn btn-primary start-btn" (click)="startQuiz()">Start Quiz ▶</button>
        </div>
      }

      <!-- ── Active quiz ── -->
      @if (quizStarted() && !isCompleted()) {

        <!-- Progress bar -->
        <div class="progress-header">
          <div class="progress-track">
            <div class="progress-fill" [style.width.%]="quiz.progress()"></div>
          </div>
          <span class="progress-text">
            Question {{ currentIdx() + 1 }} of {{ totalQs() }}
          </span>
          <span class="score-live">
            Score: <strong>{{ score() }}</strong> / {{ currentIdx() }}
          </span>
        </div>

        <!-- Question card -->
        @if (currentQ(); as q) {
          <div class="question-card card">

            <!-- Category + difficulty badge -->
            <div class="q-meta">
              <span class="q-category">{{ categoryLabel(q.category) }}</span>
              <span class="q-difficulty" [class]="'diff-' + q.difficulty">{{ q.difficulty }}</span>
              <span class="q-number mono text-xs text-muted">Q{{ currentIdx()+1 }}</span>
            </div>

            <!-- Question text -->
            <h3 class="q-text">{{ q.question }}</h3>

            <!-- Optional context -->
            @if (q.context) {
              <div class="q-context mono text-sm">{{ q.context }}</div>
            }

            <!-- Answer options -->
            <div class="options-grid">
              @for (opt of q.options; track $index) {
                <button class="option-btn"
                        [class.option-selected]="selectedAnswer() === $index"
                        [class.option-correct]="showExplanation() && $index === q.correctAnswer"
                        [class.option-wrong]="showExplanation() && selectedAnswer() === $index && $index !== q.correctAnswer"
                        [disabled]="showExplanation()"
                        (click)="selectAnswer($index)">
                  <span class="opt-letter">{{ optionLetters[$index] }}</span>
                  <span class="opt-text">{{ opt }}</span>
                  @if (showExplanation() && $index === q.correctAnswer) {
                    <span class="opt-check">✓</span>
                  }
                  @if (showExplanation() && selectedAnswer() === $index && $index !== q.correctAnswer) {
                    <span class="opt-x">✗</span>
                  }
                </button>
              }
            </div>

            <!-- Explanation (shown after answer) -->
            @if (showExplanation()) {
              <div class="explanation-reveal" [class.was-correct]="wasCorrect()" [class.was-wrong]="!wasCorrect()">
                <div class="explain-header">
                  @if (wasCorrect()) {
                    <span class="explain-icon">✅</span>
                    <strong class="text-success">Correct!</strong>
                  } @else {
                    <span class="explain-icon">❌</span>
                    <strong class="text-error">Not quite.</strong>
                  }
                </div>
                <p class="explain-text">{{ q.explanation }}</p>
                <button class="btn btn-primary next-btn" (click)="next()">
                  {{ currentIdx() >= totalQs() - 1 ? 'See Results 🏁' : 'Next Question →' }}
                </button>
              </div>
            }

          </div>
        }
      }

      <!-- ── Results screen ── -->
      @if (isCompleted()) {
        <div class="results-card card">

          <div class="results-icon">
            {{ scorePercent() >= 80 ? '🏆' : scorePercent() >= 60 ? '👍' : '📚' }}
          </div>
          <h3>Quiz Complete!</h3>

          <div class="score-display">
            <div class="score-big">
              <span class="score-num">{{ score() }}</span>
              <span class="score-denom">/ {{ totalQs() }}</span>
            </div>
            <div class="score-percent" [class.high]="scorePercent()>=80"
                                       [class.mid]="scorePercent()>=60 && scorePercent()<80"
                                       [class.low]="scorePercent()<60">
              {{ scorePercent() }}%
            </div>
          </div>

          <p class="score-msg">{{ scoreMessage() }}</p>

          <!-- Per-question review -->
          <div class="review-list">
            <h4>Review</h4>
            @for (item of reviewItems(); track $index) {
              <div class="review-item" [class.review-correct]="item.correct" [class.review-wrong]="!item.correct">
                <span class="review-icon">{{ item.correct ? '✓' : '✗' }}</span>
                <div class="review-detail">
                  <div class="review-q text-sm">{{ item.question }}</div>
                  @if (!item.correct) {
                    <div class="review-answer text-xs text-muted">
                      Correct: {{ item.correctAnswer }}
                    </div>
                  }
                </div>
              </div>
            }
          </div>

          <div class="results-actions">
            <button class="btn btn-primary" (click)="startQuiz()">Try Again 🔄</button>
          </div>
        </div>
      }

    </div>
  `,
  styles: [`
    .page { max-width: 780px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }

    /* Start screen */
    .start-screen {
      display: flex; flex-direction: column; align-items: center;
      gap: 1.25rem; padding: 2.5rem 2rem; text-align: center;
    }
    .start-icon { font-size: 3rem; }
    .start-screen p { max-width: 480px; }
    .quiz-info-grid {
      display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
    }
    .qi-card {
      display: flex; flex-direction: column; align-items: center; gap: 0.25rem;
      padding: 0.75rem 1.25rem;
      background: var(--bg-input); border: 1px solid var(--border-subtle);
      border-radius: var(--radius);
    }
    .qi-icon { font-size: 1.4rem; }
    .qi-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
    .qi-val { font-weight: 700; color: var(--text-primary); }
    .start-btn { margin-top: 0.5rem; padding: 0.75rem 2rem; font-size: 1rem; }

    /* Progress */
    .progress-header {
      display: flex; align-items: center; gap: 0.75rem;
    }
    .progress-track {
      flex: 1; height: 6px; background: var(--border-default); border-radius: 3px; overflow: hidden;
    }
    .progress-fill {
      height: 100%; background: linear-gradient(90deg, var(--accent), var(--sig-high));
      border-radius: 3px; transition: width 400ms var(--ease-out);
    }
    .progress-text { font-size: 0.78rem; color: var(--text-muted); white-space: nowrap; }
    .score-live { font-size: 0.78rem; color: var(--text-secondary); white-space: nowrap; }

    /* Question card */
    .question-card { display: flex; flex-direction: column; gap: 1rem; }
    .q-meta { display: flex; align-items: center; gap: 0.6rem; }
    .q-category {
      font-size: 0.72rem; padding: 0.15rem 0.6rem; border-radius: 999px;
      background: var(--accent-dim); color: var(--accent); border: 1px solid var(--border-accent);
      font-weight: 600;
    }
    .q-difficulty {
      font-size: 0.7rem; padding: 0.15rem 0.5rem; border-radius: 999px;
      font-weight: 600; text-transform: capitalize;
      &.diff-easy   { background: #10b98122; color: var(--success); border: 1px solid var(--success); }
      &.diff-medium { background: #f59e0b22; color: var(--warning); border: 1px solid var(--warning); }
      &.diff-hard   { background: #ef444422; color: var(--error);   border: 1px solid var(--error); }
    }
    .q-text { font-size: 1.1rem; line-height: 1.5; color: var(--text-primary); }
    .q-context {
      padding: 0.6rem 0.9rem;
      background: var(--bg-input); border: 1px solid var(--border-subtle);
      border-radius: var(--radius); color: var(--text-code);
    }

    /* Options */
    .options-grid { display: flex; flex-direction: column; gap: 0.6rem; }
    .option-btn {
      display: flex; align-items: center; gap: 0.75rem;
      width: 100%; padding: 0.75rem 1rem;
      background: var(--bg-input); border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius); cursor: pointer; text-align: left;
      color: var(--text-secondary); font-size: 0.9rem;
      transition: all 180ms;

      &:not(:disabled):hover { border-color: var(--accent); color: var(--text-primary); background: var(--accent-dim); }
      &.option-selected { border-color: var(--accent); color: var(--text-primary); }
      &.option-correct  { border-color: var(--success)!important; background: #10b98122!important; color: var(--success)!important; }
      &.option-wrong    { border-color: var(--error)!important;   background: #ef444422!important; color: var(--error)!important; }
      &:disabled { cursor: default; }
    }
    .opt-letter {
      width: 1.6rem; height: 1.6rem; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      border-radius: 50%; background: var(--border-default);
      font-size: 0.72rem; font-weight: 700; color: var(--text-muted);
    }
    .opt-text { flex: 1; }
    .opt-check { margin-left: auto; color: var(--success); font-size: 1rem; }
    .opt-x     { margin-left: auto; color: var(--error);   font-size: 1rem; }

    /* Explanation reveal */
    .explanation-reveal {
      border-radius: var(--radius-lg); padding: 1rem 1.25rem;
      border: 1px solid; display: flex; flex-direction: column; gap: 0.75rem;
      &.was-correct { background: #10b98110; border-color: var(--success); }
      &.was-wrong   { background: #ef444410; border-color: var(--error); }
    }
    .explain-header { display: flex; align-items: center; gap: 0.5rem; }
    .explain-icon { font-size: 1.1rem; }
    .explain-text { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.65; }
    .next-btn { align-self: flex-end; }

    /* Results */
    .results-card {
      display: flex; flex-direction: column; align-items: center;
      gap: 1.25rem; padding: 2rem; text-align: center;
    }
    .results-icon { font-size: 3.5rem; }
    .score-display { display: flex; align-items: center; gap: 1.5rem; }
    .score-big { display: flex; align-items: baseline; gap: 0.25rem; }
    .score-num { font-size: 3.5rem; font-weight: 800; font-family: var(--font-code); color: var(--text-primary); }
    .score-denom { font-size: 1.5rem; color: var(--text-muted); font-family: var(--font-code); }
    .score-percent {
      font-size: 2rem; font-weight: 800; font-family: var(--font-code);
      &.high { color: var(--success); }
      &.mid  { color: var(--warning); }
      &.low  { color: var(--error); }
    }
    .score-msg { max-width: 420px; font-size: 0.95rem; }

    /* Review */
    .review-list { width: 100%; display: flex; flex-direction: column; gap: 0.4rem; text-align: left; }
    .review-list h4 { margin-bottom: 0.4rem; }
    .review-item {
      display: flex; align-items: flex-start; gap: 0.75rem;
      padding: 0.5rem 0.75rem; border-radius: var(--radius);
      border: 1px solid var(--border-subtle); background: var(--bg-input);
      &.review-correct { border-color: var(--success); background: #10b98108; }
      &.review-wrong   { border-color: var(--error);   background: #ef444408; }
    }
    .review-icon { font-size: 0.9rem; margin-top: 2px; flex-shrink: 0; }
    .review-detail { display: flex; flex-direction: column; gap: 0.1rem; }
    .review-q { color: var(--text-secondary); }
    .review-answer { color: var(--text-muted); }
    .results-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center; }
  `]
})
export class QuizComponent {
  protected readonly quiz = inject(QuizService);

  protected readonly optionLetters = ['A', 'B', 'C', 'D'];

  protected readonly quizInfo = [
    { icon: '❓', label: 'Questions', val: '10 random' },
    { icon: '🏷️', label: 'Topics',    val: '6 categories' },
    { icon: '⏱️', label: 'Timed?',    val: 'No — take your time' },
    { icon: '💡', label: 'Feedback',  val: 'Instant explanations' },
  ];

  // ── Derived from service ──────────────────────────────────────
  protected readonly quizStarted = signal(false);

  protected readonly currentQ     = this.quiz.currentQ;
  protected readonly currentIdx   = computed(() => this.quiz.state().currentQuestion);
  protected readonly totalQs      = computed(() => this.quiz.state().questions.length);
  protected readonly score        = computed(() => this.quiz.state().score);
  protected readonly isCompleted  = computed(() => this.quiz.state().completed);
  protected readonly showExplanation = computed(() => this.quiz.state().showExplanation);
  protected readonly scorePercent = this.quiz.scorePercent;

  protected readonly selectedAnswer = computed((): number | null => {
    const s = this.quiz.state();
    return s.answers[s.currentQuestion] ?? null;
  });

  protected readonly wasCorrect = computed((): boolean => {
    const q = this.currentQ();
    const ans = this.selectedAnswer();
    return q !== null && ans !== null && ans === q.correctAnswer;
  });

  protected readonly reviewItems = computed(() => {
    const s = this.quiz.state();
    return s.questions.map((q, i) => ({
      question: q.question,
      correct: s.answers[i] === q.correctAnswer,
      correctAnswer: q.options[q.correctAnswer],
    }));
  });

  protected readonly scoreMessage = computed((): string => {
    const p = this.scorePercent();
    if (p >= 90) return '🌟 Outstanding! You have a deep understanding of digital logic.';
    if (p >= 80) return '🎉 Great job! You know your gates and adders well.';
    if (p >= 60) return '👍 Good effort! A bit more practice on carries and transistors will help.';
    if (p >= 40) return '📖 Keep going! Review the Gates Playground and Adder sections.';
    return '🔁 Don\'t worry — start with Binary Basics and work through each section step by step.';
  });

  // ── Actions ───────────────────────────────────────────────────

  protected startQuiz(): void {
    this.quiz.startQuiz(10);
    this.quizStarted.set(true);
  }

  protected selectAnswer(index: number): void {
    if (this.showExplanation()) return;
    this.quiz.answer(index);
  }

  protected next(): void {
    this.quiz.next();
  }

  protected categoryLabel(cat: string): string {
    const map: Record<string, string> = {
      'binary-concept':      'Binary',
      'gate-identification': 'Gates',
      'gate-output':         'Gate Output',
      'adder-output':        'Adders',
      'carry-propagation':   'Carry',
      'transistor-concept':  'Transistors',
    };
    return map[cat] ?? cat;
  }
}
