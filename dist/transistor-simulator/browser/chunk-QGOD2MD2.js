import {
  InputFlags,
  input,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GW2HLFSL.js";

// src/app/shared/components/truth-table/truth-table.component.ts
function TruthTableComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lbl_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lbl_r1);
  }
}
function TruthTableComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lbl_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lbl_r2);
  }
}
function TruthTableComponent_For_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const inp_r3 = ctx.$implicit;
    \u0275\u0275classProp("val-1", inp_r3 === 1)("val-0", inp_r3 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inp_r3);
  }
}
function TruthTableComponent_For_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const out_r4 = ctx.$implicit;
    \u0275\u0275classProp("val-1", out_r4 === 1)("val-0", out_r4 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(out_r4);
  }
}
function TruthTableComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275repeaterCreate(1, TruthTableComponent_For_10_For_2_Template, 2, 5, "td", 4, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275repeaterCreate(3, TruthTableComponent_For_10_For_4_Template, 2, 5, "td", 5, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r6.isRowActive($index_r6));
    \u0275\u0275advance();
    \u0275\u0275repeater(row_r5.inputs);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(row_r5.outputs);
  }
}
var TruthTableComponent = class _TruthTableComponent {
  constructor() {
    this.table = input.required();
    this.activeInputs = input([]);
  }
  isRowActive(rowIndex) {
    const active = this.activeInputs();
    if (!active || active.length === 0)
      return false;
    const row = this.table().rows[rowIndex];
    return row.inputs.every((v, i) => v === active[i]);
  }
  static {
    this.\u0275fac = function TruthTableComponent_Factory(t) {
      return new (t || _TruthTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TruthTableComponent, selectors: [["app-truth-table"]], inputs: { table: [InputFlags.SignalBased, "table"], activeInputs: [InputFlags.SignalBased, "activeInputs"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 0, consts: [[1, "tt-wrap"], [1, "truth-table"], [1, "out-col"], [3, "active"], [3, "val-1", "val-0"], [1, "out-cell", 3, "val-1", "val-0"], [1, "out-cell"]], template: function TruthTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr");
        \u0275\u0275repeaterCreate(4, TruthTableComponent_For_5_Template, 2, 1, "th", null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275repeaterCreate(6, TruthTableComponent_For_7_Template, 2, 1, "th", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "tbody");
        \u0275\u0275repeaterCreate(9, TruthTableComponent_For_10_Template, 5, 2, "tr", 3, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.table().inputLabels);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.table().outputLabels);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.table().rows);
      }
    }, styles: ["\n\n.tt-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius);\n  border: 1px solid var(--border-subtle);\n}\n.truth-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.out-col[_ngcontent-%COMP%] {\n  color: var(--accent) !important;\n}\n.out-cell[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\ntr.active[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--accent-dim) !important;\n}\n/*# sourceMappingURL=truth-table.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TruthTableComponent, { className: "TruthTableComponent", filePath: "src\\app\\shared\\components\\truth-table\\truth-table.component.ts", lineNumber: 51 });
})();

export {
  TruthTableComponent
};
//# sourceMappingURL=chunk-QGOD2MD2.js.map
