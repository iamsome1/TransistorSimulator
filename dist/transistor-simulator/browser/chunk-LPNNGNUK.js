import {
  GateSymbolComponent
} from "./chunk-5XIHWYDO.js";
import {
  TruthTableComponent
} from "./chunk-QGOD2MD2.js";
import {
  BinaryService
} from "./chunk-HWJUFRKY.js";
import {
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GW2HLFSL.js";

// src/app/features/gate-playground/gate-playground.component.ts
var _forTrack0 = ($index, $item) => $item.type;
var _forTrack1 = ($index, $item) => $item.gate;
function GatePlaygroundComponent_For_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 17)(1, "input", 18);
    \u0275\u0275listener("change", function GatePlaygroundComponent_For_10_Conditional_14_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r4);
      const gate_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleB(gate_r2.type));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "div", 19);
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const gate_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.getInputB(gate_r2.type) === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("B = ", ctx_r2.getInputB(gate_r2.type), "");
  }
}
function GatePlaygroundComponent_For_10_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-truth-table", 26);
  }
  if (rf & 2) {
    const gate_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("table", ctx_r2.getTruthTable(gate_r2.type))("activeInputs", ctx_r2.getInputs(gate_r2.type));
  }
}
function GatePlaygroundComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "span", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275element(7, "app-gate-symbol", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "label", 17)(10, "input", 18);
    \u0275\u0275listener("change", function GatePlaygroundComponent_For_10_Template_input_change_10_listener() {
      const gate_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleA(gate_r2.type));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 19);
    \u0275\u0275elementStart(12, "span", 20);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, GatePlaygroundComponent_For_10_Conditional_14_Template, 5, 2, "label", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 21);
    \u0275\u0275text(16, " Output = ");
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 22);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 23);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 24);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 25);
    \u0275\u0275listener("click", function GatePlaygroundComponent_For_10_Template_button_click_25_listener() {
      const gate_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTable(gate_r2.type));
    });
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, GatePlaygroundComponent_For_10_Conditional_27_Template, 1, 2, "app-truth-table", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gate_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--gc", gate_r2.color);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("color", gate_r2.color)("border-color", gate_r2.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gate_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("~", gate_r2.transistorCount, " transistors");
    \u0275\u0275advance(2);
    \u0275\u0275property("type", gate_r2.type)("inputValues", ctx_r2.getInputs(gate_r2.type))("outputValue", ctx_r2.getOutput(gate_r2.type))("width", 120);
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", ctx_r2.getInputA(gate_r2.type) === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("A = ", ctx_r2.getInputA(gate_r2.type), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(14, gate_r2.type !== "NOT" ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("out-high", ctx_r2.getOutput(gate_r2.type) === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getOutput(gate_r2.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getOutput(gate_r2.type) === 1 ? "HIGH \u2713" : "LOW");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(gate_r2.formula);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(gate_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.showTable() === gate_r2.type ? "\u25B2 Hide" : "\u25BC Show", " truth table ");
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r2.showTable() === gate_r2.type ? 27 : -1);
  }
}
function GatePlaygroundComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.gate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.when);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.formula);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.usage);
  }
}
var GatePlaygroundComponent = class _GatePlaygroundComponent {
  constructor() {
    this.binarySvc = inject(BinaryService);
    this.inputsA = signal({
      AND: 0,
      OR: 0,
      XOR: 0,
      NOT: 0,
      NAND: 1,
      NOR: 0
    });
    this.inputsB = signal({
      AND: 0,
      OR: 0,
      XOR: 1,
      NOT: 0,
      NAND: 1,
      NOR: 0
    });
    this.showTable = signal(null);
    this.gateCards = [
      {
        type: "AND",
        color: "#00d4ff",
        description: "Both inputs must be 1 for output to be 1. Used to compute the carry bit in a half adder.",
        formula: "Out = A AND B",
        transistorCount: "4 (CMOS)"
      },
      {
        type: "OR",
        color: "#a78bfa",
        description: "Output is 1 if at least one input is 1. Used in the full adder to combine two carry signals.",
        formula: "Out = A OR B",
        transistorCount: "4 (CMOS)"
      },
      {
        type: "XOR",
        color: "#10b981",
        description: "Output is 1 when inputs differ. Computes the sum bit in both half adder and full adder.",
        formula: "Out = A \u2295 B",
        transistorCount: "8\u201312"
      },
      {
        type: "NOT",
        color: "#f59e0b",
        description: "Inverts the input. 0 becomes 1 and 1 becomes 0. Also called an inverter.",
        formula: "Out = NOT A (= \u0100)",
        transistorCount: "2 (CMOS)"
      },
      {
        type: "NAND",
        color: "#ef4444",
        description: "Opposite of AND. Universal gate \u2014 any other gate can be built from NAND gates alone.",
        formula: "Out = NOT(A AND B)",
        transistorCount: "4 (CMOS)"
      },
      {
        type: "NOR",
        color: "#ec4899",
        description: "Opposite of OR. Also universal. NOR gates were used in early CPUs like the Apollo Guidance Computer.",
        formula: "Out = NOT(A OR B)",
        transistorCount: "4 (CMOS)"
      }
    ];
    this.refRows = [
      { gate: "AND", when: "Both A=1 AND B=1", formula: "A\xB7B", usage: "Carry bit in half adder" },
      { gate: "OR", when: "A=1 OR B=1 (or both)", formula: "A+B", usage: "Combine carries in full adder" },
      { gate: "XOR", when: "A and B are different", formula: "A\u2295B", usage: "Sum bit in half/full adder" },
      { gate: "NOT", when: "Always (inverts input)", formula: "\u0100", usage: "NAND/NOR internals" },
      { gate: "NAND", when: "NOT (both A=1, B=1)", formula: "NOT(A\xB7B)", usage: "Universal gate, SRAM cells" },
      { gate: "NOR", when: "NOT (A=1 OR B=1)", formula: "NOT(A+B)", usage: "Universal gate, flip-flops" }
    ];
  }
  // ── Getters ──────────────────────────────────────────────────
  getInputA(type) {
    return this.inputsA()[type];
  }
  getInputB(type) {
    return this.inputsB()[type];
  }
  getInputs(type) {
    return type === "NOT" ? [this.getInputA(type)] : [this.getInputA(type), this.getInputB(type)];
  }
  getOutput(type) {
    return this.binarySvc.computeGate(type, this.getInputs(type));
  }
  getTruthTable(type) {
    return this.binarySvc.generateGateTruthTable(type);
  }
  // ── Toggles ──────────────────────────────────────────────────
  toggleA(type) {
    this.inputsA.update((m) => __spreadProps(__spreadValues({}, m), { [type]: m[type] === 0 ? 1 : 0 }));
  }
  toggleB(type) {
    this.inputsB.update((m) => __spreadProps(__spreadValues({}, m), { [type]: m[type] === 0 ? 1 : 0 }));
  }
  toggleTable(type) {
    this.showTable.update((t) => t === type ? null : type);
  }
  static {
    this.\u0275fac = function GatePlaygroundComponent_Factory(t) {
      return new (t || _GatePlaygroundComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GatePlaygroundComponent, selectors: [["app-gate-playground"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 0, consts: [[1, "page", "fade-in"], [1, "section-header"], [1, "label"], [1, "gates-grid"], [1, "gate-card", "card", 3, "--gc"], [1, "explanation-box"], [1, "icon"], [1, "card"], [1, "ref-table-wrap"], [1, "truth-table", "ref-table"], [1, "gate-card", "card"], [1, "gc-header"], [1, "gc-type-badge"], [1, "gc-transistors"], [1, "gc-svg-wrap"], [3, "type", "inputValues", "outputValue", "width"], [1, "gc-toggles"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked"], [1, "track"], [1, "tgl-label"], [1, "gc-output"], [1, "out-state"], [1, "gc-formula", "mono", "text-xs"], [1, "gc-desc"], [1, "btn", "btn-ghost", "btn-sm", "gc-tt-btn", 3, "click"], [3, "table", "activeInputs"], [1, "val-1", "mono"], [1, "text-xs"]], template: function GatePlaygroundComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Layer 3 \u2014 Logic Gates");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Gate Playground");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " Logic gates are the building blocks of all digital circuits. Toggle the inputs below and see outputs change live. Hover the gate symbol for a tooltip. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275repeaterCreate(9, GatePlaygroundComponent_For_10_Template, 28, 23, "div", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "div", 6);
        \u0275\u0275text(13, "\u{1F517}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h4");
        \u0275\u0275text(15, "Why do gates matter?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, " Every logic gate is built from transistors (usually 4\u20136 for basic CMOS gates). A ");
        \u0275\u0275elementStart(18, "strong");
        \u0275\u0275text(19, "Half Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " is just an XOR gate (computes the sum bit) plus an AND gate (computes the carry bit). A ");
        \u0275\u0275elementStart(21, "strong");
        \u0275\u0275text(22, "Full Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " combines two half adders and an OR gate. So ultimately, addition is nothing more than thousands of transistors switching ON and OFF in carefully arranged patterns. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 7)(25, "h3");
        \u0275\u0275text(26, "Quick reference");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 8)(28, "table", 9)(29, "thead")(30, "tr")(31, "th");
        \u0275\u0275text(32, "Gate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "th");
        \u0275\u0275text(34, "Output is 1 when\u2026");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "th");
        \u0275\u0275text(36, "Formula");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Used in adder for\u2026");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody");
        \u0275\u0275repeaterCreate(40, GatePlaygroundComponent_For_41_Template, 10, 4, "tr", null, _forTrack1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.gateCards);
        \u0275\u0275advance(31);
        \u0275\u0275repeater(ctx.refRows);
      }
    }, dependencies: [TruthTableComponent, GateSymbolComponent], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.gates-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.gate-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  border-top: 3px solid var(--gc, var(--accent));\n}\n.gc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.gc-type-badge[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.85rem;\n  font-weight: 700;\n  padding: 0.2rem 0.6rem;\n  border: 1px solid;\n  border-radius: 999px;\n}\n.gc-transistors[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n}\n.gc-svg-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem 0;\n}\n.gc-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.tgl-label[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n}\n.gc-output[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  background: var(--bg-input);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius);\n  font-size: 0.85rem;\n  font-family: var(--font-code);\n  transition: border-color 250ms, background 250ms;\n  strong {\n    font-size: 1.2rem;\n  }\n  .out-state {\n    margin-left: auto;\n    font-size: 0.72rem;\n    color: var(--text-muted);\n  }\n  &.out-high {\n    border-color: var(--sig-high);\n    background: #00ff8808;\n    strong {\n      color: var(--sig-high);\n      text-shadow: var(--sig-high-glow);\n    }\n    .out-state {\n      color: var(--sig-high);\n    }\n  }\n}\n.gc-formula[_ngcontent-%COMP%] {\n  color: var(--accent);\n  padding: 0.3rem 0;\n}\n.gc-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.gc-tt-btn[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n.ref-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: 0.75rem;\n}\n.ref-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  color: var(--text-primary);\n}\n.ref-table[_ngcontent-%COMP%]   .mono[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n}\n/*# sourceMappingURL=gate-playground.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GatePlaygroundComponent, { className: "GatePlaygroundComponent", filePath: "src\\app\\features\\gate-playground\\gate-playground.component.ts", lineNumber: 213 });
})();
export {
  GatePlaygroundComponent
};
//# sourceMappingURL=chunk-LPNNGNUK.js.map
