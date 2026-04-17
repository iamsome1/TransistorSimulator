import { Injectable } from '@angular/core';
import {
  BitAdditionStep,
  FullAdderState,
  GateState,
  GateType,
  HalfAdderState,
  TruthTable,
  TruthTableRow,
} from '../models';

/**
 * BinaryService — pure computation, no UI concerns.
 *
 * All methods are stateless and return new objects, making them
 * easy to test and safe to call from Angular Signals / computed().
 */
@Injectable({ providedIn: 'root' })
export class BinaryService {

  // ─────────────────────────────────────────────────────────────
  //  Basic binary ↔ decimal helpers
  // ─────────────────────────────────────────────────────────────

  /** Decimal → binary string, MSB-first, zero-padded to `bits` */
  toBinary(decimal: number, bits = 8): string {
    const clamped = Math.max(0, Math.min(decimal, Math.pow(2, bits) - 1));
    return clamped.toString(2).padStart(bits, '0');
  }

  /** Binary string → decimal */
  fromBinary(binary: string): number {
    return parseInt(binary, 2) || 0;
  }

  /**
   * Returns an array of bit values ordered by position:
   * index 0 = LSB (rightmost), index n-1 = MSB.
   */
  getBitsLSBFirst(decimal: number, bits = 8): (0 | 1)[] {
    const bin = this.toBinary(decimal, bits);
    return bin.split('').reverse().map(b => parseInt(b) as 0 | 1);
  }

  /**
   * Returns an array of bit values ordered MSB-first (display order).
   */
  getBitsMSBFirst(decimal: number, bits = 8): (0 | 1)[] {
    return this.toBinary(decimal, bits).split('').map(b => parseInt(b) as 0 | 1);
  }

  // ─────────────────────────────────────────────────────────────
  //  Logic gate computation
  // ─────────────────────────────────────────────────────────────

  computeGate(type: GateType, inputs: (0 | 1)[]): 0 | 1 {
    const [a, b] = inputs;
    switch (type) {
      case 'AND':  return (a === 1 && b === 1) ? 1 : 0;
      case 'OR':   return (a === 1 || b === 1) ? 1 : 0;
      case 'XOR':  return (a !== b)            ? 1 : 0;
      case 'NOT':  return a === 0              ? 1 : 0;
      case 'NAND': return (a === 1 && b === 1) ? 0 : 1;
      case 'NOR':  return (a === 1 || b === 1) ? 0 : 1;
      default:     return 0;
    }
  }

  buildGateState(type: GateType, inputs: (0 | 1)[]): GateState {
    return {
      type,
      inputs: [...inputs],
      output: this.computeGate(type, inputs),
      highlighted: false,
    };
  }

  // ─────────────────────────────────────────────────────────────
  //  Half Adder
  // ─────────────────────────────────────────────────────────────

  computeHalfAdder(a: 0 | 1, b: 0 | 1): { sum: 0 | 1; carry: 0 | 1 } {
    return {
      sum:   this.computeGate('XOR', [a, b]),
      carry: this.computeGate('AND', [a, b]),
    };
  }

  buildHalfAdderState(a: 0 | 1, b: 0 | 1): HalfAdderState {
    const xorGate = this.buildGateState('XOR', [a, b]);
    const andGate = this.buildGateState('AND', [a, b]);
    const sum   = xorGate.output;
    const carry = andGate.output;

    // Mark which wires carry a '1' for SVG highlighting
    const activeWires = new Set<string>();
    if (a === 1) { activeWires.add('wire-a-xor'); activeWires.add('wire-a-and'); }
    if (b === 1) { activeWires.add('wire-b-xor'); activeWires.add('wire-b-and'); }
    if (sum   === 1) activeWires.add('wire-sum');
    if (carry === 1) activeWires.add('wire-carry');

    return { a, b, sum, carry, xorGate, andGate, activeWires };
  }

  // ─────────────────────────────────────────────────────────────
  //  Full Adder
  // ─────────────────────────────────────────────────────────────

  computeFullAdder(a: 0 | 1, b: 0 | 1, cin: 0 | 1): { sum: 0 | 1; carryOut: 0 | 1 } {
    const ha1 = this.computeHalfAdder(a, b);
    const ha2 = this.computeHalfAdder(ha1.sum, cin);
    const carryOut = this.computeGate('OR', [ha1.carry, ha2.carry]);
    return { sum: ha2.sum, carryOut };
  }

  buildFullAdderState(a: 0 | 1, b: 0 | 1, cin: 0 | 1): FullAdderState {
    const ha1 = this.buildHalfAdderState(a, b);
    const ha2 = this.buildHalfAdderState(ha1.sum, cin);
    const orGate = this.buildGateState('OR', [ha1.carry, ha2.carry]);

    const sum      = ha2.sum;
    const carryOut = orGate.output;

    const activeWires = new Set<string>();
    if (a   === 1) activeWires.add('fa-wire-a');
    if (b   === 1) activeWires.add('fa-wire-b');
    if (cin === 1) activeWires.add('fa-wire-cin');
    if (ha1.sum   === 1) activeWires.add('fa-wire-ha1-sum');
    if (ha1.carry === 1) activeWires.add('fa-wire-ha1-carry');
    if (ha2.sum   === 1) activeWires.add('fa-wire-ha2-sum');
    if (ha2.carry === 1) activeWires.add('fa-wire-ha2-carry');
    if (sum      === 1) activeWires.add('fa-wire-sum');
    if (carryOut === 1) activeWires.add('fa-wire-cout');

    return { a, b, carryIn: cin, sum, carryOut, ha1, ha2, orGate, activeWires };
  }

  // ─────────────────────────────────────────────────────────────
  //  Ripple-carry adder
  // ─────────────────────────────────────────────────────────────

  /**
   * Computes all bit-column steps for adding `a` + `b` with `bits` width.
   * Returns steps ordered LSB first (index 0 = rightmost column).
   */
  computeRippleCarry(a: number, b: number, bits: number): BitAdditionStep[] {
    const bitsA = this.getBitsLSBFirst(a, bits);
    const bitsB = this.getBitsLSBFirst(b, bits);
    const steps: BitAdditionStep[] = [];
    let carry: 0 | 1 = 0;

    for (let i = 0; i < bits; i++) {
      const aBit = bitsA[i] ?? 0 as 0 | 1;
      const bBit = bitsB[i] ?? 0 as 0 | 1;
      const { sum, carryOut } = this.computeFullAdder(aBit, bBit, carry);
      steps.push({ position: i, aBit, bBit, carryIn: carry, sum, carryOut, active: false });
      carry = carryOut;
    }
    return steps;
  }

  // ─────────────────────────────────────────────────────────────
  //  Truth table generation
  // ─────────────────────────────────────────────────────────────

  generateGateTruthTable(type: GateType): TruthTable {
    const isUnary = type === 'NOT';
    const n = isUnary ? 1 : 2;
    const rows: TruthTableRow[] = [];

    for (let i = 0; i < Math.pow(2, n); i++) {
      const inputs: (0 | 1)[] = [];
      for (let b = n - 1; b >= 0; b--) {
        inputs.push(((i >> b) & 1) as 0 | 1);
      }
      rows.push({ inputs, outputs: [this.computeGate(type, inputs)] });
    }
    return { inputLabels: isUnary ? ['A'] : ['A', 'B'], outputLabels: ['Out'], rows };
  }

  generateHalfAdderTruthTable(): TruthTable {
    const rows: TruthTableRow[] = [];
    for (let a = 0; a <= 1; a++) {
      for (let b = 0; b <= 1; b++) {
        const { sum, carry } = this.computeHalfAdder(a as 0|1, b as 0|1);
        rows.push({ inputs: [a as 0|1, b as 0|1], outputs: [sum, carry] });
      }
    }
    return { inputLabels: ['A', 'B'], outputLabels: ['Sum', 'Carry'], rows };
  }

  generateFullAdderTruthTable(): TruthTable {
    const rows: TruthTableRow[] = [];
    for (let a = 0; a <= 1; a++) {
      for (let b = 0; b <= 1; b++) {
        for (let c = 0; c <= 1; c++) {
          const { sum, carryOut } = this.computeFullAdder(a as 0|1, b as 0|1, c as 0|1);
          rows.push({ inputs: [a as 0|1, b as 0|1, c as 0|1], outputs: [sum, carryOut] });
        }
      }
    }
    return { inputLabels: ['A', 'B', 'Cin'], outputLabels: ['Sum', 'Cout'], rows };
  }

  // ─────────────────────────────────────────────────────────────
  //  Step-by-step decimal → binary conversion explanation
  // ─────────────────────────────────────────────────────────────

  explainConversion(decimal: number): string[] {
    if (decimal === 0) return ['0 in binary is just 0'];
    const steps: string[] = [`Start: convert ${decimal} to binary using repeated ÷ 2`];
    let n = decimal;
    const remainders: number[] = [];

    while (n > 0) {
      const r = n % 2;
      remainders.push(r);
      steps.push(`  ${n} ÷ 2 = ${Math.floor(n / 2)}  remainder ${r}`);
      n = Math.floor(n / 2);
    }

    steps.push(`Read remainders bottom-to-top: ${remainders.reverse().join('')}`);
    steps.push(`Result: ${decimal} = ${this.toBinary(decimal, 8)} (8-bit)`);
    return steps;
  }
}
