import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SectionCard {
  path: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="home fade-in">

      <!-- Hero -->
      <section class="hero">
        <div class="hero-badge">Interactive Learning</div>
        <h1>
          How does a chip<br>
          <span class="hero-accent">add two numbers?</span>
        </h1>
        <p class="hero-desc">
          From a single transistor switch to a complete 8-bit adder — explore
          every layer of the digital stack through animated, interactive
          visualisations. No prior electronics knowledge needed.
        </p>
        <div class="hero-actions">
          <a class="btn btn-primary" routerLink="/binary-basics">Start Learning ▶</a>
          <a class="btn btn-secondary" routerLink="/quiz">Take the Quiz 🎯</a>
        </div>
        <div class="hero-stats">
          <div class="stat"><span class="stat-n">8</span><span class="stat-l">Layers</span></div>
          <div class="stat"><span class="stat-n">20+</span><span class="stat-l">Quiz Qs</span></div>
          <div class="stat"><span class="stat-n">∞</span><span class="stat-l">Combinations</span></div>
          <div class="stat"><span class="stat-n">0</span><span class="stat-l">Prerequisites</span></div>
        </div>
      </section>

      <!-- Concept Flow -->
      <section class="concept-flow">
        <div class="section-header">
          <span class="label">Progressive Learning Path</span>
          <h2>From switches to adders</h2>
          <p>Each layer builds on the previous. Follow the path or jump directly to any topic.</p>
        </div>
        <div class="flow-steps">
          @for (step of flowSteps; track step.n) {
            <div class="flow-step">
              <div class="flow-n">{{ step.n }}</div>
              <div class="flow-icon">{{ step.icon }}</div>
              <div class="flow-label">{{ step.label }}</div>
              @if (!$last) { <div class="flow-arrow">→</div> }
            </div>
          }
        </div>
      </section>

      <!-- Section Cards Grid -->
      <section>
        <div class="section-header">
          <span class="label">All Sections</span>
          <h2>Choose your topic</h2>
        </div>
        <div class="cards-grid">
          @for (card of sections; track card.path) {
            <a class="section-card" [routerLink]="card.path"
               [style.--card-color]="card.color">
              @if (card.badge) {
                <span class="card-badge">{{ card.badge }}</span>
              }
              <div class="card-icon">{{ card.icon }}</div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
              <span class="card-cta">Explore →</span>
            </a>
          }
        </div>
      </section>

      <!-- Key Concepts -->
      <section class="concepts-row">
        <div class="section-header">
          <span class="label">Key Ideas</span>
          <h2>Things you'll understand after this</h2>
        </div>
        <div class="concepts-grid">
          @for (c of keyConcepts; track c.q) {
            <div class="concept-card">
              <span class="concept-icon">{{ c.icon }}</span>
              <strong>{{ c.q }}</strong>
              <p>{{ c.a }}</p>
            </div>
          }
        </div>
      </section>

    </div>
  `,
  styles: [`
    .home { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 3.5rem; }

    /* Hero */
    .hero {
      text-align: center;
      padding: 2rem 1rem;
    }
    .hero-badge {
      display: inline-block;
      padding: 0.3rem 0.9rem;
      border-radius: 999px;
      background: var(--accent-dim);
      border: 1px solid var(--border-accent);
      color: var(--accent);
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
    }
    .hero h1 { margin-bottom: 1rem; }
    .hero-accent { color: var(--accent); }
    .hero-desc {
      max-width: 560px;
      margin: 0 auto 1.75rem;
      font-size: 1.05rem;
    }
    .hero-actions { display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap; margin-bottom: 2rem; }
    .hero-stats {
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    .stat { text-align: center; }
    .stat-n { display: block; font-size: 1.75rem; font-weight: 800; color: var(--text-primary); font-family: var(--font-code); }
    .stat-l { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; }

    /* Flow */
    .flow-steps {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.25rem;
      padding: 1.5rem;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
    }
    .flow-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      flex: 1;
      min-width: 70px;
    }
    .flow-n {
      width: 1.5rem; height: 1.5rem;
      border-radius: 50%;
      background: var(--accent-dim);
      border: 1px solid var(--accent);
      color: var(--accent);
      font-size: 0.7rem;
      font-weight: 700;
      display: flex; align-items: center; justify-content: center;
    }
    .flow-icon { font-size: 1.4rem; }
    .flow-label { font-size: 0.7rem; text-align: center; color: var(--text-secondary); }
    .flow-arrow { font-size: 1.2rem; color: var(--text-muted); margin: 0 0.25rem; align-self: center; }

    /* Cards */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
    }
    .section-card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      padding: 1.25rem;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: inherit;
      transition: border-color 200ms, transform 200ms, box-shadow 200ms;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0;
        width: 3px; height: 100%;
        background: var(--card-color, var(--accent));
      }
      &:hover {
        border-color: var(--card-color, var(--accent));
        transform: translateY(-2px);
        box-shadow: var(--shadow);
      }
      h3 { color: var(--text-primary); font-size: 0.95rem; }
      p  { font-size: 0.8rem; flex: 1; }
    }
    .card-icon { font-size: 1.75rem; }
    .card-badge {
      position: absolute;
      top: 0.6rem; right: 0.6rem;
      font-size: 0.65rem;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      background: var(--purple-dim);
      color: var(--purple);
      border: 1px solid var(--purple);
      font-weight: 600;
    }
    .card-cta { font-size: 0.8rem; color: var(--card-color, var(--accent)); font-weight: 600; margin-top: 0.25rem; }

    /* Concepts */
    .concepts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 0.75rem;
    }
    .concept-card {
      padding: 1rem 1.1rem;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius);
      .concept-icon { font-size: 1.3rem; display: block; margin-bottom: 0.4rem; }
      strong { font-size: 0.85rem; color: var(--text-primary); display: block; margin-bottom: 0.3rem; }
      p { font-size: 0.78rem; }
    }
  `]
})
export class HomeComponent {
  protected readonly flowSteps = [
    { n: 1, icon: '🔢', label: 'Decimal' },
    { n: 2, icon: '01', label: 'Binary' },
    { n: 3, icon: '⚙️', label: 'Gates' },
    { n: 4, icon: '½', label: 'Half Adder' },
    { n: 5, icon: '🔁', label: 'Full Adder' },
    { n: 6, icon: '🌊', label: 'Ripple Carry' },
    { n: 7, icon: '🔬', label: 'Transistors' },
    { n: 8, icon: '🎯', label: 'Quiz' },
  ];

  protected readonly sections: SectionCard[] = [
    {
      path: 'binary-basics', icon: '🔢', color: '#00d4ff',
      title: 'Binary Basics',
      description: 'Convert decimal numbers to binary and watch bit-by-bit addition with carry propagation.',
    },
    {
      path: 'gate-playground', icon: '⚙️', color: '#a78bfa',
      title: 'Gate Playground',
      description: 'Toggle AND, OR, XOR, NOT, NAND, NOR gates interactively. See live truth tables.',
    },
    {
      path: 'half-adder', icon: '➕', color: '#10b981',
      title: 'Half Adder',
      description: 'Explore how XOR + AND combine to form the simplest 1-bit adder circuit.',
    },
    {
      path: 'full-adder', icon: '🔁', color: '#f59e0b',
      title: 'Full Adder',
      description: 'Add carry-in to the mix. Watch how two half adders and an OR gate handle all 3 inputs.',
    },
    {
      path: 'ripple-carry', icon: '🌊', color: '#ef4444',
      title: 'Ripple Carry Adder',
      description: 'Chain 4 or 8 full adders. Watch carry ripple through positions from LSB to MSB.',
      badge: 'Animated',
    },
    {
      path: 'transistor', icon: '🔬', color: '#06b6d4',
      title: 'Transistor Concept',
      description: 'Understand how tiny transistor switches form logic gates, which form adders.',
    },
    {
      path: 'quiz', icon: '🎯', color: '#ec4899',
      title: 'Quiz Mode',
      description: 'Test your understanding with 20+ questions. Instant feedback and explanations.',
      badge: 'New',
    },
  ];

  protected readonly keyConcepts = [
    { icon: '💡', q: 'Why binary?', a: 'Transistors have 2 states: ON and OFF — a perfect match for 1 and 0.' },
    { icon: '📦', q: 'What is a bit?', a: 'The smallest unit of data — a single 0 or 1 stored in one transistor switch.' },
    { icon: '➡️', q: 'What is carry?', a: 'When 1+1=2, binary needs two bits (10). The left bit "carries" to the next column.' },
    { icon: '⬅️', q: 'Why right to left?', a: 'Each column generates a carry for the next — we must process LSB first.' },
    { icon: '½', q: 'Half vs Full Adder?', a: 'Half adds 2 bits; Full adds 3 (including carry-in from the previous column).' },
    { icon: '🔗', q: 'Why chain adders?', a: 'Each bit column needs its own full adder. Chain them to handle multi-bit numbers.' },
  ];
}
