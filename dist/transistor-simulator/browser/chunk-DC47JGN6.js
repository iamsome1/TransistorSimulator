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
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GW2HLFSL.js";

// src/app/shared/components/explanation-panel/explanation-panel.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExplanationPanelComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", step_r1.id === ctx_r1.activeStep());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.body);
  }
}
var ExplanationPanelComponent = class _ExplanationPanelComponent {
  constructor() {
    this.title = input("How it works");
    this.steps = input([]);
    this.activeStep = input(-1);
  }
  static {
    this.\u0275fac = function ExplanationPanelComponent_Factory(t) {
      return new (t || _ExplanationPanelComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplanationPanelComponent, selectors: [["app-explanation-panel"]], inputs: { title: [InputFlags.SignalBased, "title"], steps: [InputFlags.SignalBased, "steps"], activeStep: [InputFlags.SignalBased, "activeStep"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [[1, "exp-panel"], [1, "exp-header"], [1, "exp-icon"], [1, "exp-steps"], [1, "exp-step", 3, "active"], [1, "exp-step"], [1, "step-num"], [1, "step-body"]], template: function ExplanationPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "\u{1F4A1}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h4");
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "ol", 3);
        \u0275\u0275repeaterCreate(7, ExplanationPanelComponent_For_8_Template, 8, 5, "li", 4, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.title());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.steps());
      }
    }, styles: ["\n\n.exp-panel[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.exp-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.9rem 1.25rem;\n  background: var(--bg-secondary);\n  border-bottom: 1px solid var(--border-subtle);\n  h4 {\n    margin: 0;\n    color: var(--accent);\n  }\n}\n.exp-steps[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0.75rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.exp-step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  padding: 0.7rem 0.9rem;\n  border-radius: var(--radius);\n  border: 1px solid transparent;\n  transition: all 250ms;\n  &.active {\n    border-color: var(--accent);\n    background: var(--accent-dim);\n    .step-num {\n      background: var(--accent);\n      color: #000;\n    }\n  }\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 1.6rem;\n  height: 1.6rem;\n  border-radius: 50%;\n  background: var(--border-default);\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: background 250ms, color 250ms;\n}\n.step-body[_ngcontent-%COMP%] {\n  strong {\n    display: block;\n    font-size: 0.875rem;\n    color: var(--text-primary);\n    margin-bottom: 0.15rem;\n  }\n  p {\n    font-size: 0.8rem;\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=explanation-panel.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplanationPanelComponent, { className: "ExplanationPanelComponent", filePath: "src\\app\\shared\\components\\explanation-panel\\explanation-panel.component.ts", lineNumber: 83 });
})();

export {
  ExplanationPanelComponent
};
//# sourceMappingURL=chunk-DC47JGN6.js.map
