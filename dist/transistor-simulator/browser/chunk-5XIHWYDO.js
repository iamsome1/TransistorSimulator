import {
  InputFlags,
  computed,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GW2HLFSL.js";

// src/app/shared/components/gate-symbol/gate-symbol.component.ts
function GateSymbolComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line")(1, "circle", 1);
  }
  if (rf & 2) {
    const wire_r1 = ctx.$implicit;
    const $index_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("wire " + (ctx_r2.inputValues()[$index_r2] === 1 ? "wire--high" : ""));
    \u0275\u0275attribute("x1", 0)("y1", wire_r1.y)("x2", wire_r1.x2)("y2", wire_r1.y);
    \u0275\u0275advance();
    \u0275\u0275classMap("signal-dot " + (ctx_r2.inputValues()[$index_r2] === 1 ? "signal-dot--high" : "signal-dot--low"));
    \u0275\u0275attribute("cx", 0)("cy", wire_r1.y);
  }
}
function GateSymbolComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap("gate-body " + (ctx_r2.isActive() ? "gate-body--active" : ""));
    \u0275\u0275attribute("cx", ctx_r2.bubbleCx())("cy", ctx_r2.midY());
  }
}
var GateSymbolComponent = class _GateSymbolComponent {
  constructor() {
    this.type = input.required();
    this.inputValues = input([0, 0]);
    this.outputValue = input(0);
    this.width = input(80);
    this.height = computed(() => this.type() === "NOT" ? 40 : 50);
    this.svgHeight = computed(() => Math.round(this.width() * this.height() / 80));
    this.midY = computed(() => this.height() / 2);
    this.isActive = computed(() => this.outputValue() === 1);
    this.outputX = computed(() => this.hasBubble() ? 70 : 66);
    this.bubbleCx = computed(() => 68);
    this.labelX = computed(() => 44);
    this.hasBubble = computed(() => this.type() === "NOT" || this.type() === "NAND" || this.type() === "NOR");
    this.label = computed(() => {
      const map = {
        AND: "AND",
        OR: "OR",
        XOR: "XOR",
        NOT: "NOT",
        NAND: "NAND",
        NOR: "NOR"
      };
      return map[this.type()];
    });
    this.inputWires = computed(() => {
      const mid = this.midY();
      const isUnary = this.type() === "NOT";
      if (isUnary)
        return [{ y: mid, x2: 18 }];
      return [{ y: mid - 8, x2: 18 }, { y: mid + 8, x2: 18 }];
    });
    this.gatePath = computed(() => {
      const mid = this.midY();
      const type = this.type();
      if (type === "AND" || type === "NAND") {
        return `M 18 ${mid - 14} L 42 ${mid - 14}
              Q 64 ${mid - 14} 64 ${mid}
              Q 64 ${mid + 14} 42 ${mid + 14}
              L 18 ${mid + 14} Z`;
      }
      if (type === "OR" || type === "NOR") {
        return `M 18 ${mid - 14}
              Q 30 ${mid - 14} 64 ${mid}
              Q 30 ${mid + 14} 18 ${mid + 14}
              Q 28 ${mid} 18 ${mid - 14} Z`;
      }
      if (type === "XOR") {
        return `M 22 ${mid - 14}
              Q 34 ${mid - 14} 64 ${mid}
              Q 34 ${mid + 14} 22 ${mid + 14}
              Q 32 ${mid} 22 ${mid - 14} Z`;
      }
      if (type === "NOT") {
        return `M 18 ${mid - 14} L 62 ${mid} L 18 ${mid + 14} Z`;
      }
      return "";
    });
  }
  static {
    this.\u0275fac = function GateSymbolComponent_Factory(t) {
      return new (t || _GateSymbolComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GateSymbolComponent, selectors: [["app-gate-symbol"]], inputs: { type: [InputFlags.SignalBased, "type"], inputValues: [InputFlags.SignalBased, "inputValues"], outputValue: [InputFlags.SignalBased, "outputValue"], width: [InputFlags.SignalBased, "width"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 20, consts: [["aria-hidden", "true", 1, "gate-svg"], ["r", "2.5"], ["r", "3", 3, "class"], [1, "gate-label"], ["r", "3"]], template: function GateSymbolComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(0, "svg", 0);
        \u0275\u0275repeaterCreate(1, GateSymbolComponent_For_2_Template, 2, 10, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275element(3, "line")(4, "circle", 1)(5, "path");
        \u0275\u0275template(6, GateSymbolComponent_Conditional_6_Template, 1, 4, ":svg:circle", 2);
        \u0275\u0275elementStart(7, "text", 3);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("viewBox", "0 0 80 " + ctx.height())("width", ctx.width())("height", ctx.svgHeight());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.inputWires());
        \u0275\u0275advance(2);
        \u0275\u0275classMap("wire " + (ctx.outputValue() === 1 ? "wire--high" : ""));
        \u0275\u0275attribute("x1", ctx.outputX())("y1", ctx.midY())("x2", 80)("y2", ctx.midY());
        \u0275\u0275advance();
        \u0275\u0275classMap("signal-dot " + (ctx.outputValue() === 1 ? "signal-dot--high" : "signal-dot--low"));
        \u0275\u0275attribute("cx", 80)("cy", ctx.midY());
        \u0275\u0275advance();
        \u0275\u0275classMap("gate-body " + (ctx.isActive() ? "gate-body--active" : ""));
        \u0275\u0275attribute("d", ctx.gatePath());
        \u0275\u0275advance();
        \u0275\u0275conditional(6, ctx.hasBubble() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275attribute("x", ctx.labelX())("y", ctx.midY());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.label());
      }
    }, styles: ["\n\n.gate-svg[_ngcontent-%COMP%] {\n  display: block;\n  overflow: visible;\n}\n/*# sourceMappingURL=gate-symbol.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GateSymbolComponent, { className: "GateSymbolComponent", filePath: "src\\app\\shared\\components\\gate-symbol\\gate-symbol.component.ts", lineNumber: 57 });
})();

export {
  GateSymbolComponent
};
//# sourceMappingURL=chunk-5XIHWYDO.js.map
