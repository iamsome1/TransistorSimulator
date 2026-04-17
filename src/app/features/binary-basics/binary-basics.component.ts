import { Component, inject, signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BinaryService } from '../../core/services/binary.service';
import { BitAdditionStep, PresetExample } from '../../core/models';
import { TruthTableComponent } from '../../shared/components/truth-table/truth-table.component';
import { ExplanationPanelComponent } from '../../shared/components/explanation-panel/explanation-panel.component';

@Component({
  selector: 'app-binary-basics',
  standalone: true,
  imports: [FormsModule, TruthTableComponent, ExplanationPanelComponent],
  template: `
    <div class="page fade-in">

      <!-- Header -->
      <div class="section-header">
        <span class="label">Layer 1 & 2</span>
        <h2>Binary Basics</h2>
        <p>Enter two decimal numbers and see how they are converted to binary, then added bit by bit.</p>
      </div>

      <!-- Input Panel -->
      <div class="card input-panel">
        <div class="inputs-row">
          <div class="num-field">
            <label>Number A</label>
            <input type="number" class="num-input" min="0" max="255"
                   [ngModel]="numA()" (ngModelChange)="numA.set($event)" />
            <div class="binary-preview">
              @for (bit of bitsA(); track $index) {
                <span class="bit" [class.bit-1]="bit === 1" [class.bit-0]="bit === 0">{{ bit }}</span>
              }
            </div>
          </div>

          <div class="op-sign">+</div>

          <div class="num-field">
            <label>Number B</label>
            <input type="number" class="num-input" min="0" max="255"
                   [ngModel]="numB()" (ngModelChange)="numB.set($event)" />
            <div class="binary-preview">
              @for (bit of bitsB(); track $index) {
                <span class="bit" [class.bit-1]="bit === 1" [class.bit-0]="bit === 0">{{ bit }}</span>
              }
            </div>
          </div>

          <div class="op-sign">=</div>

          <div class="num-field result-field">
            <label>Result</label>
            <div class="result-dec">{{ result() }}</div>
            <div class="binary-preview">
              @for (bit of bitsResult(); track $index) {
                <span class="bit" [class.bit-1]="bit === 1" [class.bit-0]="bit === 0">{{ bit }}</span>
              }
            </div>
            @if (overflow()) {
              <div class="overflow-warn">⚠ Overflow! Result exceeds 8 bits.</div>
            }
          </div>
        </div>

        <!-- Presets -->
        <div class="presets">
          <span class="text-xs text-muted">Quick examples:</span>
          <div class="preset-chips">
            @for (p of presets; track p.label) {
              <button class="preset-chip"
                      [class.active]="numA() === p.a && numB() === p.b"
                      (click)="loadPreset(p)">
                {{ p.label }}
              </button>
            }
          </div>
        </div>
      </div>

      <!-- Conversion Explanation -->
      <div class="two-col">
        <div class="card conv-card">
          <h3>How {{ numA() }} becomes binary</h3>
          <ol class="conv-steps">
            @for (step of convStepsA(); track $index) {
              <li class="mono text-sm">{{ step }}</li>
            }
          </ol>
        </div>
        <div class="card conv-card">
          <h3>How {{ numB() }} becomes binary</h3>
          <ol class="conv-steps">
            @for (step of convStepsB(); track $index) {
              <li class="mono text-sm">{{ step }}</li>
            }
          </ol>
        </div>
      </div>

      <!-- Bit Position Guide -->
      <div class="card">
        <h3>Bit position values</h3>
        <p class="mt-2 mb-4">Each bit position represents a power of 2. The <strong>rightmost</strong> bit is the Least Significant Bit (LSB = 2⁰ = 1), the leftmost is the Most Significant Bit (MSB = 2⁷ = 128).</p>
        <div class="bit-positions">
          @for (pos of bitPositions; track pos.power) {
            <div class="pos-cell">
              <div class="pos-power">2<sup>{{ pos.power }}</sup></div>
              <div class="pos-value">{{ pos.value }}</div>
              <div class="pos-label">{{ pos.label }}</div>
            </div>
          }
        </div>
      </div>

      <!-- Step-by-step Addition -->
      <div class="card">
        <div class="card-header-row">
          <h3>Bit-by-bit addition</h3>
          <div class="step-controls">
            <button class="btn btn-ghost btn-sm" (click)="prevStep()" [disabled]="activeStep() === 0">◀ Prev</button>
            <button class="btn btn-primary btn-sm" (click)="nextStep()" [disabled]="activeStep() >= steps().length - 1">Next ▶</button>
            <button class="btn btn-ghost btn-sm" (click)="resetSteps()">↺ Reset</button>
          </div>
        </div>

        <!-- Column layout: aligned binary addition -->
        <div class="addition-table">
          <!-- Bit position headers (MSB left → LSB right) -->
          <div class="add-row header-row">
            <div class="add-label"></div>
            @for (pos of reversedPositions(); track pos) {
              <div class="add-cell pos-head">bit {{ pos }}</div>
            }
          </div>

          <!-- Carry row -->
          <div class="add-row carry-row">
            <div class="add-label">Carry</div>
            @for (step of reversedSteps(); track step.position) {
              <div class="add-cell"
                   [class.active-col]="step.position === activeStep()"
                   [class.bit-1]="step.carryIn === 1"
                   [class.bit-0]="step.carryIn === 0">
                {{ step.carryIn }}
              </div>
            }
            <div class="add-cell"></div>
          </div>

          <!-- A bits -->
          <div class="add-row a-row">
            <div class="add-label">A = {{ numA() }}</div>
            @for (bit of bitsA(); track $index) {
              <div class="add-cell"
                   [class.active-col]="(7 - $index) === activeStep()"
                   [class.bit-1]="bit === 1"
                   [class.bit-0]="bit === 0">
                {{ bit }}
              </div>
            }
          </div>

          <!-- B bits -->
          <div class="add-row b-row">
            <div class="add-label">B = {{ numB() }}</div>
            @for (bit of bitsB(); track $index) {
              <div class="add-cell"
                   [class.active-col]="(7 - $index) === activeStep()"
                   [class.bit-1]="bit === 1"
                   [class.bit-0]="bit === 0">
                {{ bit }}
              </div>
            }
          </div>

          <!-- Separator -->
          <div class="add-separator"></div>

          <!-- Sum bits -->
          <div class="add-row sum-row">
            <div class="add-label">Sum</div>
            @for (step of reversedSteps(); track step.position) {
              <div class="add-cell sum-cell"
                   [class.active-col]="step.position === activeStep()"
                   [class.revealed]="step.position <= activeStep()"
                   [class.bit-1]="step.sum === 1"
                   [class.bit-0]="step.sum === 0">
                {{ step.position <= activeStep() ? step.sum : '?' }}
              </div>
            }
          </div>
        </div>

        <!-- Active step detail -->
        @if (activeStepData(); as s) {
          <div class="step-detail explanation-box">
            <div class="step-detail-grid">
              <div class="sd-field">
                <span class="sd-label">Column</span>
                <span class="sd-value accent">bit {{ s.position }} (2<sup>{{ s.position }}</sup>)</span>
              </div>
              <div class="sd-field">
                <span class="sd-label">A bit</span>
                <span class="bit" [class.bit-1]="s.aBit===1" [class.bit-0]="s.aBit===0">{{ s.aBit }}</span>
              </div>
              <div class="sd-field">
                <span class="sd-label">B bit</span>
                <span class="bit" [class.bit-1]="s.bBit===1" [class.bit-0]="s.bBit===0">{{ s.bBit }}</span>
              </div>
              <div class="sd-field">
                <span class="sd-label">Carry In</span>
                <span class="bit" [class.bit-1]="s.carryIn===1" [class.bit-0]="s.carryIn===0">{{ s.carryIn }}</span>
              </div>
              <div class="sd-field">
                <span class="sd-label">Sum</span>
                <span class="bit" [class.bit-1]="s.sum===1" [class.bit-0]="s.sum===0">{{ s.sum }}</span>
              </div>
              <div class="sd-field">
                <span class="sd-label">Carry Out</span>
                <span class="bit" [class.bit-1]="s.carryOut===1" [class.bit-0]="s.carryOut===0">{{ s.carryOut }}</span>
              </div>
            </div>
            <p class="step-explanation mt-3">{{ stepExplanation() }}</p>
          </div>
        }

      </div>

      <!-- Concept box -->
      <div class="explanation-box">
        <div class="icon">📚</div>
        <h4>What is a carry?</h4>
        <p>
          In decimal, 9 + 1 = 10 — the result is two digits, so we write 0 and <em>carry</em> the 1 into the next column.
          Binary works the same way: 1 + 1 = 10 in binary (decimal 2). The sum bit is 0 and the carry bit is 1.
          That carry then feeds into the <strong>next bit column</strong> to its left — this is exactly what a
          <strong>Full Adder</strong> handles.
        </p>
      </div>

    </div>
  `,
  styles: [`
    .page { max-width: 900px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }

    /* Input panel */
    .inputs-row {
      display: flex;
      align-items: flex-start;
      gap: 1.25rem;
      flex-wrap: wrap;
    }
    .num-field {
      display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
      label { font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
    }
    .binary-preview { display: flex; gap: 3px; flex-wrap: wrap; justify-content: center; margin-top: 0.25rem; }
    .op-sign {
      font-size: 2.5rem; font-weight: 700; color: var(--text-muted);
      align-self: center; padding-top: 1.2rem;
    }
    .result-field .result-dec {
      font-family: var(--font-code); font-size: 2rem; font-weight: 800;
      color: var(--sig-high); text-shadow: var(--sig-high-glow);
    }
    .overflow-warn {
      color: var(--warning); font-size: 0.78rem; margin-top: 0.25rem;
    }
    .presets { display: flex; align-items: center; gap: 0.75rem; margin-top: 1rem; flex-wrap: wrap; }

    /* Conversion steps */
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    @media (max-width: 640px) { .two-col { grid-template-columns: 1fr; } }
    .conv-steps { padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.25rem; margin-top: 0.75rem; }
    .conv-steps li { color: var(--text-secondary); font-size: 0.82rem; }

    /* Bit positions */
    .bit-positions {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 4px;
    }
    .pos-cell {
      text-align: center;
      padding: 0.5rem 0.25rem;
      background: var(--bg-input);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
    }
    .pos-power { font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-code); }
    .pos-value { font-size: 1rem; font-weight: 700; color: var(--accent); font-family: var(--font-code); }
    .pos-label { font-size: 0.62rem; color: var(--text-muted); margin-top: 2px; }

    /* Addition table */
    .card-header-row {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;
    }
    .step-controls { display: flex; gap: 0.4rem; }
    .addition-table { overflow-x: auto; padding-bottom: 0.5rem; }
    .add-row {
      display: flex;
      align-items: center;
      gap: 0;
      min-width: max-content;
    }
    .add-label {
      width: 100px;
      font-size: 0.78rem;
      color: var(--text-muted);
      text-align: right;
      padding-right: 0.75rem;
      flex-shrink: 0;
    }
    .add-cell {
      width: 2.5rem;
      height: 2.5rem;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-code);
      font-size: 1rem;
      font-weight: 600;
      border: 1px solid var(--border-subtle);
      margin: 2px;
      border-radius: var(--radius-sm);
      transition: all 250ms;
      &.active-col {
        background: var(--accent-dim);
        border-color: var(--accent);
        box-shadow: 0 0 8px var(--accent-dim);
      }
      &.bit-1 { color: var(--sig-high); }
      &.bit-0 { color: var(--text-muted); }
      &.pos-head { font-size: 0.65rem; color: var(--text-muted); height: 1.5rem; border: none; background: transparent; }
    }
    .carry-row .add-cell { background: #1a2500; font-size: 0.85rem; }
    .sum-cell.revealed.bit-1 {
      background: #00ff8811;
      border-color: var(--sig-high);
    }
    .sum-cell:not(.revealed) { color: var(--text-muted); }
    .add-separator {
      height: 2px;
      background: var(--border-default);
      margin: 4px 0 4px 108px;
    }

    /* Step detail */
    .step-detail-grid {
      display: flex; flex-wrap: wrap; gap: 1rem;
    }
    .sd-field { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
    .sd-label { font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
    .sd-value { font-family: var(--font-code); color: var(--accent); font-weight: 700; }
    .accent { color: var(--accent); }
    .step-explanation { font-size: 0.88rem; color: var(--text-secondary); }
  `]
})
export class BinaryBasicsComponent {
  private readonly binarySvc = inject(BinaryService);

  protected readonly numA   = signal(3);
  protected readonly numB   = signal(5);
  protected readonly activeStep = signal(0);   // 0 = LSB column

  // ── Computed values ──────────────────────────────────────────
  protected readonly bitsA = computed(() => this.binarySvc.getBitsMSBFirst(this.numA(), 8));
  protected readonly bitsB = computed(() => this.binarySvc.getBitsMSBFirst(this.numB(), 8));

  protected readonly steps = computed(() =>
    this.binarySvc.computeRippleCarry(this.numA(), this.numB(), 8)
  );

  protected readonly result = computed(() => {
    const s = this.steps();
    return s.reduce((acc, step, i) => acc + step.sum * Math.pow(2, i), 0);
  });

  protected readonly overflow = computed(() => this.numA() + this.numB() > 255);

  protected readonly bitsResult = computed(() =>
    this.binarySvc.getBitsMSBFirst(this.result() & 0xFF, 8)
  );

  /** Steps in MSB-first order (for display, reversed from LSB-first computation) */
  protected readonly reversedSteps = computed(() => [...this.steps()].reverse());

  protected readonly reversedPositions = computed(() =>
    [...Array(8)].map((_, i) => 7 - i)
  );

  protected readonly activeStepData = computed((): BitAdditionStep | null =>
    this.steps()[this.activeStep()] ?? null
  );

  protected readonly convStepsA = computed(() => this.binarySvc.explainConversion(this.numA()));
  protected readonly convStepsB = computed(() => this.binarySvc.explainConversion(this.numB()));

  protected readonly stepExplanation = computed((): string => {
    const s = this.activeStepData();
    if (!s) return '';
    const sum = s.aBit + s.bBit + s.carryIn;
    const colVal = Math.pow(2, s.position);
    return `At bit position ${s.position} (value = ${colVal}): ` +
      `A=${s.aBit}, B=${s.bBit}, Carry-In=${s.carryIn}. ` +
      `Total = ${sum}. ` +
      `In binary ${sum} = "${s.carryOut}${s.sum}" → Sum bit = ${s.sum}, Carry-Out = ${s.carryOut}.`;
  });

  protected readonly bitPositions = [
    { power: 7, value: 128, label: 'MSB' },
    { power: 6, value: 64,  label: '' },
    { power: 5, value: 32,  label: '' },
    { power: 4, value: 16,  label: '' },
    { power: 3, value: 8,   label: '' },
    { power: 2, value: 4,   label: '' },
    { power: 1, value: 2,   label: '' },
    { power: 0, value: 1,   label: 'LSB' },
  ];

  protected readonly presets: PresetExample[] = [
    { label: '1 + 1',  a: 1,  b: 1,  description: 'Simplest carry case' },
    { label: '3 + 5',  a: 3,  b: 5,  description: 'Basic addition' },
    { label: '7 + 8',  a: 7,  b: 8,  description: 'Across nibble boundary' },
    { label: '9 + 6',  a: 9,  b: 6,  description: 'Multiple carries' },
    { label: '15 + 1', a: 15, b: 1,  description: 'Carry ripple across 4 bits' },
    { label: '127+1',  a: 127, b: 1, description: 'Max half-byte' },
  ];

  // ── Step navigation ──────────────────────────────────────────
  protected nextStep(): void {
    this.activeStep.update(s => Math.min(s + 1, this.steps().length - 1));
  }
  protected prevStep(): void {
    this.activeStep.update(s => Math.max(s - 1, 0));
  }
  protected resetSteps(): void {
    this.activeStep.set(0);
  }
  protected loadPreset(p: PresetExample): void {
    this.numA.set(p.a);
    this.numB.set(p.b);
    this.activeStep.set(0);
  }
}
