import "./chunk-DC47JGN6.js";
import "./chunk-QGOD2MD2.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-QRAK27SI.js";
import "./chunk-T6CYCFWY.js";
import {
  BinaryService
} from "./chunk-HWJUFRKY.js";
import {
  computed,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GW2HLFSL.js";

// src/app/features/binary-basics/binary-basics.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.power;
var _forTrack2 = ($index, $item) => $item.position;
function BinaryBasicsComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r1 = ctx.$implicit;
    \u0275\u0275classProp("bit-1", bit_r1 === 1)("bit-0", bit_r1 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bit_r1);
  }
}
function BinaryBasicsComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r2 = ctx.$implicit;
    \u0275\u0275classProp("bit-1", bit_r2 === 1)("bit-0", bit_r2 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bit_r2);
  }
}
function BinaryBasicsComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r3 = ctx.$implicit;
    \u0275\u0275classProp("bit-1", bit_r3 === 1)("bit-0", bit_r3 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bit_r3);
  }
}
function BinaryBasicsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "\u26A0 Overflow! Result exceeds 8 bits.");
    \u0275\u0275elementEnd();
  }
}
function BinaryBasicsComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function BinaryBasicsComponent_For_42_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.loadPreset(p_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r5.numA() === p_r5.a && ctx_r5.numB() === p_r5.b);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r5.label, " ");
  }
}
function BinaryBasicsComponent_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r7);
  }
}
function BinaryBasicsComponent_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r8);
  }
}
function BinaryBasicsComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 47);
    \u0275\u0275text(2, "2");
    \u0275\u0275elementStart(3, "sup");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pos_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pos_r9.power);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pos_r9.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pos_r9.label);
  }
}
function BinaryBasicsComponent_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pos_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("bit ", pos_r10, "");
  }
}
function BinaryBasicsComponent_For_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r11 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active-col", step_r11.position === ctx_r5.activeStep())("bit-1", step_r11.carryIn === 1)("bit-0", step_r11.carryIn === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r11.carryIn, " ");
  }
}
function BinaryBasicsComponent_For_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r12 = ctx.$implicit;
    const $index_r13 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active-col", 7 - $index_r13 === ctx_r5.activeStep())("bit-1", bit_r12 === 1)("bit-0", bit_r12 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bit_r12, " ");
  }
}
function BinaryBasicsComponent_For_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r14 = ctx.$implicit;
    const $index_r15 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active-col", 7 - $index_r15 === ctx_r5.activeStep())("bit-1", bit_r14 === 1)("bit-0", bit_r14 === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bit_r14, " ");
  }
}
function BinaryBasicsComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r16 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active-col", step_r16.position === ctx_r5.activeStep())("revealed", step_r16.position <= ctx_r5.activeStep())("bit-1", step_r16.sum === 1)("bit-0", step_r16.sum === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r16.position <= ctx_r5.activeStep() ? step_r16.sum : "?", " ");
  }
}
function BinaryBasicsComponent_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 51)(2, "div", 52)(3, "span", 53);
    \u0275\u0275text(4, "Column");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementStart(7, "sup");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, ")");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 52)(11, "span", 53);
    \u0275\u0275text(12, "A bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 52)(16, "span", 53);
    \u0275\u0275text(17, "B bit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 45);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 52)(21, "span", 53);
    \u0275\u0275text(22, "Carry In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 45);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 52)(26, "span", 53);
    \u0275\u0275text(27, "Sum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 45);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 52)(31, "span", 53);
    \u0275\u0275text(32, "Carry Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 45);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "p", 55);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r17 = ctx;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("bit ", s_r17.position, " (2");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r17.position);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("bit-1", s_r17.aBit === 1)("bit-0", s_r17.aBit === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17.aBit);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bit-1", s_r17.bBit === 1)("bit-0", s_r17.bBit === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17.bBit);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bit-1", s_r17.carryIn === 1)("bit-0", s_r17.carryIn === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17.carryIn);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bit-1", s_r17.sum === 1)("bit-0", s_r17.sum === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17.sum);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bit-1", s_r17.carryOut === 1)("bit-0", s_r17.carryOut === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r17.carryOut);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.stepExplanation());
  }
}
var BinaryBasicsComponent = class _BinaryBasicsComponent {
  constructor() {
    this.binarySvc = inject(BinaryService);
    this.numA = signal(3);
    this.numB = signal(5);
    this.activeStep = signal(0);
    this.bitsA = computed(() => this.binarySvc.getBitsMSBFirst(this.numA(), 8));
    this.bitsB = computed(() => this.binarySvc.getBitsMSBFirst(this.numB(), 8));
    this.steps = computed(() => this.binarySvc.computeRippleCarry(this.numA(), this.numB(), 8));
    this.result = computed(() => {
      const s = this.steps();
      return s.reduce((acc, step, i) => acc + step.sum * Math.pow(2, i), 0);
    });
    this.overflow = computed(() => this.numA() + this.numB() > 255);
    this.bitsResult = computed(() => this.binarySvc.getBitsMSBFirst(this.result() & 255, 8));
    this.reversedSteps = computed(() => [...this.steps()].reverse());
    this.reversedPositions = computed(() => [...Array(8)].map((_, i) => 7 - i));
    this.activeStepData = computed(() => this.steps()[this.activeStep()] ?? null);
    this.convStepsA = computed(() => this.binarySvc.explainConversion(this.numA()));
    this.convStepsB = computed(() => this.binarySvc.explainConversion(this.numB()));
    this.stepExplanation = computed(() => {
      const s = this.activeStepData();
      if (!s)
        return "";
      const sum = s.aBit + s.bBit + s.carryIn;
      const colVal = Math.pow(2, s.position);
      return `At bit position ${s.position} (value = ${colVal}): A=${s.aBit}, B=${s.bBit}, Carry-In=${s.carryIn}. Total = ${sum}. In binary ${sum} = "${s.carryOut}${s.sum}" \u2192 Sum bit = ${s.sum}, Carry-Out = ${s.carryOut}.`;
    });
    this.bitPositions = [
      { power: 7, value: 128, label: "MSB" },
      { power: 6, value: 64, label: "" },
      { power: 5, value: 32, label: "" },
      { power: 4, value: 16, label: "" },
      { power: 3, value: 8, label: "" },
      { power: 2, value: 4, label: "" },
      { power: 1, value: 2, label: "" },
      { power: 0, value: 1, label: "LSB" }
    ];
    this.presets = [
      { label: "1 + 1", a: 1, b: 1, description: "Simplest carry case" },
      { label: "3 + 5", a: 3, b: 5, description: "Basic addition" },
      { label: "7 + 8", a: 7, b: 8, description: "Across nibble boundary" },
      { label: "9 + 6", a: 9, b: 6, description: "Multiple carries" },
      { label: "15 + 1", a: 15, b: 1, description: "Carry ripple across 4 bits" },
      { label: "127+1", a: 127, b: 1, description: "Max half-byte" }
    ];
  }
  // ── Step navigation ──────────────────────────────────────────
  nextStep() {
    this.activeStep.update((s) => Math.min(s + 1, this.steps().length - 1));
  }
  prevStep() {
    this.activeStep.update((s) => Math.max(s - 1, 0));
  }
  resetSteps() {
    this.activeStep.set(0);
  }
  loadPreset(p) {
    this.numA.set(p.a);
    this.numB.set(p.b);
    this.activeStep.set(0);
  }
  static {
    this.\u0275fac = function BinaryBasicsComponent_Factory(t) {
      return new (t || _BinaryBasicsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BinaryBasicsComponent, selectors: [["app-binary-basics"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 122, vars: 11, consts: [[1, "page", "fade-in"], [1, "section-header"], [1, "label"], [1, "card", "input-panel"], [1, "inputs-row"], [1, "num-field"], ["type", "number", "min", "0", "max", "255", 1, "num-input", 3, "ngModelChange", "ngModel"], [1, "binary-preview"], [1, "bit", 3, "bit-1", "bit-0"], [1, "op-sign"], [1, "num-field", "result-field"], [1, "result-dec"], [1, "overflow-warn"], [1, "presets"], [1, "text-xs", "text-muted"], [1, "preset-chips"], [1, "preset-chip", 3, "active"], [1, "two-col"], [1, "card", "conv-card"], [1, "conv-steps"], [1, "mono", "text-sm"], [1, "card"], [1, "mt-2", "mb-4"], [1, "bit-positions"], [1, "pos-cell"], [1, "card-header-row"], [1, "step-controls"], [1, "btn", "btn-ghost", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-ghost", "btn-sm", 3, "click"], [1, "addition-table"], [1, "add-row", "header-row"], [1, "add-label"], [1, "add-cell", "pos-head"], [1, "add-row", "carry-row"], [1, "add-cell", 3, "active-col", "bit-1", "bit-0"], [1, "add-cell"], [1, "add-row", "a-row"], [1, "add-row", "b-row"], [1, "add-separator"], [1, "add-row", "sum-row"], [1, "add-cell", "sum-cell", 3, "active-col", "revealed", "bit-1", "bit-0"], [1, "step-detail", "explanation-box"], [1, "explanation-box"], [1, "icon"], [1, "bit"], [1, "preset-chip", 3, "click"], [1, "pos-power"], [1, "pos-value"], [1, "pos-label"], [1, "add-cell", "sum-cell"], [1, "step-detail-grid"], [1, "sd-field"], [1, "sd-label"], [1, "sd-value", "accent"], [1, "step-explanation", "mt-3"]], template: function BinaryBasicsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Layer 1 & 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Binary Basics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Enter two decimal numbers and see how they are converted to binary, then added bit by bit.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "label");
        \u0275\u0275text(12, "Number A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 6);
        \u0275\u0275listener("ngModelChange", function BinaryBasicsComponent_Template_input_ngModelChange_13_listener($event) {
          return ctx.numA.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7);
        \u0275\u0275repeaterCreate(15, BinaryBasicsComponent_For_16_Template, 2, 5, "span", 8, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275text(18, "+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 5)(20, "label");
        \u0275\u0275text(21, "Number B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "input", 6);
        \u0275\u0275listener("ngModelChange", function BinaryBasicsComponent_Template_input_ngModelChange_22_listener($event) {
          return ctx.numB.set($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 7);
        \u0275\u0275repeaterCreate(24, BinaryBasicsComponent_For_25_Template, 2, 5, "span", 8, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 9);
        \u0275\u0275text(27, "=");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 10)(29, "label");
        \u0275\u0275text(30, "Result");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 11);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 7);
        \u0275\u0275repeaterCreate(34, BinaryBasicsComponent_For_35_Template, 2, 5, "span", 8, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, BinaryBasicsComponent_Conditional_36_Template, 2, 0, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 13)(38, "span", 14);
        \u0275\u0275text(39, "Quick examples:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 15);
        \u0275\u0275repeaterCreate(41, BinaryBasicsComponent_For_42_Template, 2, 3, "button", 16, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 17)(44, "div", 18)(45, "h3");
        \u0275\u0275text(46);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ol", 19);
        \u0275\u0275repeaterCreate(48, BinaryBasicsComponent_For_49_Template, 2, 1, "li", 20, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 18)(51, "h3");
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "ol", 19);
        \u0275\u0275repeaterCreate(54, BinaryBasicsComponent_For_55_Template, 2, 1, "li", 20, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 21)(57, "h3");
        \u0275\u0275text(58, "Bit position values");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p", 22);
        \u0275\u0275text(60, "Each bit position represents a power of 2. The ");
        \u0275\u0275elementStart(61, "strong");
        \u0275\u0275text(62, "rightmost");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " bit is the Least Significant Bit (LSB = 2\u2070 = 1), the leftmost is the Most Significant Bit (MSB = 2\u2077 = 128).");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div", 23);
        \u0275\u0275repeaterCreate(65, BinaryBasicsComponent_For_66_Template, 9, 3, "div", 24, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 21)(68, "div", 25)(69, "h3");
        \u0275\u0275text(70, "Bit-by-bit addition");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 26)(72, "button", 27);
        \u0275\u0275listener("click", function BinaryBasicsComponent_Template_button_click_72_listener() {
          return ctx.prevStep();
        });
        \u0275\u0275text(73, "\u25C0 Prev");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 28);
        \u0275\u0275listener("click", function BinaryBasicsComponent_Template_button_click_74_listener() {
          return ctx.nextStep();
        });
        \u0275\u0275text(75, "Next \u25B6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "button", 29);
        \u0275\u0275listener("click", function BinaryBasicsComponent_Template_button_click_76_listener() {
          return ctx.resetSteps();
        });
        \u0275\u0275text(77, "\u21BA Reset");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 30)(79, "div", 31);
        \u0275\u0275element(80, "div", 32);
        \u0275\u0275repeaterCreate(81, BinaryBasicsComponent_For_82_Template, 2, 1, "div", 33, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 34)(84, "div", 32);
        \u0275\u0275text(85, "Carry");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(86, BinaryBasicsComponent_For_87_Template, 2, 7, "div", 35, _forTrack2);
        \u0275\u0275element(88, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 37)(90, "div", 32);
        \u0275\u0275text(91);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(92, BinaryBasicsComponent_For_93_Template, 2, 7, "div", 35, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "div", 38)(95, "div", 32);
        \u0275\u0275text(96);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(97, BinaryBasicsComponent_For_98_Template, 2, 7, "div", 35, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275element(99, "div", 39);
        \u0275\u0275elementStart(100, "div", 40)(101, "div", 32);
        \u0275\u0275text(102, "Sum");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(103, BinaryBasicsComponent_For_104_Template, 2, 9, "div", 41, _forTrack2);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(105, BinaryBasicsComponent_Conditional_105_Template, 37, 28, "div", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 43)(107, "div", 44);
        \u0275\u0275text(108, "\u{1F4DA}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "h4");
        \u0275\u0275text(110, "What is a carry?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, " In decimal, 9 + 1 = 10 \u2014 the result is two digits, so we write 0 and ");
        \u0275\u0275elementStart(113, "em");
        \u0275\u0275text(114, "carry");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " the 1 into the next column. Binary works the same way: 1 + 1 = 10 in binary (decimal 2). The sum bit is 0 and the carry bit is 1. That carry then feeds into the ");
        \u0275\u0275elementStart(116, "strong");
        \u0275\u0275text(117, "next bit column");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, " to its left \u2014 this is exactly what a ");
        \u0275\u0275elementStart(119, "strong");
        \u0275\u0275text(120, "Full Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275text(121, " handles. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_22_0;
        \u0275\u0275advance(13);
        \u0275\u0275property("ngModel", ctx.numA());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bitsA());
        \u0275\u0275advance(7);
        \u0275\u0275property("ngModel", ctx.numB());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bitsB());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.result());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bitsResult());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(36, ctx.overflow() ? 36 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.presets);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("How ", ctx.numA(), " becomes binary");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.convStepsA());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("How ", ctx.numB(), " becomes binary");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.convStepsB());
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.bitPositions);
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", ctx.activeStep() === 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.activeStep() >= ctx.steps().length - 1);
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.reversedPositions());
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.reversedSteps());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("A = ", ctx.numA(), "");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.bitsA());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("B = ", ctx.numB(), "");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.bitsB());
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.reversedSteps());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(105, (tmp_22_0 = ctx.activeStepData()) ? 105 : -1, tmp_22_0);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.inputs-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n}\n.num-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  label {\n    font-size: 0.8rem;\n    color: var(--text-muted);\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n  }\n}\n.binary-preview[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 0.25rem;\n}\n.op-sign[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  align-self: center;\n  padding-top: 1.2rem;\n}\n.result-field[_ngcontent-%COMP%]   .result-dec[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--sig-high);\n  text-shadow: var(--sig-high-glow);\n}\n.overflow-warn[_ngcontent-%COMP%] {\n  color: var(--warning);\n  font-size: 0.78rem;\n  margin-top: 0.25rem;\n}\n.presets[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 1rem;\n  flex-wrap: wrap;\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 640px) {\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.conv-steps[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin-top: 0.75rem;\n}\n.conv-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.82rem;\n}\n.bit-positions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 4px;\n}\n.pos-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.5rem 0.25rem;\n  background: var(--bg-input);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius-sm);\n}\n.pos-power[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  font-family: var(--font-code);\n}\n.pos-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--accent);\n  font-family: var(--font-code);\n}\n.pos-label[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.card-header-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.step-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.addition-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n}\n.add-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  min-width: max-content;\n}\n.add-label[_ngcontent-%COMP%] {\n  width: 100px;\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  text-align: right;\n  padding-right: 0.75rem;\n  flex-shrink: 0;\n}\n.add-cell[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-code);\n  font-size: 1rem;\n  font-weight: 600;\n  border: 1px solid var(--border-subtle);\n  margin: 2px;\n  border-radius: var(--radius-sm);\n  transition: all 250ms;\n  &.active-col {\n    background: var(--accent-dim);\n    border-color: var(--accent);\n    box-shadow: 0 0 8px var(--accent-dim);\n  }\n  &.bit-1 {\n    color: var(--sig-high);\n  }\n  &.bit-0 {\n    color: var(--text-muted);\n  }\n  &.pos-head {\n    font-size: 0.65rem;\n    color: var(--text-muted);\n    height: 1.5rem;\n    border: none;\n    background: transparent;\n  }\n}\n.carry-row[_ngcontent-%COMP%]   .add-cell[_ngcontent-%COMP%] {\n  background: #1a2500;\n  font-size: 0.85rem;\n}\n.sum-cell.revealed.bit-1[_ngcontent-%COMP%] {\n  background: #00ff8811;\n  border-color: var(--sig-high);\n}\n.sum-cell[_ngcontent-%COMP%]:not(.revealed) {\n  color: var(--text-muted);\n}\n.add-separator[_ngcontent-%COMP%] {\n  height: 2px;\n  background: var(--border-default);\n  margin: 4px 0 4px 108px;\n}\n.step-detail-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.sd-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.sd-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.sd-value[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  color: var(--accent);\n  font-weight: 700;\n}\n.accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.step-explanation[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-secondary);\n}\n/*# sourceMappingURL=binary-basics.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BinaryBasicsComponent, { className: "BinaryBasicsComponent", filePath: "src\\app\\features\\binary-basics\\binary-basics.component.ts", lineNumber: 358 });
})();
export {
  BinaryBasicsComponent
};
//# sourceMappingURL=chunk-6MPHZ3FJ.js.map
