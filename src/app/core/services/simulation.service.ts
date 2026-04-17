import { Injectable, signal, computed } from '@angular/core';
import { AnimationSpeed, SPEED_MS } from '../models';

/**
 * SimulationService — manages playback state for step-by-step animations.
 *
 * Components inject this service and read from its signals to know
 * which step is active and whether playback is running.
 */
@Injectable({ providedIn: 'root' })
export class SimulationService {

  // ── Playback state (Signals) ──────────────────────────────────
  readonly isPlaying  = signal(false);
  readonly speed      = signal<AnimationSpeed>(2);
  readonly currentStep = signal(0);
  readonly totalSteps  = signal(0);

  readonly progressPercent = computed(() =>
    this.totalSteps() === 0 ? 0 :
    Math.round((this.currentStep() / Math.max(1, this.totalSteps() - 1)) * 100)
  );

  readonly isAtStart = computed(() => this.currentStep() === 0);
  readonly isAtEnd   = computed(() => this.currentStep() >= this.totalSteps() - 1);

  private _timer: ReturnType<typeof setTimeout> | null = null;
  private _onStep: (() => void) | null = null;

  // ── Public API ────────────────────────────────────────────────

  /** Initialise (or re-initialise) the simulation with a total step count */
  init(totalSteps: number): void {
    this.stop();
    this.totalSteps.set(totalSteps);
    this.currentStep.set(0);
  }

  /** Register a callback that fires each time the step advances */
  onStep(callback: () => void): void {
    this._onStep = callback;
  }

  play(): void {
    if (this.isPlaying() || this.isAtEnd()) return;
    this.isPlaying.set(true);
    this._scheduleNext();
  }

  pause(): void {
    this.isPlaying.set(false);
    this._clearTimer();
  }

  stop(): void {
    this.pause();
    this.currentStep.set(0);
  }

  stepForward(): void {
    if (!this.isAtEnd()) {
      this.currentStep.update(s => s + 1);
      this._onStep?.();
    }
  }

  stepBack(): void {
    if (!this.isAtStart()) {
      this.currentStep.update(s => s - 1);
      this._onStep?.();
    }
  }

  jumpTo(step: number): void {
    const clamped = Math.max(0, Math.min(step, this.totalSteps() - 1));
    this.currentStep.set(clamped);
    this._onStep?.();
  }

  setSpeed(s: AnimationSpeed): void {
    this.speed.set(s);
    // If already playing, restart timer at new speed
    if (this.isPlaying()) {
      this._clearTimer();
      this._scheduleNext();
    }
  }

  // ── Private helpers ───────────────────────────────────────────

  private _scheduleNext(): void {
    const ms = SPEED_MS[this.speed()];
    this._timer = setTimeout(() => {
      if (!this.isPlaying()) return;
      this.stepForward();
      if (this.isAtEnd()) {
        this.isPlaying.set(false);
      } else {
        this._scheduleNext();
      }
    }, ms);
  }

  private _clearTimer(): void {
    if (this._timer !== null) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }
}
