import {
  ɵɵdefineInjectable
} from "./chunk-GW2HLFSL.js";

// src/app/core/services/binary.service.ts
var BinaryService = class _BinaryService {
  // ─────────────────────────────────────────────────────────────
  //  Basic binary ↔ decimal helpers
  // ─────────────────────────────────────────────────────────────
  /** Decimal → binary string, MSB-first, zero-padded to `bits` */
  toBinary(decimal, bits = 8) {
    const clamped = Math.max(0, Math.min(decimal, Math.pow(2, bits) - 1));
    return clamped.toString(2).padStart(bits, "0");
  }
  /** Binary string → decimal */
  fromBinary(binary) {
    return parseInt(binary, 2) || 0;
  }
  /**
   * Returns an array of bit values ordered by position:
   * index 0 = LSB (rightmost), index n-1 = MSB.
   */
  getBitsLSBFirst(decimal, bits = 8) {
    const bin = this.toBinary(decimal, bits);
    return bin.split("").reverse().map((b) => parseInt(b));
  }
  /**
   * Returns an array of bit values ordered MSB-first (display order).
   */
  getBitsMSBFirst(decimal, bits = 8) {
    return this.toBinary(decimal, bits).split("").map((b) => parseInt(b));
  }
  // ─────────────────────────────────────────────────────────────
  //  Logic gate computation
  // ─────────────────────────────────────────────────────────────
  computeGate(type, inputs) {
    const [a, b] = inputs;
    switch (type) {
      case "AND":
        return a === 1 && b === 1 ? 1 : 0;
      case "OR":
        return a === 1 || b === 1 ? 1 : 0;
      case "XOR":
        return a !== b ? 1 : 0;
      case "NOT":
        return a === 0 ? 1 : 0;
      case "NAND":
        return a === 1 && b === 1 ? 0 : 1;
      case "NOR":
        return a === 1 || b === 1 ? 0 : 1;
      default:
        return 0;
    }
  }
  buildGateState(type, inputs) {
    return {
      type,
      inputs: [...inputs],
      output: this.computeGate(type, inputs),
      highlighted: false
    };
  }
  // ─────────────────────────────────────────────────────────────
  //  Half Adder
  // ─────────────────────────────────────────────────────────────
  computeHalfAdder(a, b) {
    return {
      sum: this.computeGate("XOR", [a, b]),
      carry: this.computeGate("AND", [a, b])
    };
  }
  buildHalfAdderState(a, b) {
    const xorGate = this.buildGateState("XOR", [a, b]);
    const andGate = this.buildGateState("AND", [a, b]);
    const sum = xorGate.output;
    const carry = andGate.output;
    const activeWires = /* @__PURE__ */ new Set();
    if (a === 1) {
      activeWires.add("wire-a-xor");
      activeWires.add("wire-a-and");
    }
    if (b === 1) {
      activeWires.add("wire-b-xor");
      activeWires.add("wire-b-and");
    }
    if (sum === 1)
      activeWires.add("wire-sum");
    if (carry === 1)
      activeWires.add("wire-carry");
    return { a, b, sum, carry, xorGate, andGate, activeWires };
  }
  // ─────────────────────────────────────────────────────────────
  //  Full Adder
  // ─────────────────────────────────────────────────────────────
  computeFullAdder(a, b, cin) {
    const ha1 = this.computeHalfAdder(a, b);
    const ha2 = this.computeHalfAdder(ha1.sum, cin);
    const carryOut = this.computeGate("OR", [ha1.carry, ha2.carry]);
    return { sum: ha2.sum, carryOut };
  }
  buildFullAdderState(a, b, cin) {
    const ha1 = this.buildHalfAdderState(a, b);
    const ha2 = this.buildHalfAdderState(ha1.sum, cin);
    const orGate = this.buildGateState("OR", [ha1.carry, ha2.carry]);
    const sum = ha2.sum;
    const carryOut = orGate.output;
    const activeWires = /* @__PURE__ */ new Set();
    if (a === 1)
      activeWires.add("fa-wire-a");
    if (b === 1)
      activeWires.add("fa-wire-b");
    if (cin === 1)
      activeWires.add("fa-wire-cin");
    if (ha1.sum === 1)
      activeWires.add("fa-wire-ha1-sum");
    if (ha1.carry === 1)
      activeWires.add("fa-wire-ha1-carry");
    if (ha2.sum === 1)
      activeWires.add("fa-wire-ha2-sum");
    if (ha2.carry === 1)
      activeWires.add("fa-wire-ha2-carry");
    if (sum === 1)
      activeWires.add("fa-wire-sum");
    if (carryOut === 1)
      activeWires.add("fa-wire-cout");
    return { a, b, carryIn: cin, sum, carryOut, ha1, ha2, orGate, activeWires };
  }
  // ─────────────────────────────────────────────────────────────
  //  Ripple-carry adder
  // ─────────────────────────────────────────────────────────────
  /**
   * Computes all bit-column steps for adding `a` + `b` with `bits` width.
   * Returns steps ordered LSB first (index 0 = rightmost column).
   */
  computeRippleCarry(a, b, bits) {
    const bitsA = this.getBitsLSBFirst(a, bits);
    const bitsB = this.getBitsLSBFirst(b, bits);
    const steps = [];
    let carry = 0;
    for (let i = 0; i < bits; i++) {
      const aBit = bitsA[i] ?? 0;
      const bBit = bitsB[i] ?? 0;
      const { sum, carryOut } = this.computeFullAdder(aBit, bBit, carry);
      steps.push({ position: i, aBit, bBit, carryIn: carry, sum, carryOut, active: false });
      carry = carryOut;
    }
    return steps;
  }
  // ─────────────────────────────────────────────────────────────
  //  Truth table generation
  // ─────────────────────────────────────────────────────────────
  generateGateTruthTable(type) {
    const isUnary = type === "NOT";
    const n = isUnary ? 1 : 2;
    const rows = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
      const inputs = [];
      for (let b = n - 1; b >= 0; b--) {
        inputs.push(i >> b & 1);
      }
      rows.push({ inputs, outputs: [this.computeGate(type, inputs)] });
    }
    return { inputLabels: isUnary ? ["A"] : ["A", "B"], outputLabels: ["Out"], rows };
  }
  generateHalfAdderTruthTable() {
    const rows = [];
    for (let a = 0; a <= 1; a++) {
      for (let b = 0; b <= 1; b++) {
        const { sum, carry } = this.computeHalfAdder(a, b);
        rows.push({ inputs: [a, b], outputs: [sum, carry] });
      }
    }
    return { inputLabels: ["A", "B"], outputLabels: ["Sum", "Carry"], rows };
  }
  generateFullAdderTruthTable() {
    const rows = [];
    for (let a = 0; a <= 1; a++) {
      for (let b = 0; b <= 1; b++) {
        for (let c = 0; c <= 1; c++) {
          const { sum, carryOut } = this.computeFullAdder(a, b, c);
          rows.push({ inputs: [a, b, c], outputs: [sum, carryOut] });
        }
      }
    }
    return { inputLabels: ["A", "B", "Cin"], outputLabels: ["Sum", "Cout"], rows };
  }
  // ─────────────────────────────────────────────────────────────
  //  Step-by-step decimal → binary conversion explanation
  // ─────────────────────────────────────────────────────────────
  explainConversion(decimal) {
    if (decimal === 0)
      return ["0 in binary is just 0"];
    const steps = [`Start: convert ${decimal} to binary using repeated \xF7 2`];
    let n = decimal;
    const remainders = [];
    while (n > 0) {
      const r = n % 2;
      remainders.push(r);
      steps.push(`  ${n} \xF7 2 = ${Math.floor(n / 2)}  remainder ${r}`);
      n = Math.floor(n / 2);
    }
    steps.push(`Read remainders bottom-to-top: ${remainders.reverse().join("")}`);
    steps.push(`Result: ${decimal} = ${this.toBinary(decimal, 8)} (8-bit)`);
    return steps;
  }
  static {
    this.\u0275fac = function BinaryService_Factory(t) {
      return new (t || _BinaryService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BinaryService, factory: _BinaryService.\u0275fac, providedIn: "root" });
  }
};

export {
  BinaryService
};
//# sourceMappingURL=chunk-HWJUFRKY.js.map
