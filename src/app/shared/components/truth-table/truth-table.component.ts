import { Component, input, computed } from '@angular/core';
import { TruthTable } from '../../../core/models';

/**
 * TruthTableComponent — renders any truth table passed via the `table` input.
 * Automatically highlights the row that matches `activeInputs`.
 */
@Component({
  selector: 'app-truth-table',
  standalone: true,
  template: `
    <div class="tt-wrap">
      <table class="truth-table">
        <thead>
          <tr>
            @for (lbl of table().inputLabels; track lbl) {
              <th>{{ lbl }}</th>
            }
            @for (lbl of table().outputLabels; track lbl) {
              <th class="out-col">{{ lbl }}</th>
            }
          </tr>
        </thead>
        <tbody>
          @for (row of table().rows; track $index) {
            <tr [class.active]="isRowActive($index)">
              @for (inp of row.inputs; track $index) {
                <td [class.val-1]="inp === 1" [class.val-0]="inp === 0">{{ inp }}</td>
              }
              @for (out of row.outputs; track $index) {
                <td [class.val-1]="out === 1" [class.val-0]="out === 0" class="out-cell">{{ out }}</td>
              }
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .tt-wrap {
      overflow-x: auto;
      border-radius: var(--radius);
      border: 1px solid var(--border-subtle);
    }
    .truth-table { width: 100%; }
    .out-col { color: var(--accent) !important; }
    .out-cell { font-weight: 700; }
    tr.active td { background: var(--accent-dim) !important; }
  `]
})
export class TruthTableComponent {
  readonly table       = input.required<TruthTable>();
  /** Current live input values — the matching row will be highlighted */
  readonly activeInputs = input<(0|1)[]>([]);

  isRowActive(rowIndex: number): boolean {
    const active = this.activeInputs();
    if (!active || active.length === 0) return false;
    const row = this.table().rows[rowIndex];
    return row.inputs.every((v, i) => v === active[i]);
  }
}
