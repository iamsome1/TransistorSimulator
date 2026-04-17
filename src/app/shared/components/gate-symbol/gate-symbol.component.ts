import { Component, input, computed } from '@angular/core';
import { GateType } from '../../../core/models';

/**
 * GateSymbolComponent — draws an IEEE-style logic gate in SVG.
 * Colours update reactively based on inputValues / outputValue signals.
 *
 * Coordinate space: 80×50 viewBox, gate body centred, inputs on left, output on right.
 */
@Component({
  selector: 'app-gate-symbol',
  standalone: true,
  template: `
    <svg [attr.viewBox]="'0 0 80 ' + height()"
         [attr.width]="width()"
         [attr.height]="svgHeight()"
         class="gate-svg"
         aria-hidden="true">

      <!-- Input wires -->
      @for (wire of inputWires(); track $index) {
        <line [attr.x1]="0" [attr.y1]="wire.y"
              [attr.x2]="wire.x2" [attr.y2]="wire.y"
              [class]="'wire ' + (inputValues()[$index] === 1 ? 'wire--high' : '')" />
        <!-- Input dot -->
        <circle [attr.cx]="0" [attr.cy]="wire.y" r="2.5"
                [class]="'signal-dot ' + (inputValues()[$index] === 1 ? 'signal-dot--high' : 'signal-dot--low')" />
      }

      <!-- Output wire -->
      <line [attr.x1]="outputX()" [attr.y1]="midY()"
            [attr.x2]="80" [attr.y2]="midY()"
            [class]="'wire ' + (outputValue() === 1 ? 'wire--high' : '')" />
      <!-- Output dot -->
      <circle [attr.cx]="80" [attr.cy]="midY()" r="2.5"
              [class]="'signal-dot ' + (outputValue() === 1 ? 'signal-dot--high' : 'signal-dot--low')" />

      <!-- Gate body -->
      <path [attr.d]="gatePath()"
            [class]="'gate-body ' + (isActive() ? 'gate-body--active' : '')" />

      <!-- NAND / NOR / NOT: inversion bubble -->
      @if (hasBubble()) {
        <circle [attr.cx]="bubbleCx()" [attr.cy]="midY()" r="3"
                [class]="'gate-body ' + (isActive() ? 'gate-body--active' : '')" />
      }

      <!-- Gate label -->
      <text [attr.x]="labelX()" [attr.y]="midY()" class="gate-label">{{ label() }}</text>

    </svg>
  `,
  styles: [`
    .gate-svg { display: block; overflow: visible; }
  `]
})
export class GateSymbolComponent {
  readonly type         = input.required<GateType>();
  readonly inputValues  = input<(0 | 1)[]>([0, 0]);
  readonly outputValue  = input<0 | 1>(0);
  readonly width        = input<number>(80);

  protected readonly height   = computed(() => this.type() === 'NOT' ? 40 : 50);
  protected readonly svgHeight = computed(() => Math.round(this.width() * this.height() / 80));
  protected readonly midY     = computed(() => this.height() / 2);
  protected readonly isActive = computed(() => this.outputValue() === 1);

  /** Where the output wire starts (after bubble if present) */
  protected readonly outputX = computed(() => this.hasBubble() ? 70 : 66);
  protected readonly bubbleCx = computed(() => 68);
  protected readonly labelX   = computed(() => 44);

  protected readonly hasBubble = computed(() =>
    this.type() === 'NOT' || this.type() === 'NAND' || this.type() === 'NOR'
  );

  protected readonly label = computed((): string => {
    const map: Record<GateType, string> = {
      AND: 'AND', OR: 'OR', XOR: 'XOR', NOT: 'NOT', NAND: 'NAND', NOR: 'NOR'
    };
    return map[this.type()];
  });

  /** Input wire connection points (x2, y) — wires go from x=0 to x=x2 */
  protected readonly inputWires = computed(() => {
    const mid = this.midY();
    const isUnary = this.type() === 'NOT';
    if (isUnary) return [{ y: mid, x2: 18 }];
    return [{ y: mid - 8, x2: 18 }, { y: mid + 8, x2: 18 }];
  });

  /** SVG path data for the gate body */
  protected readonly gatePath = computed((): string => {
    const mid = this.midY();
    const type = this.type();

    if (type === 'AND' || type === 'NAND') {
      // Rectangle left + semicircle right
      return `M 18 ${mid - 14} L 42 ${mid - 14}
              Q 64 ${mid - 14} 64 ${mid}
              Q 64 ${mid + 14} 42 ${mid + 14}
              L 18 ${mid + 14} Z`;
    }

    if (type === 'OR' || type === 'NOR') {
      // Curved body (OR shape)
      return `M 18 ${mid - 14}
              Q 30 ${mid - 14} 64 ${mid}
              Q 30 ${mid + 14} 18 ${mid + 14}
              Q 28 ${mid} 18 ${mid - 14} Z`;
    }

    if (type === 'XOR') {
      // OR body + extra curve at input
      return `M 22 ${mid - 14}
              Q 34 ${mid - 14} 64 ${mid}
              Q 34 ${mid + 14} 22 ${mid + 14}
              Q 32 ${mid} 22 ${mid - 14} Z`;
    }

    if (type === 'NOT') {
      // Triangle
      return `M 18 ${mid - 14} L 62 ${mid} L 18 ${mid + 14} Z`;
    }

    return '';
  });
}
