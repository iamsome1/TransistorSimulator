import { Component, inject, signal, computed } from '@angular/core';
import { BinaryService } from '../../core/services/binary.service';
import { TruthTableComponent } from '../../shared/components/truth-table/truth-table.component';
import { ExplanationPanelComponent } from '../../shared/components/explanation-panel/explanation-panel.component';
import { ExplanationStep } from '../../core/models';

@Component({
  selector: 'app-full-adder',
  standalone: true,
  imports: [TruthTableComponent, ExplanationPanelComponent],
  template: `
    <div class="page fade-in">

      <div class="section-header">
        <span class="label">Layer 5 — Full Adder</span>
        <h2>Full Adder</h2>
        <p>
          A full adder adds <strong>three bits</strong>: A, B, and a
          <strong>Carry-In</strong> from the previous bit column.
          Internally it is two half adders joined by an OR gate.
        </p>
      </div>

      <div class="main-layout">

        <!-- ── Left column: controls ── -->
        <div class="left-col">

          <div class="card">
            <h3>Inputs</h3>
            <div class="input-toggles">
              @for (inp of inputDefs; track inp.key) {
                <div class="input-row">
                  <span class="input-name" [class.carry-name]="inp.key === 'cin'">{{ inp.label }}</span>
                  <label class="toggle-switch">
                    <input type="checkbox"
                           [checked]="getInput(inp.key) === 1"
                           (change)="toggleInput(inp.key)" />
                    <div class="track"></div>
                  </label>
                  <span class="bit"
                        [class.bit-1]="getInput(inp.key)===1"
                        [class.bit-0]="getInput(inp.key)===0">
                    {{ getInput(inp.key) }}
                  </span>
                </div>
              }
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
                <span class="out-sub mono text-xs">bit {{ state().sum }}</span>
              </div>
              <div class="out-field">
                <span class="out-label">Carry-Out</span>
                <span class="out-val carry" [class.out-high]="state().carryOut === 1">
                  {{ state().carryOut }}
                </span>
                <span class="out-sub mono text-xs">to next FA</span>
              </div>
            </div>
            <div class="equation mt-3 mono text-sm">
              {{ a() }} + {{ b() }} + {{ cin() }} = {{ a() + b() + cin() }} decimal
              = "{{ state().carryOut }}{{ state().sum }}" binary
            </div>
          </div>

          <!-- Internal stages -->
          <div class="card">
            <h3>Internal breakdown</h3>
            <div class="stage-list">
              <div class="stage" [class.stage-active]="state().ha1.sum===1 || state().ha1.carry===1">
                <div class="stage-badge">HA1</div>
                <div class="stage-detail">
                  <div>XOR({{ a() }},{{ b() }}) = <strong class="mono">{{ state().ha1.sum }}</strong> → HA2 input</div>
                  <div>AND({{ a() }},{{ b() }}) = <strong class="mono">{{ state().ha1.carry }}</strong> → OR input</div>
                </div>
              </div>
              <div class="stage-arrow">↓</div>
              <div class="stage" [class.stage-active]="state().ha2.sum===1 || state().ha2.carry===1">
                <div class="stage-badge">HA2</div>
                <div class="stage-detail">
                  <div>XOR({{ state().ha1.sum }},{{ cin() }}) = <strong class="mono">{{ state().ha2.sum }}</strong> → Sum</div>
                  <div>AND({{ state().ha1.sum }},{{ cin() }}) = <strong class="mono">{{ state().ha2.carry }}</strong> → OR input</div>
                </div>
              </div>
              <div class="stage-arrow">↓</div>
              <div class="stage" [class.stage-active]="state().orGate.output===1">
                <div class="stage-badge or-badge">OR</div>
                <div class="stage-detail">
                  <div>OR({{ state().ha1.carry }},{{ state().ha2.carry }}) = <strong class="mono">{{ state().orGate.output }}</strong> → Carry-Out</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Truth table -->
          <div class="card">
            <h3>Truth Table</h3>
            <app-truth-table
              [table]="truthTable()"
              [activeInputs]="[a(), b(), cin()]" />
          </div>

        </div>

        <!-- ── Right column: SVG circuit ── -->
        <div class="right-col">
          <div class="card circuit-card">
            <h3>Circuit Diagram</h3>
            <p class="text-xs text-muted mb-4">
              Full Adder = Half Adder 1 + Half Adder 2 + OR gate
            </p>

            <div class="svg-wrap">
              <svg viewBox="0 0 560 300" class="circuit-svg"
                   aria-label="Full adder circuit diagram">

                <!-- ── Column labels ── -->
                <text x="60"  y="18" class="col-label">Inputs</text>
                <text x="195" y="18" class="col-label">HA 1</text>
                <text x="355" y="18" class="col-label">HA 2</text>
                <text x="485" y="18" class="col-label">Outputs</text>

                <!-- ══ INPUT LABELS & DOTS ══ -->
                <text x="8"  y="73"  class="sig-label" [class.sig-hi]="a()===1">A</text>
                <text x="8"  y="133" class="sig-label" [class.sig-hi]="b()===1">B</text>
                <text x="4"  y="253" class="sig-label" [class.sig-hi]="cin()===1">Cin</text>

                <circle cx="30" cy="70"  r="5" [class]="dotCls(a())" />
                <circle cx="30" cy="130" r="5" [class]="dotCls(b())" />
                <circle cx="30" cy="250" r="5" [class]="dotCls(cin())" />

                <!-- ══ HA1: inputs A,B → XOR → ha1Sum; AND → ha1Carry ══ -->

                <!-- A → HA1 XOR (top) -->
                <polyline points="30,70 88,70 88,62 150,62"   [class]="wireCls(a())" />
                <!-- A → HA1 AND fork -->
                <polyline points="88,70 88,132 150,132"        [class]="wireCls(a())" />
                <circle cx="88" cy="70" r="3" [class]="dotCls(a())" />

                <!-- B → HA1 XOR (bottom) -->
                <polyline points="30,130 108,130 108,82 150,82" [class]="wireCls(b())" />
                <!-- B → HA1 AND -->
                <polyline points="108,130 108,152 150,152"      [class]="wireCls(b())" />
                <circle cx="108" cy="130" r="3" [class]="dotCls(b())" />

                <!-- HA1 XOR gate body (centred ~185,72) -->
                <path d="M 155 52 Q 168 52 200 72 Q 168 92 155 92 Q 165 72 155 52 Z"
                      [class]="gateCls(state().ha1.xorGate.output)" />
                <path d="M 149 52 Q 159 72 149 92" fill="none"
                      [attr.stroke]="state().ha1.xorGate.output===1 ? 'var(--gate-stroke-active)' : 'var(--border-default)'"
                      stroke-width="1.5"/>
                <text x="183" y="76" class="gate-txt">XOR</text>

                <!-- HA1 AND gate body (centred ~185,142) -->
                <path d="M 155 122 L 178 122 Q 200 122 200 142 Q 200 162 178 162 L 155 162 Z"
                      [class]="gateCls(state().ha1.andGate.output)" />
                <text x="180" y="146" class="gate-txt">AND</text>

                <!-- ha1Sum wire (XOR out → HA2) -->
                <line x1="200" y1="72" x2="310" y2="72" [class]="wireCls(state().ha1.sum)" />
                <!-- ha1Carry wire (AND out → OR gate) -->
                <polyline points="200,142 260,142 260,220 310,220" [class]="wireCls(state().ha1.carry, true)" />

                <!-- ══ HA2: inputs ha1Sum,Cin ══ -->

                <!-- ha1Sum → HA2 XOR top -->
                <polyline points="310,72 340,72 340,132 310,132 310,72" fill="none"
                          [class]="wireCls(state().ha1.sum)" />
                <polyline points="310,72 340,72 340,62 370,62"     [class]="wireCls(state().ha1.sum)" />
                <!-- ha1Sum → HA2 AND -->
                <polyline points="340,72 340,132 370,132"           [class]="wireCls(state().ha1.sum)" />
                <circle cx="340" cy="72" r="3" [class]="dotCls(state().ha1.sum)" />

                <!-- Cin → HA2 XOR bottom -->
                <polyline points="30,250 280,250 280,82 370,82"    [class]="wireCls(cin())" />
                <!-- Cin → HA2 AND -->
                <polyline points="280,250 280,152 370,152"          [class]="wireCls(cin())" />
                <circle cx="280" cy="250" r="3" [class]="dotCls(cin())" />

                <!-- HA2 XOR gate body (centred ~405,72) -->
                <path d="M 375 52 Q 388 52 420 72 Q 388 92 375 92 Q 385 72 375 52 Z"
                      [class]="gateCls(state().ha2.xorGate.output)" />
                <path d="M 369 52 Q 379 72 369 92" fill="none"
                      [attr.stroke]="state().ha2.xorGate.output===1 ? 'var(--gate-stroke-active)' : 'var(--border-default)'"
                      stroke-width="1.5"/>
                <text x="403" y="76" class="gate-txt">XOR</text>

                <!-- HA2 AND gate body -->
                <path d="M 375 122 L 398 122 Q 420 122 420 142 Q 420 162 398 162 L 375 162 Z"
                      [class]="gateCls(state().ha2.andGate.output)" />
                <text x="400" y="146" class="gate-txt">AND</text>

                <!-- ══ OR Gate (for carry-out) ══ -->
                <!-- ha2Carry → OR bottom -->
                <polyline points="420,142 450,142 450,232 460,232" [class]="wireCls(state().ha2.carry, true)" />

                <!-- OR gate body (centred ~480,220) -->
                <path d="M 460 208 Q 472 208 500 220 Q 472 232 460 232 Q 470 220 460 208 Z"
                      [class]="gateCls(state().orGate.output)" />
                <text x="482" y="224" class="gate-txt">OR</text>

                <!-- ══ Outputs ══ -->
                <!-- Sum (ha2 XOR out) -->
                <line x1="420" y1="72" x2="540" y2="72"  [class]="wireCls(state().ha2.xorGate.output)" />
                <text x="545" y="76" class="sig-label" [class.sig-hi]="state().ha2.xorGate.output===1">
                  S={{ state().ha2.xorGate.output }}
                </text>

                <!-- Carry-Out (OR out) -->
                <line x1="500" y1="220" x2="540" y2="220" [class]="wireCls(state().orGate.output, true)" />
                <text x="545" y="224" class="sig-label" [class.sig-hi]="state().orGate.output===1"
                      [class.carry-lbl]="state().orGate.output===1">
                  Co={{ state().orGate.output }}
                </text>

                <!-- HA block outlines -->
                <rect x="142" y="28" width="70" height="150"
                      fill="none" stroke="var(--border-subtle)" stroke-width="1"
                      stroke-dasharray="4 3" rx="6" />
                <text x="177" y="188" class="block-label">HA 1</text>

                <rect x="362" y="28" width="70" height="150"
                      fill="none" stroke="var(--border-subtle)" stroke-width="1"
                      stroke-dasharray="4 3" rx="6" />
                <text x="397" y="188" class="block-label">HA 2</text>

              </svg>
            </div>

            <!-- Live equation -->
            <div class="insight-box">
              <strong>💡 Equation:</strong>
              <span class="mono"> S = XOR(XOR(A,B), Cin) = XOR({{ state().ha1.sum }}, {{ cin() }}) = {{ state().sum }}</span><br>
              <span class="mono"> Co = OR(AND(A,B), AND(XOR(A,B),Cin)) = OR({{ state().ha1.carry }},{{ state().ha2.carry }}) = {{ state().carryOut }}</span>
            </div>
          </div>

          <app-explanation-panel
            title="How the Full Adder works"
            [steps]="explanationSteps"
            [activeStep]="-1" />
        </div>
      </div>

    </div>
  `,
  styles: [`
    .page { max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }
    .main-layout { display: grid; grid-template-columns: 340px 1fr; gap: 1.25rem; }
    @media (max-width: 900px) { .main-layout { grid-template-columns: 1fr; } }
    .left-col, .right-col { display: flex; flex-direction: column; gap: 1.25rem; }

    .input-toggles { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.75rem; }
    .input-row { display: flex; align-items: center; gap: 1rem; }
    .input-name {
      font-family: var(--font-code); font-size: 1rem; font-weight: 700;
      color: var(--accent); width: 2.5rem;
      &.carry-name { color: var(--sig-carry); }
    }

    .output-row { display: flex; gap: 2rem; margin-top: 0.75rem; }
    .out-field { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
    .out-label { font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; }
    .out-val {
      width: 3rem; height: 3rem;
      display: flex; align-items: center; justify-content: center;
      border-radius: var(--radius); border: 2px solid var(--border-default);
      font-family: var(--font-code); font-size: 1.5rem; font-weight: 800;
      transition: all 250ms;
      &.out-high { border-color: var(--sig-high); color: var(--sig-high); background: #00ff8811; box-shadow: var(--sig-high-glow); }
      &.carry.out-high { border-color: var(--sig-carry); color: var(--sig-carry); background: #f59e0b11; }
    }
    .out-sub { color: var(--text-muted); margin-top: 2px; }
    .equation { padding: 0.5rem 0.75rem; background: var(--bg-input); border-radius: var(--radius); border: 1px solid var(--border-subtle); }

    /* Stage list */
    .stage-list { display: flex; flex-direction: column; gap: 0; margin-top: 0.75rem; }
    .stage {
      display: flex; align-items: flex-start; gap: 0.75rem;
      padding: 0.65rem 0.75rem;
      border: 1px solid var(--border-subtle); border-radius: var(--radius);
      transition: border-color 250ms, background 250ms;
      &.stage-active { border-color: var(--accent); background: var(--accent-dim); }
    }
    .stage-arrow { text-align: center; color: var(--text-muted); padding: 0.15rem 0; font-size: 1.2rem; padding-left: 1.5rem; }
    .stage-badge {
      font-family: var(--font-code); font-size: 0.72rem; font-weight: 700;
      padding: 0.2rem 0.5rem; border-radius: 999px;
      background: var(--accent-dim); color: var(--accent); border: 1px solid var(--border-accent);
      flex-shrink: 0; margin-top: 2px;
      &.or-badge { background: var(--purple-dim); color: var(--purple); border-color: var(--purple); }
    }
    .stage-detail { font-size: 0.78rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 0.2rem; }
    .stage-detail strong { color: var(--text-primary); }

    /* Circuit */
    .circuit-card { overflow: hidden; }
    .svg-wrap { padding: 0.5rem 0; overflow-x: auto; }
    .circuit-svg { width: 100%; min-width: 500px; }

    .sig-label {
      font-family: var(--font-code); font-size: 12px; font-weight: 700;
      fill: var(--text-muted);
      &.sig-hi { fill: var(--sig-high); }
    }
    .carry-lbl { fill: var(--sig-carry) !important; }
    .gate-txt {
      font-family: var(--font-code); font-size: 8px;
      fill: var(--text-secondary); text-anchor: middle; dominant-baseline: middle;
    }
    .col-label {
      font-family: var(--font-ui); font-size: 9px;
      fill: var(--text-muted); text-anchor: middle;
    }
    .block-label {
      font-family: var(--font-code); font-size: 9px;
      fill: var(--border-default); text-anchor: middle;
    }

    .insight-box {
      margin-top: 1rem; padding: 0.75rem 1rem;
      background: var(--accent-dim); border: 1px solid var(--border-accent);
      border-radius: var(--radius); font-size: 0.82rem; line-height: 1.6;
    }
  `]
})
export class FullAdderComponent {
  private readonly binarySvc = inject(BinaryService);

  protected readonly a   = signal<0|1>(0);
  protected readonly b   = signal<0|1>(0);
  protected readonly cin = signal<0|1>(0);

  protected readonly state = computed(() =>
    this.binarySvc.buildFullAdderState(this.a(), this.b(), this.cin())
  );

  protected readonly truthTable = computed(() =>
    this.binarySvc.generateFullAdderTruthTable()
  );

  protected readonly inputDefs = [
    { key: 'a',   label: 'A' },
    { key: 'b',   label: 'B' },
    { key: 'cin', label: 'Cin' },
  ];

  protected getInput(key: string): 0|1 {
    if (key === 'a')   return this.a();
    if (key === 'b')   return this.b();
    if (key === 'cin') return this.cin();
    return 0;
  }

  protected toggleInput(key: string): void {
    if (key === 'a')   this.a.update(v => v === 0 ? 1 : 0);
    if (key === 'b')   this.b.update(v => v === 0 ? 1 : 0);
    if (key === 'cin') this.cin.update(v => v === 0 ? 1 : 0);
  }

  protected wireCls(v: 0|1, carry = false): string {
    if (v === 1) return carry ? 'wire wire--carry wire--flowing' : 'wire wire--high wire--flowing';
    return 'wire';
  }
  protected dotCls(v: 0|1): string {
    return `signal-dot signal-dot--${v === 1 ? 'high' : 'low'}`;
  }
  protected gateCls(out: 0|1): string {
    return `gate-body${out === 1 ? ' gate-body--active' : ''}`;
  }

  protected readonly explanationSteps: ExplanationStep[] = [
    { id: 1, title: 'Three inputs: A, B, Carry-In',
      body: 'Unlike a half adder, a full adder accepts a carry from the previous bit column. This makes it suitable for chaining in a multi-bit adder.' },
    { id: 2, title: 'Half Adder 1 processes A and B',
      body: 'HA1 computes XOR(A,B) → intermediate sum, and AND(A,B) → first carry candidate.' },
    { id: 3, title: 'Half Adder 2 adds Carry-In',
      body: 'HA2 takes the intermediate sum from HA1 and adds Carry-In. XOR gives the final Sum bit; AND gives the second carry candidate.' },
    { id: 4, title: 'OR gate combines the two carries',
      body: 'Carry-Out = OR(HA1 carry, HA2 carry). If either half adder generated a carry, the full adder propagates it forward.' },
    { id: 5, title: 'Why two half adders + OR?',
      body: 'The two-stage design elegantly handles all 8 input combinations (A,B,Cin). It uses ~28 transistors in CMOS — still tiny on a modern chip.' },
  ];
}
