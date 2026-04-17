import { Component, inject, output } from '@angular/core';
import { SimulationService } from '../../../core/services/simulation.service';
import { AnimationSpeed } from '../../../core/models';

/**
 * SimulationControls — play/pause/step/speed bar reused across all simulators.
 * Delegates directly to SimulationService; emits `reset` for parent to handle.
 */
@Component({
  selector: 'app-simulation-controls',
  standalone: true,
  template: `
    <div class="sim-controls">

      <!-- Step Back -->
      <button class="btn btn-ghost btn-icon btn-sm"
              (click)="sim.stepBack()"
              [disabled]="sim.isAtStart()"
              title="Previous step">
        ⏮
      </button>

      <!-- Play / Pause -->
      <button class="btn btn-primary btn-sm play-btn"
              (click)="togglePlay()"
              [disabled]="sim.isAtEnd()">
        @if (sim.isPlaying()) { ⏸ Pause } @else { ▶ Play }
      </button>

      <!-- Step Forward -->
      <button class="btn btn-ghost btn-icon btn-sm"
              (click)="sim.stepForward()"
              [disabled]="sim.isAtEnd()"
              title="Next step">
        ⏭
      </button>

      <!-- Reset -->
      <button class="btn btn-ghost btn-icon btn-sm"
              (click)="onReset()"
              title="Reset">
        ↺
      </button>

      <div class="divider"></div>

      <!-- Speed -->
      <div class="speed-control">
        <span class="speed-label">Speed</span>
        <input type="range" min="1" max="5" step="1"
               [value]="sim.speed()"
               (input)="setSpeed($event)"
               class="speed-slider" />
        <span class="speed-val">{{ speedLabel() }}</span>
      </div>

      <!-- Progress -->
      <div class="progress-wrap">
        <div class="progress-bar" [style.width.%]="sim.progressPercent()"></div>
      </div>
      <span class="step-counter">
        {{ sim.currentStep() + 1 }} / {{ sim.totalSteps() }}
      </span>

    </div>
  `,
  styles: [`
    .sim-controls {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      background: var(--bg-secondary);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
    }
    .play-btn { min-width: 6rem; justify-content: center; }
    .divider  { width: 1px; height: 1.5rem; background: var(--border-subtle); }

    .speed-control {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .speed-label { font-size: 0.75rem; color: var(--text-muted); }
    .speed-slider { width: 80px; }
    .speed-val { font-size: 0.75rem; color: var(--accent); font-family: var(--font-code); min-width: 2rem; }

    .progress-wrap {
      flex: 1;
      min-width: 60px;
      height: 4px;
      background: var(--border-default);
      border-radius: 2px;
      overflow: hidden;
    }
    .progress-bar {
      height: 100%;
      background: var(--accent);
      border-radius: 2px;
      transition: width 200ms;
    }
    .step-counter {
      font-size: 0.75rem;
      color: var(--text-muted);
      font-family: var(--font-code);
      white-space: nowrap;
    }
  `]
})
export class SimulationControlsComponent {
  protected readonly sim = inject(SimulationService);

  /** Parent listens to this to re-initialise state */
  readonly reset = output<void>();

  protected togglePlay(): void {
    if (this.sim.isPlaying()) {
      this.sim.pause();
    } else {
      this.sim.play();
    }
  }

  protected onReset(): void {
    this.sim.stop();
    this.reset.emit();
  }

  protected setSpeed(event: Event): void {
    const val = +(event.target as HTMLInputElement).value as AnimationSpeed;
    this.sim.setSpeed(val);
  }

  protected speedLabel(): string {
    const labels: Record<number, string> = { 1: '1× Slow', 2: '2×', 3: '3×', 4: '4×', 5: '5× Fast' };
    return labels[this.sim.speed()] ?? '–';
  }
}
