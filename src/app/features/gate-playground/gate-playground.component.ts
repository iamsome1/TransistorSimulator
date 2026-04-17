import { Component, inject, signal, computed } from '@angular/core';
import { BinaryService } from '../../core/services/binary.service';
import { GateType, TruthTable } from '../../core/models';
import { TruthTableComponent } from '../../shared/components/truth-table/truth-table.component';
import { GateSymbolComponent } from '../../shared/components/gate-symbol/gate-symbol.component';

interface GateCard {
  type: GateType;
  color: string;
  description: string;
  formula: string;
  transistorCount: string;
}

@Component({
  selector: 'app-gate-playground',
  standalone: true,
  imports: [TruthTableComponent, GateSymbolComponent],
  template: `
    <div class="page fade-in">

      <div class="section-header">
        <span class="label">Layer 3 — Logic Gates</span>
        <h2>Gate Playground</h2>
        <p>
          Logic gates are the building blocks of all digital circuits.
          Toggle the inputs below and see outputs change live. Hover the gate symbol for a tooltip.
        </p>
      </div>

      <!-- Gate cards grid -->
      <div class="gates-grid">
        @for (gate of gateCards; track gate.type) {
          <div class="gate-card card" [style.--gc]="gate.color">

            <!-- Header -->
            <div class="gc-header">
              <span class="gc-type-badge" [style.color]="gate.color"
                    [style.border-color]="gate.color">{{ gate.type }}</span>
              <span class="gc-transistors">~{{ gate.transistorCount }} transistors</span>
            </div>

            <!-- SVG Symbol -->
            <div class="gc-svg-wrap">
              <app-gate-symbol
                [type]="gate.type"
                [inputValues]="getInputs(gate.type)"
                [outputValue]="getOutput(gate.type)"
                [width]="120" />
            </div>

            <!-- Input toggles -->
            <div class="gc-toggles">
              <label class="toggle-switch">
                <input type="checkbox"
                       [checked]="getInputA(gate.type) === 1"
                       (change)="toggleA(gate.type)" />
                <div class="track"></div>
                <span class="tgl-label">A = {{ getInputA(gate.type) }}</span>
              </label>

              @if (gate.type !== 'NOT') {
                <label class="toggle-switch">
                  <input type="checkbox"
                         [checked]="getInputB(gate.type) === 1"
                         (change)="toggleB(gate.type)" />
                  <div class="track"></div>
                  <span class="tgl-label">B = {{ getInputB(gate.type) }}</span>
                </label>
              }
            </div>

            <!-- Output -->
            <div class="gc-output" [class.out-high]="getOutput(gate.type) === 1">
              Output = <strong>{{ getOutput(gate.type) }}</strong>
              <span class="out-state">{{ getOutput(gate.type) === 1 ? 'HIGH ✓' : 'LOW' }}</span>
            </div>

            <!-- Formula -->
            <div class="gc-formula mono text-xs">{{ gate.formula }}</div>

            <!-- Description -->
            <p class="gc-desc">{{ gate.description }}</p>

            <!-- Truth table toggle -->
            <button class="btn btn-ghost btn-sm gc-tt-btn"
                    (click)="toggleTable(gate.type)">
              {{ showTable() === gate.type ? '▲ Hide' : '▼ Show' }} truth table
            </button>

            @if (showTable() === gate.type) {
              <app-truth-table
                [table]="getTruthTable(gate.type)"
                [activeInputs]="getInputs(gate.type)" />
            }

          </div>
        }
      </div>

      <!-- Explainer -->
      <div class="explanation-box">
        <div class="icon">🔗</div>
        <h4>Why do gates matter?</h4>
        <p>
          Every logic gate is built from transistors (usually 4–6 for basic CMOS gates).
          A <strong>Half Adder</strong> is just an XOR gate (computes the sum bit) plus an AND gate
          (computes the carry bit). A <strong>Full Adder</strong> combines two half adders and an
          OR gate. So ultimately, addition is nothing more than thousands of transistors switching
          ON and OFF in carefully arranged patterns.
        </p>
      </div>

      <!-- Gate summary table -->
      <div class="card">
        <h3>Quick reference</h3>
        <div class="ref-table-wrap">
          <table class="truth-table ref-table">
            <thead>
              <tr>
                <th>Gate</th>
                <th>Output is 1 when…</th>
                <th>Formula</th>
                <th>Used in adder for…</th>
              </tr>
            </thead>
            <tbody>
              @for (row of refRows; track row.gate) {
                <tr>
                  <td><strong>{{ row.gate }}</strong></td>
                  <td>{{ row.when }}</td>
                  <td class="val-1 mono">{{ row.formula }}</td>
                  <td class="text-xs">{{ row.usage }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .page { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }

    .gates-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1rem;
    }

    .gate-card {
      display: flex; flex-direction: column; gap: 0.75rem;
      border-top: 3px solid var(--gc, var(--accent));
    }

    .gc-header {
      display: flex; align-items: center; justify-content: space-between;
    }
    .gc-type-badge {
      font-family: var(--font-code);
      font-size: 0.85rem;
      font-weight: 700;
      padding: 0.2rem 0.6rem;
      border: 1px solid;
      border-radius: 999px;
    }
    .gc-transistors { font-size: 0.7rem; color: var(--text-muted); }

    .gc-svg-wrap {
      display: flex; justify-content: center;
      padding: 0.5rem 0;
    }

    .gc-toggles { display: flex; flex-direction: column; gap: 0.4rem; }
    .tgl-label {
      font-family: var(--font-code); font-size: 0.85rem; color: var(--text-secondary);
    }

    .gc-output {
      display: flex; align-items: center; gap: 0.5rem;
      padding: 0.5rem 0.75rem;
      background: var(--bg-input);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius);
      font-size: 0.85rem;
      font-family: var(--font-code);
      transition: border-color 250ms, background 250ms;

      strong { font-size: 1.2rem; }
      .out-state { margin-left: auto; font-size: 0.72rem; color: var(--text-muted); }

      &.out-high {
        border-color: var(--sig-high);
        background: #00ff8808;
        strong { color: var(--sig-high); text-shadow: var(--sig-high-glow); }
        .out-state { color: var(--sig-high); }
      }
    }

    .gc-formula {
      color: var(--accent);
      padding: 0.3rem 0;
    }
    .gc-desc { font-size: 0.8rem; }
    .gc-tt-btn { align-self: flex-start; }

    .ref-table-wrap { overflow-x: auto; margin-top: 0.75rem; }
    .ref-table td:first-child { color: var(--text-primary); }
    .ref-table .mono { font-family: var(--font-code); }
  `]
})
export class GatePlaygroundComponent {
  private readonly binarySvc = inject(BinaryService);

  // Separate signal for each gate's A and B inputs
  private readonly inputsA = signal<Record<GateType, 0|1>>({
    AND: 0, OR: 0, XOR: 0, NOT: 0, NAND: 1, NOR: 0
  });
  private readonly inputsB = signal<Record<GateType, 0|1>>({
    AND: 0, OR: 0, XOR: 1, NOT: 0, NAND: 1, NOR: 0
  });

  protected readonly showTable = signal<GateType | null>(null);

  protected readonly gateCards: GateCard[] = [
    {
      type: 'AND',
      color: '#00d4ff',
      description: 'Both inputs must be 1 for output to be 1. Used to compute the carry bit in a half adder.',
      formula: 'Out = A AND B',
      transistorCount: '4 (CMOS)',
    },
    {
      type: 'OR',
      color: '#a78bfa',
      description: 'Output is 1 if at least one input is 1. Used in the full adder to combine two carry signals.',
      formula: 'Out = A OR B',
      transistorCount: '4 (CMOS)',
    },
    {
      type: 'XOR',
      color: '#10b981',
      description: 'Output is 1 when inputs differ. Computes the sum bit in both half adder and full adder.',
      formula: 'Out = A ⊕ B',
      transistorCount: '8–12',
    },
    {
      type: 'NOT',
      color: '#f59e0b',
      description: 'Inverts the input. 0 becomes 1 and 1 becomes 0. Also called an inverter.',
      formula: 'Out = NOT A (= Ā)',
      transistorCount: '2 (CMOS)',
    },
    {
      type: 'NAND',
      color: '#ef4444',
      description: 'Opposite of AND. Universal gate — any other gate can be built from NAND gates alone.',
      formula: 'Out = NOT(A AND B)',
      transistorCount: '4 (CMOS)',
    },
    {
      type: 'NOR',
      color: '#ec4899',
      description: 'Opposite of OR. Also universal. NOR gates were used in early CPUs like the Apollo Guidance Computer.',
      formula: 'Out = NOT(A OR B)',
      transistorCount: '4 (CMOS)',
    },
  ];

  protected readonly refRows = [
    { gate: 'AND',  when: 'Both A=1 AND B=1',     formula: 'A·B',    usage: 'Carry bit in half adder' },
    { gate: 'OR',   when: 'A=1 OR B=1 (or both)', formula: 'A+B',    usage: 'Combine carries in full adder' },
    { gate: 'XOR',  when: 'A and B are different', formula: 'A⊕B',   usage: 'Sum bit in half/full adder' },
    { gate: 'NOT',  when: 'Always (inverts input)', formula: 'Ā',     usage: 'NAND/NOR internals' },
    { gate: 'NAND', when: 'NOT (both A=1, B=1)',   formula: 'NOT(A·B)', usage: 'Universal gate, SRAM cells' },
    { gate: 'NOR',  when: 'NOT (A=1 OR B=1)',      formula: 'NOT(A+B)', usage: 'Universal gate, flip-flops' },
  ];

  // ── Getters ──────────────────────────────────────────────────

  protected getInputA(type: GateType): 0 | 1 {
    return this.inputsA()[type];
  }
  protected getInputB(type: GateType): 0 | 1 {
    return this.inputsB()[type];
  }
  protected getInputs(type: GateType): (0 | 1)[] {
    return type === 'NOT'
      ? [this.getInputA(type)]
      : [this.getInputA(type), this.getInputB(type)];
  }
  protected getOutput(type: GateType): 0 | 1 {
    return this.binarySvc.computeGate(type, this.getInputs(type));
  }
  protected getTruthTable(type: GateType): TruthTable {
    return this.binarySvc.generateGateTruthTable(type);
  }

  // ── Toggles ──────────────────────────────────────────────────

  protected toggleA(type: GateType): void {
    this.inputsA.update(m => ({ ...m, [type]: m[type] === 0 ? 1 : 0 }));
  }
  protected toggleB(type: GateType): void {
    this.inputsB.update(m => ({ ...m, [type]: m[type] === 0 ? 1 : 0 }));
  }
  protected toggleTable(type: GateType): void {
    this.showTable.update(t => t === type ? null : type);
  }
}
