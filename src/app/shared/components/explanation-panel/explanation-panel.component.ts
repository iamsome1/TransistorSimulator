import { Component, input } from '@angular/core';
import { ExplanationStep } from '../../../core/models';

/**
 * ExplanationPanel — displays a numbered list of concept steps.
 * The `activeStep` input controls which step is highlighted.
 */
@Component({
  selector: 'app-explanation-panel',
  standalone: true,
  template: `
    <div class="exp-panel">
      <div class="exp-header">
        <span class="exp-icon">💡</span>
        <h4>{{ title() }}</h4>
      </div>
      <ol class="exp-steps">
        @for (step of steps(); track step.id) {
          <li class="exp-step" [class.active]="step.id === activeStep()">
            <div class="step-num">{{ step.id }}</div>
            <div class="step-body">
              <strong>{{ step.title }}</strong>
              <p>{{ step.body }}</p>
            </div>
          </li>
        }
      </ol>
    </div>
  `,
  styles: [`
    .exp-panel {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    .exp-header {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.9rem 1.25rem;
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border-subtle);
      h4 { margin: 0; color: var(--accent); }
    }
    .exp-steps {
      list-style: none;
      padding: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .exp-step {
      display: flex;
      gap: 0.75rem;
      padding: 0.7rem 0.9rem;
      border-radius: var(--radius);
      border: 1px solid transparent;
      transition: all 250ms;
      &.active {
        border-color: var(--accent);
        background: var(--accent-dim);
        .step-num { background: var(--accent); color: #000; }
      }
    }
    .step-num {
      width: 1.6rem; height: 1.6rem;
      border-radius: 50%;
      background: var(--border-default);
      color: var(--text-secondary);
      font-size: 0.75rem;
      font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      transition: background 250ms, color 250ms;
    }
    .step-body {
      strong { display: block; font-size: 0.875rem; color: var(--text-primary); margin-bottom: 0.15rem; }
      p { font-size: 0.8rem; margin: 0; }
    }
  `]
})
export class ExplanationPanelComponent {
  readonly title      = input<string>('How it works');
  readonly steps      = input<ExplanationStep[]>([]);
  readonly activeStep = input<number>(-1);
}
