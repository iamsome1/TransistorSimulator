import { Component, inject, signal, computed, effect, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BinaryService } from '../../core/services/binary.service';
import { BitAdditionStep, PresetExample, SPEED_MS, AnimationSpeed } from '../../core/models';

@Component({
  selector: 'app-ripple-carry',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="page fade-in">

      <div class="section-header">
        <span class="label">Layer 6 — Ripple Carry Adder</span>
        <h2>Ripple Carry Adder</h2>
        <p>
          Chain multiple full adders together. Each adder hands its carry output to
          the next one — that rippling effect is what gives this circuit its name.
        </p>
      </div>

      <!-- Controls card -->
      <div class="card controls-card">
        <div class="controls-row">

          <!-- Bit mode -->
          <div class="ctrl-group">
            <label class="ctrl-label">Bit Width</label>
            <div class="bit-mode-btns">
              <button class="btn btn-sm" [class.btn-primary]="bits()===4"
                      [class.btn-ghost]="bits()!==4" (click)="setBits(4)">4-bit</button>
              <button class="btn btn-sm" [class.btn-primary]="bits()===8"
                      [class.btn-ghost]="bits()!==8" (click)="setBits(8)">8-bit</button>
            </div>
          </div>

          <!-- Number inputs -->
          <div class="ctrl-group">
            <label class="ctrl-label">Number A (0–{{ maxVal() }})</label>
            <input type="number" class="num-input" min="0" [max]="maxVal()"
                   [ngModel]="numA()" (ngModelChange)="setA($event)" />
          </div>

          <div class="ctrl-plus">+</div>

          <div class="ctrl-group">
            <label class="ctrl-label">Number B (0–{{ maxVal() }})</label>
            <input type="number" class="num-input" min="0" [max]="maxVal()"
                   [ngModel]="numB()" (ngModelChange)="setB($event)" />
          </div>

          <div class="ctrl-equals">=</div>

          <div class="ctrl-group result-group">
            <label class="ctrl-label">Result</label>
            <div class="result-dec" [class.overflow]="overflow()">{{ displayResult() }}</div>
            @if (overflow()) {
              <span class="overflow-label">⚠ OVERFLOW</span>
            }
          </div>
        </div>

        <!-- Presets -->
        <div class="presets-row">
          <span class="text-xs text-muted">Examples:</span>
          <div class="preset-chips">
            @for (p of presets; track p.label) {
              <button class="preset-chip"
                      [class.active]="numA()===p.a && numB()===p.b"
                      (click)="loadPreset(p)">{{ p.label }}</button>
            }
          </div>
        </div>
      </div>

      <!-- Animation controls -->
      <div class="card anim-controls">
        <div class="anim-row">
          <button class="btn btn-ghost btn-icon" (click)="stepBack()"
                  [disabled]="activeStep() <= -1" title="Step back">⏮</button>
          <button class="btn btn-primary play-btn" (click)="togglePlay()">
            {{ isPlaying() ? '⏸ Pause' : '▶ Play Animation' }}
          </button>
          <button class="btn btn-ghost btn-icon" (click)="stepForward()"
                  [disabled]="activeStep() >= steps().length - 1" title="Step forward">⏭</button>
          <button class="btn btn-ghost btn-icon" (click)="resetAnim()" title="Reset">↺</button>

          <div class="speed-row">
            <span class="text-xs text-muted">Speed</span>
            <input type="range" min="1" max="5" step="1"
                   [value]="speed()"
                   (input)="setSpeed($event)" style="width:80px" />
            <span class="text-xs text-accent">{{ speedLabels[speed()] }}</span>
          </div>
        </div>

        <!-- Progress dots -->
        <div class="step-indicator">
          @for (step of steps(); track step.position) {
            <div class="step-dot"
                 [class.active]="step.position === activeStep()"
                 [class.done]="step.position < activeStep()"
                 [title]="'Bit ' + step.position"></div>
          }
        </div>
      </div>

      <!-- Adder chain visualisation -->
      <div class="card chain-card">
        <div class="chain-header">
          <span class="text-xs text-muted">← MSB</span>
          <h3>Full Adder Chain ({{ bits() }}-bit)</h3>
          <span class="text-xs text-muted">LSB →</span>
        </div>

        <div class="adder-chain">

          <!-- Final carry overflow indicator -->
          @if (overflow()) {
            <div class="overflow-box">
              <div class="overflow-arrow">Cout</div>
              <div class="ov-val carry-val">1</div>
            </div>
          }

          <!-- Full adder blocks (MSB first in display) -->
          @for (step of displaySteps(); track step.position) {
            <div class="fa-block"
                 [class.fa-active]="step.position === activeStep()"
                 [class.fa-done]="step.position < activeStep()">

              <!-- Carry-in at top -->
              <div class="carry-pin top-pin"
                   [class.pin-active]="step.carryIn === 1">
                <div class="pin-label">Cin</div>
                <div class="pin-val" [class.carry-val]="step.carryIn===1">{{ step.position < activeStep() || step.position === activeStep() ? step.carryIn : '?' }}</div>
              </div>

              <!-- FA body -->
              <div class="fa-body">
                <div class="fa-title">FA {{ step.position }}</div>
                <div class="fa-inputs">
                  <div class="fa-input-bit" [class.bit-hi]="step.aBit===1">
                    A={{ step.position <= activeStep() ? step.aBit : '?' }}
                  </div>
                  <div class="fa-input-bit" [class.bit-hi]="step.bBit===1">
                    B={{ step.position <= activeStep() ? step.bBit : '?' }}
                  </div>
                </div>

                <div class="fa-output-sum"
                     [class.sum-active]="step.position <= activeStep() && step.sum===1">
                  S={{ step.position <= activeStep() ? step.sum : '?' }}
                </div>
              </div>

              <!-- Carry-out at bottom -->
              <div class="carry-pin bot-pin"
                   [class.pin-active]="step.position < activeStep() && step.carryOut===1">
                <div class="pin-val" [class.carry-val]="step.carryOut===1">{{ step.position < activeStep() ? step.carryOut : '?' }}</div>
                <div class="pin-label">Cout</div>
              </div>

              <!-- Carry-out ripple arrow (not on LSB) -->
              @if (step.position > 0) {
                <div class="ripple-arrow"
                     [class.arrow-active]="step.position <= activeStep() && step.carryOut===1">
                  ←
                </div>
              }

            </div>
          }

        </div>
      </div>

      <!-- Binary aligned addition display -->
      <div class="card binary-display-card">
        <h3>Binary addition — column by column</h3>
        <div class="bin-table">
          <div class="bin-row">
            <span class="bin-label">A = {{ numA() }}</span>
            <div class="bin-bits">
              @for (bit of bitsA(); track $index) {
                <span class="bin-bit" [class.bit-1]="bit===1" [class.bit-0]="bit===0"
                      [class.bit-active]="(bits()-1-$index) === activeStep()">{{ bit }}</span>
              }
            </div>
          </div>
          <div class="bin-row">
            <span class="bin-label">B = {{ numB() }}</span>
            <div class="bin-bits">
              @for (bit of bitsB(); track $index) {
                <span class="bin-bit" [class.bit-1]="bit===1" [class.bit-0]="bit===0"
                      [class.bit-active]="(bits()-1-$index) === activeStep()">{{ bit }}</span>
              }
            </div>
          </div>
          <div class="bin-separator"></div>
          <div class="bin-row result-row">
            <span class="bin-label">= {{ displayResult() }}</span>
            <div class="bin-bits">
              @for (bit of bitsResult(); track $index) {
                <span class="bin-bit result-bit"
                      [class.bit-1]="bit===1" [class.bit-0]="bit===0"
                      [class.bit-revealed]="(bits()-1-$index) <= activeStep()">
                  {{ (bits()-1-$index) <= activeStep() ? bit : '?' }}
                </span>
              }
            </div>
          </div>
        </div>

        <!-- Active step explanation -->
        @if (activeStep() >= 0 && activeStep() < steps().length) {
          <div class="step-explain explanation-box mt-3">
            {{ currentStepExplanation() }}
          </div>
        }
      </div>

      <!-- Concept box -->
      <div class="explanation-box">
        <div class="icon">🌊</div>
        <h4>Why "Ripple" Carry?</h4>
        <p>
          Each full adder must wait for the carry from the adder to its right before it can produce
          its own sum and carry. In the worst case (e.g., adding 0111…1 + 0000…1), the carry ripples
          all the way from bit 0 to bit N−1. This makes ripple-carry adders simple but slow for wide
          word sizes. Modern CPUs use <em>carry-lookahead</em> adders that compute carries in parallel.
        </p>
      </div>

    </div>
  `,
  styles: [`
    .page { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }

    /* Controls */
    .controls-card { display: flex; flex-direction: column; gap: 1rem; }
    .controls-row {
      display: flex; flex-wrap: wrap; align-items: flex-end; gap: 1.25rem;
    }
    .ctrl-group { display: flex; flex-direction: column; gap: 0.35rem; }
    .ctrl-label { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
    .bit-mode-btns { display: flex; gap: 0.35rem; }
    .ctrl-plus, .ctrl-equals {
      font-size: 2rem; font-weight: 700; color: var(--text-muted);
      align-self: center; padding-bottom: 0.1rem;
    }
    .result-group .result-dec {
      font-family: var(--font-code); font-size: 1.75rem; font-weight: 800;
      color: var(--sig-high); min-width: 4rem;
      &.overflow { color: var(--error); }
    }
    .overflow-label { font-size: 0.7rem; color: var(--warning); }
    .presets-row { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }

    /* Animation controls */
    .anim-controls { display: flex; flex-direction: column; gap: 0.75rem; }
    .anim-row { display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; }
    .play-btn { min-width: 9rem; justify-content: center; }
    .speed-row { display: flex; align-items: center; gap: 0.5rem; margin-left: auto; }

    /* Adder chain */
    .chain-card { overflow: hidden; }
    .chain-header {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 1rem;
    }
    .adder-chain {
      display: flex;
      flex-direction: row-reverse; /* LSB on right */
      align-items: stretch;
      gap: 0;
      overflow-x: auto;
      padding-bottom: 0.5rem;
    }
    .overflow-box {
      display: flex; flex-direction: column; align-items: center;
      justify-content: center; gap: 0.3rem;
      padding: 0 0.5rem;
      .overflow-arrow { font-size: 0.65rem; color: var(--sig-carry); }
    }

    .fa-block {
      position: relative;
      display: flex; flex-direction: column; align-items: center;
      min-width: 80px;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius);
      margin: 2px;
      background: var(--bg-card);
      transition: border-color 250ms, background 250ms, box-shadow 250ms;

      &.fa-active {
        border-color: var(--accent);
        background: var(--accent-dim);
        box-shadow: 0 0 16px var(--accent-dim);
      }
      &.fa-done {
        border-color: var(--success);
        background: #10b98108;
      }
    }

    .carry-pin {
      display: flex; flex-direction: column; align-items: center; gap: 2px;
      padding: 0.3rem 0.4rem;
      width: 100%;
      &.top-pin { border-bottom: 1px solid var(--border-subtle); }
      &.bot-pin { border-top: 1px solid var(--border-subtle); }
      &.pin-active { background: #f59e0b11; }
    }
    .pin-label { font-size: 0.6rem; color: var(--text-muted); }
    .pin-val {
      font-family: var(--font-code); font-size: 0.9rem; font-weight: 700;
      color: var(--text-muted);
      &.carry-val { color: var(--sig-carry); text-shadow: var(--sig-carry-glow); }
    }

    .fa-body {
      display: flex; flex-direction: column; align-items: center;
      padding: 0.5rem 0.4rem; gap: 0.35rem; flex: 1;
    }
    .fa-title { font-size: 0.72rem; font-weight: 700; color: var(--text-secondary); }
    .fa-inputs { display: flex; gap: 0.4rem; }
    .fa-input-bit {
      font-family: var(--font-code); font-size: 0.78rem;
      padding: 0.1rem 0.3rem; border-radius: var(--radius-sm);
      background: var(--bg-input); border: 1px solid var(--border-subtle);
      color: var(--text-muted);
      &.bit-hi { color: var(--sig-high); border-color: var(--sig-high); }
    }
    .fa-output-sum {
      font-family: var(--font-code); font-size: 0.95rem; font-weight: 700;
      padding: 0.2rem 0.5rem; border-radius: var(--radius-sm);
      border: 1.5px solid var(--border-default); color: var(--text-muted);
      transition: all 250ms;
      &.sum-active { color: var(--sig-high); border-color: var(--sig-high); background: #00ff8811; box-shadow: var(--sig-high-glow); }
    }

    .ripple-arrow {
      position: absolute; left: -18px; top: 50%;
      transform: translateY(-50%);
      font-size: 1.1rem; color: var(--text-muted);
      transition: color 250ms;
      &.arrow-active { color: var(--sig-carry); text-shadow: var(--sig-carry-glow); }
    }

    /* Binary display */
    .bin-table { display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.75rem; }
    .bin-row { display: flex; align-items: center; gap: 1rem; }
    .bin-label { font-size: 0.8rem; color: var(--text-muted); width: 90px; text-align: right; font-family: var(--font-code); }
    .bin-bits { display: flex; gap: 3px; }
    .bin-bit {
      width: 2.2rem; height: 2.2rem;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-code); font-size: 1rem; font-weight: 700;
      border: 1.5px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      color: var(--text-muted);
      transition: all 250ms;
      &.bit-active { border-color: var(--accent); background: var(--accent-dim); color: var(--text-primary); }
      &.bit-1 { color: var(--sig-high); }
    }
    .bin-separator { height: 2px; background: var(--border-default); margin: 4px 0 4px 98px; }
    .result-bit {
      color: var(--text-muted);
      &.bit-revealed.bit-1 { color: var(--sig-high); background: #00ff8808; border-color: var(--sig-high); }
      &.bit-revealed.bit-0 { color: var(--text-secondary); }
    }
    .result-row .bin-label { color: var(--sig-high); font-weight: 700; }
    .step-explain { font-size: 0.88rem; }
  `]
})
export class RippleCarryComponent implements OnDestroy {
  private readonly binarySvc = inject(BinaryService);

  protected readonly bits     = signal<4|8>(4);
  protected readonly numA     = signal(5);
  protected readonly numB     = signal(3);
  protected readonly activeStep = signal(-1);   // -1 = nothing highlighted yet
  protected readonly isPlaying  = signal(false);
  protected readonly speed      = signal<AnimationSpeed>(2);

  protected readonly speedLabels: Record<number, string> = {
    1:'Slow', 2:'Normal', 3:'Fast', 4:'Faster', 5:'Turbo'
  };

  private _timer: ReturnType<typeof setTimeout> | null = null;

  // ── Computed ─────────────────────────────────────────────────
  protected readonly maxVal   = computed(() => Math.pow(2, this.bits()) - 1);
  protected readonly steps    = computed(() =>
    this.binarySvc.computeRippleCarry(this.numA(), this.numB(), this.bits())
  );
  // Display order: MSB first
  protected readonly displaySteps = computed(() => [...this.steps()].reverse());

  protected readonly result  = computed(() =>
    this.steps().reduce((acc, s, i) => acc + s.sum * Math.pow(2, i), 0)
  );
  protected readonly overflow = computed(() =>
    this.numA() + this.numB() > this.maxVal()
  );
  protected readonly displayResult = computed(() =>
    this.overflow() ? `${this.result()} (overflow!)` : this.result().toString()
  );

  protected readonly bitsA      = computed(() => this.binarySvc.getBitsMSBFirst(this.numA(), this.bits()));
  protected readonly bitsB      = computed(() => this.binarySvc.getBitsMSBFirst(this.numB(), this.bits()));
  protected readonly bitsResult = computed(() => this.binarySvc.getBitsMSBFirst(this.result() & this.maxVal(), this.bits()));

  protected readonly currentStepExplanation = computed((): string => {
    const i = this.activeStep();
    const s = this.steps()[i];
    if (!s) return '';
    const total = s.aBit + s.bBit + s.carryIn;
    return `Bit ${s.position} (value ${Math.pow(2, s.position)}): ` +
      `A=${s.aBit}, B=${s.bBit}, Carry-In=${s.carryIn} → Total=${total}. ` +
      `Sum=${s.sum}, Carry-Out=${s.carryOut}. ` +
      (s.carryOut === 1 ? `⚡ Carry ripples to bit ${s.position + 1}!` : 'No carry generated.');
  });

  protected readonly presets: PresetExample[] = [
    { label:'1+1',   a:1,  b:1,  description:'' },
    { label:'3+5',   a:3,  b:5,  description:'' },
    { label:'7+8',   a:7,  b:8,  description:'' },
    { label:'9+6',   a:9,  b:6,  description:'' },
    { label:'15+1',  a:15, b:1,  description:'' },
    { label:'100+56',a:100,b:56, description:'' },
  ];

  // ── Controls ─────────────────────────────────────────────────

  protected setBits(n: 4|8): void {
    this.bits.set(n);
    this.resetAnim();
    const max = Math.pow(2, n) - 1;
    if (this.numA() > max) this.numA.set(max);
    if (this.numB() > max) this.numB.set(max);
  }

  protected setA(v: number): void {
    this.numA.set(Math.max(0, Math.min(v, this.maxVal())));
    this.resetAnim();
  }
  protected setB(v: number): void {
    this.numB.set(Math.max(0, Math.min(v, this.maxVal())));
    this.resetAnim();
  }

  protected loadPreset(p: PresetExample): void {
    this.numA.set(p.a);
    this.numB.set(p.b);
    this.resetAnim();
  }

  // ── Animation ────────────────────────────────────────────────

  protected togglePlay(): void {
    if (this.isPlaying()) { this._pause(); } else { this._play(); }
  }

  protected stepForward(): void {
    const max = this.steps().length - 1;
    this.activeStep.update(s => Math.min(s + 1, max));
  }
  protected stepBack(): void {
    this.activeStep.update(s => Math.max(s - 1, -1));
  }
  protected resetAnim(): void {
    this._pause();
    this.activeStep.set(-1);
  }
  protected setSpeed(e: Event): void {
    this.speed.set(+(e.target as HTMLInputElement).value as AnimationSpeed);
  }

  private _play(): void {
    if (this.activeStep() >= this.steps().length - 1) {
      this.activeStep.set(-1);
    }
    this.isPlaying.set(true);
    this._tick();
  }

  private _pause(): void {
    this.isPlaying.set(false);
    if (this._timer) { clearTimeout(this._timer); this._timer = null; }
  }

  private _tick(): void {
    const ms = SPEED_MS[this.speed()];
    this._timer = setTimeout(() => {
      const next = this.activeStep() + 1;
      if (next >= this.steps().length) {
        this.isPlaying.set(false);
        return;
      }
      this.activeStep.set(next);
      if (this.isPlaying()) this._tick();
    }, ms);
  }

  ngOnDestroy(): void { this._pause(); }
}
