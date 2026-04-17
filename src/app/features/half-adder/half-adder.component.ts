import { Component, inject, signal, computed } from '@angular/core';
import { BinaryService } from '../../core/services/binary.service';
import { TruthTableComponent } from '../../shared/components/truth-table/truth-table.component';
import { ExplanationPanelComponent } from '../../shared/components/explanation-panel/explanation-panel.component';
import { GateSymbolComponent } from '../../shared/components/gate-symbol/gate-symbol.component';
import { ExplanationStep } from '../../core/models';

@Component({
  selector: 'app-half-adder',
  standalone: true,
  imports: [TruthTableComponent, ExplanationPanelComponent, GateSymbolComponent],
  template: `
    <div class="page fade-in">

      <div class="section-header">
        <span class="label">Layer 4 — Half Adder</span>
        <h2>Half Adder</h2>
        <p>
          A half adder combines an <strong>XOR gate</strong> (for the sum bit) and
          an <strong>AND gate</strong> (for the carry bit). It can add two single bits.
        </p>
      </div>

      <div class="main-layout">

        <!-- Left: Controls + info -->
        <div class="left-col">

          <!-- Input toggles -->
          <div class="card">
            <h3>Inputs</h3>
            <div class="input-toggles">
              <div class="input-row">
                <span class="input-name">A</span>
                <label class="toggle-switch">
                  <input type="checkbox"
                         [checked]="a() === 1"
                         (change)="toggleA()" />
                  <div class="track"></div>
                </label>
                <span class="bit" [class.bit-1]="a()===1" [class.bit-0]="a()===0">{{ a() }}</span>
              </div>
              <div class="input-row">
                <span class="input-name">B</span>
                <label class="toggle-switch">
                  <input type="checkbox"
                         [checked]="b() === 1"
                         (change)="toggleB()" />
                  <div class="track"></div>
                </label>
                <span class="bit" [class.bit-1]="b()===1" [class.bit-0]="b()===0">{{ b() }}</span>
              </div>
            </div>
          </div>

          <!-- Outputs -->
          <div class="card">
            <h3>Outputs</h3>
            <div class="output-row">
              <div class="out-field">
                <span class="out-label">Sum</span>
                <span class="out-val" [class.out-high]="state().sum === 1">
                  {{ state().sum }}
                </span>
                <span class="out-formula mono text-xs">XOR(A,B)</span>
              </div>
              <div class="out-field">
                <span class="out-label">Carry</span>
                <span class="out-val carry" [class.out-high]="state().carry === 1">
                  {{ state().carry }}
                </span>
                <span class="out-formula mono text-xs">AND(A,B)</span>
              </div>
            </div>
            <div class="equation mt-3">
              <span class="mono text-sm">
                A({{ a() }}) + B({{ b() }}) = Carry({{ state().carry }})Sum({{ state().sum }}) = {{ (a() + b()) }} decimal
              </span>
            </div>
          </div>

          <!-- Gate detail cards -->
          <div class="gate-detail-pair">
            <div class="gate-detail-card card" [class.gate-active]="state().xorGate.output === 1">
              <div class="gd-header">
                <span class="gd-badge xor-badge">XOR</span>
                <span class="gd-role">→ Sum bit</span>
              </div>
              <app-gate-symbol type="XOR"
                [inputValues]="[a(), b()]"
                [outputValue]="state().xorGate.output"
                [width]="110" />
              <p class="gd-desc text-xs">Outputs 1 when inputs differ. That's exactly what we need for the binary sum bit.</p>
            </div>
            <div class="gate-detail-card card" [class.gate-active]="state().andGate.output === 1">
              <div class="gd-header">
                <span class="gd-badge and-badge">AND</span>
                <span class="gd-role">→ Carry bit</span>
              </div>
              <app-gate-symbol type="AND"
                [inputValues]="[a(), b()]"
                [outputValue]="state().andGate.output"
                [width]="110" />
              <p class="gd-desc text-xs">Only 1+1 generates a carry. AND(1,1)=1 — exactly right.</p>
            </div>
          </div>

          <!-- Truth table -->
          <div class="card">
            <h3>Truth Table</h3>
            <app-truth-table
              [table]="truthTable()"
              [activeInputs]="[a(), b()]" />
          </div>

        </div>

        <!-- Right: SVG Circuit -->
        <div class="right-col">
          <div class="card circuit-card">
            <h3>Circuit Diagram</h3>
            <p class="text-xs text-muted mb-4">Green wires carry signal 1 · Gray wires carry 0</p>
            <div class="svg-wrap">
              <svg viewBox="0 0 420 240" class="circuit-svg" aria-label="Half adder circuit diagram">

                <!-- ── Input labels ── -->
                <text x="14" y="88"  class="sig-label" [class.sig-hi]="a()===1">A</text>
                <text x="14" y="158" class="sig-label" [class.sig-hi]="b()===1">B</text>

                <!-- Input signal dots -->
                <circle cx="32" cy="85"  r="5" [class]="dotClass(a())"/>
                <circle cx="32" cy="155" r="5" [class]="dotClass(b())"/>

                <!-- ── A wires ── -->
                <!-- A → XOR (top input) -->
                <polyline points="32,85 90,85 90,75 160,75"
                          [class]="wireClass(a())" />
                <!-- A → AND (top input) fork -->
                <polyline points="90,85 90,145 160,145"
                          [class]="wireClass(a())" />

                <!-- ── B wires ── -->
                <!-- B → XOR (bottom input) -->
                <polyline points="32,155 110,155 110,95 160,95"
                          [class]="wireClass(b())" />
                <!-- B → AND (bottom input) -->
                <polyline points="110,155 110,165 160,165"
                          [class]="wireClass(b())" />

                <!-- Fork dots (junction) -->
                <circle cx="90" cy="85"  r="3.5" [class]="dotClass(a())" />
                <circle cx="110" cy="155" r="3.5" [class]="dotClass(b())" />

                <!-- ── XOR Gate at (160, 85) ── -->
                <!-- Body (D-shape with curved input) -->
                <path d="M 165 62 Q 178 62 210 85 Q 178 108 165 108 Q 175 85 165 62 Z"
                      [class]="gateClass(state().xorGate.output)" />
                <!-- XOR extra line -->
                <path d="M 159 62 Q 169 85 159 108" fill="none"
                      [attr.stroke]="state().xorGate.output===1 ? 'var(--gate-stroke-active)' : 'var(--border-default)'"
                      stroke-width="1.5" />
                <text x="189" y="89" class="gate-txt">XOR</text>

                <!-- XOR output wire → Sum -->
                <line x1="210" y1="85" x2="340" y2="85"
                      [class]="wireClass(state().xorGate.output)" />
                <text x="350" y="89" class="sig-label out-label"
                      [class.sig-hi]="state().xorGate.output===1">
                  Sum={{ state().xorGate.output }}
                </text>

                <!-- ── AND Gate at (160,155) ── -->
                <path d="M 165 132 L 190 132 Q 210 132 210 155 Q 210 178 190 178 L 165 178 Z"
                      [class]="gateClass(state().andGate.output)" />
                <text x="189" y="159" class="gate-txt">AND</text>

                <!-- AND output wire → Carry -->
                <line x1="210" y1="155" x2="340" y2="155"
                      [class]="wireClass(state().andGate.output, true)" />
                <text x="350" y="159" class="sig-label out-label"
                      [class.sig-hi]="state().andGate.output===1"
                      [class.carry-lbl]="state().andGate.output===1">
                  Carry={{ state().andGate.output }}
                </text>

                <!-- Signal value annotations -->
                @if (a() === 1) {
                  <circle cx="32" cy="85" r="3" class="pulse-dot" />
                }
                @if (b() === 1) {
                  <circle cx="32" cy="155" r="3" class="pulse-dot" />
                }

              </svg>
            </div>

            <!-- "Show internals" hint -->
            <div class="insight-box">
              <strong>💡 Key insight:</strong>
              When A={{ a() }}, B={{ b() }}:
              XOR({{ a() }},{{ b() }}) = <strong>{{ state().xorGate.output }}</strong> (sum) ·
              AND({{ a() }},{{ b() }}) = <strong>{{ state().andGate.output }}</strong> (carry)
              @if (a() === 1 && b() === 1) {
                <br><span class="text-xs text-muted">1+1=2 decimal = "10" binary → sum bit 0, carry bit 1 ✓</span>
              }
            </div>
          </div>

          <app-explanation-panel
            title="How the Half Adder works"
            [steps]="explanationSteps"
            [activeStep]="-1" />
        </div>
      </div>

    </div>
  `,
  styles: [`
    .page { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }

    .main-layout { display: grid; grid-template-columns: 340px 1fr; gap: 1.25rem; }
    @media (max-width: 900px) { .main-layout { grid-template-columns: 1fr; } }

    .left-col, .right-col { display: flex; flex-direction: column; gap: 1.25rem; }

    /* Inputs */
    .input-toggles { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.75rem; }
    .input-row { display: flex; align-items: center; gap: 1rem; }
    .input-name { font-family: var(--font-code); font-size: 1.1rem; font-weight: 700; color: var(--accent); width: 1.2rem; }

    /* Outputs */
    .output-row { display: flex; gap: 2rem; margin-top: 0.75rem; }
    .out-field { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
    .out-label { font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
    .out-val {
      width: 3rem; height: 3rem;
      display: flex; align-items: center; justify-content: center;
      border-radius: var(--radius);
      border: 2px solid var(--border-default);
      font-family: var(--font-code); font-size: 1.5rem; font-weight: 800;
      transition: all 250ms;
      &.out-high { border-color: var(--sig-high); color: var(--sig-high); background: #00ff8811; box-shadow: var(--sig-high-glow); }
      &.carry.out-high { border-color: var(--sig-carry); color: var(--sig-carry); background: #f59e0b11; box-shadow: var(--sig-carry-glow); }
    }
    .out-formula { color: var(--text-muted); }
    .equation { padding: 0.5rem 0.75rem; background: var(--bg-input); border-radius: var(--radius); border: 1px solid var(--border-subtle); }

    /* Gate detail pair */
    .gate-detail-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .gate-detail-card { display: flex; flex-direction: column; gap: 0.5rem; transition: border-color 250ms; }
    .gate-detail-card.gate-active { border-color: var(--sig-high); }
    .gd-header { display: flex; align-items: center; gap: 0.5rem; }
    .gd-badge {
      font-family: var(--font-code); font-size: 0.75rem; font-weight: 700;
      padding: 0.15rem 0.5rem; border-radius: 999px; border: 1px solid;
    }
    .xor-badge { color: var(--success); border-color: var(--success); }
    .and-badge { color: var(--accent);  border-color: var(--accent); }
    .gd-role { font-size: 0.75rem; color: var(--text-muted); }
    .gd-desc { color: var(--text-secondary); }

    /* Circuit SVG */
    .circuit-card { overflow: hidden; }
    .svg-wrap { padding: 0.5rem 0; overflow-x: auto; }
    .circuit-svg { width: 100%; min-width: 380px; }

    .sig-label {
      font-family: var(--font-code); font-size: 13px; font-weight: 700;
      fill: var(--text-muted);
      &.sig-hi { fill: var(--sig-high); }
    }
    .out-label { font-size: 11px; }
    .carry-lbl { fill: var(--sig-carry) !important; }
    .gate-txt {
      font-family: var(--font-code); font-size: 9px;
      fill: var(--text-secondary); text-anchor: middle; dominant-baseline: middle;
    }
    .pulse-dot {
      fill: var(--sig-high);
      animation: glow-pulse 1s ease-in-out infinite;
    }

    .insight-box {
      margin-top: 1rem;
      padding: 0.75rem 1rem;
      background: var(--accent-dim);
      border: 1px solid var(--border-accent);
      border-radius: var(--radius);
      font-size: 0.85rem;
    }
  `]
})
export class HalfAdderComponent {
  private readonly binarySvc = inject(BinaryService);

  protected readonly a = signal<0 | 1>(0);
  protected readonly b = signal<0 | 1>(0);

  protected toggleA(): void { this.a.update(v => v === 0 ? 1 : 0); }
  protected toggleB(): void { this.b.update(v => v === 0 ? 1 : 0); }

  protected readonly state = computed(() =>
    this.binarySvc.buildHalfAdderState(this.a(), this.b())
  );

  protected readonly truthTable = computed(() =>
    this.binarySvc.generateHalfAdderTruthTable()
  );

  // ── SVG helpers ──────────────────────────────────────────────

  protected wireClass(value: 0 | 1, isCarry = false): string {
    if (value === 1) return isCarry ? 'wire wire--carry wire--flowing' : 'wire wire--high wire--flowing';
    return 'wire';
  }

  protected dotClass(value: 0 | 1): string {
    return `signal-dot signal-dot--${value === 1 ? 'high' : 'low'}`;
  }

  protected gateClass(output: 0 | 1): string {
    return `gate-body ${output === 1 ? 'gate-body--active' : ''}`;
  }

  // ── Explanation steps ────────────────────────────────────────

  protected readonly explanationSteps: ExplanationStep[] = [
    {
      id: 1,
      title: 'Two inputs: A and B',
      body: 'The half adder receives two single-bit values (each is 0 or 1). These represent the two bits you want to add together.',
    },
    {
      id: 2,
      title: 'XOR gate computes the Sum bit',
      body: 'XOR(A,B) = 1 when A and B are different. In binary, 0+0=0, 0+1=1, 1+0=1, 1+1=0 (with carry). The XOR gate naturally computes this sum.',
    },
    {
      id: 3,
      title: 'AND gate computes the Carry bit',
      body: 'A carry of 1 only happens when both A=1 and B=1 (1+1=2, which is "10" in binary). AND(1,1)=1 — exactly the carry condition.',
    },
    {
      id: 4,
      title: 'Limitation: no carry-in',
      body: 'A half adder cannot accept a carry from a previous bit column. That is why we need a Full Adder when chaining multiple bits together.',
    },
    {
      id: 5,
      title: 'Inside: ~12 transistors',
      body: 'An XOR gate needs roughly 8 transistors, an AND gate needs 4. So one half adder fits in about 12 transistors — smaller than a grain of sand on modern chips.',
    },
  ];
}
