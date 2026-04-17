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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GW2HLFSL.js";

// src/app/core/models/index.ts
var SPEED_MS = {
  1: 2e3,
  2: 1200,
  3: 700,
  4: 350,
  5: 120
};

// src/app/features/ripple-carry/ripple-carry.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.position;
function RippleCarryComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "\u26A0 OVERFLOW");
    \u0275\u0275elementEnd();
  }
}
function RippleCarryComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function RippleCarryComponent_For_41_Template_button_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadPreset(p_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.numA() === p_r2.a && ctx_r2.numB() === p_r2.b);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.label);
  }
}
function RippleCarryComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 48);
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", step_r4.position === ctx_r2.activeStep())("done", step_r4.position < ctx_r2.activeStep());
    \u0275\u0275property("title", "Bit " + step_r4.position);
  }
}
function RippleCarryComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 49);
    \u0275\u0275text(2, "Cout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275text(4, "1");
    \u0275\u0275elementEnd()();
  }
}
function RippleCarryComponent_For_72_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1, " \u2190 ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("arrow-active", step_r5.position <= ctx_r2.activeStep() && step_r5.carryOut === 1);
  }
}
function RippleCarryComponent_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3, "Cin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 55)(7, "div", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 57)(10, "div", 58);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 58);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 59);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 60)(17, "div", 54);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 53);
    \u0275\u0275text(20, "Cout");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, RippleCarryComponent_For_72_Conditional_21_Template, 2, 2, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("fa-active", step_r5.position === ctx_r2.activeStep())("fa-done", step_r5.position < ctx_r2.activeStep());
    \u0275\u0275advance();
    \u0275\u0275classProp("pin-active", step_r5.carryIn === 1);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("carry-val", step_r5.carryIn === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r5.position < ctx_r2.activeStep() || step_r5.position === ctx_r2.activeStep() ? step_r5.carryIn : "?");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("FA ", step_r5.position, "");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bit-hi", step_r5.aBit === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" A=", step_r5.position <= ctx_r2.activeStep() ? step_r5.aBit : "?", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("bit-hi", step_r5.bBit === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" B=", step_r5.position <= ctx_r2.activeStep() ? step_r5.bBit : "?", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("sum-active", step_r5.position <= ctx_r2.activeStep() && step_r5.sum === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" S=", step_r5.position <= ctx_r2.activeStep() ? step_r5.sum : "?", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("pin-active", step_r5.position < ctx_r2.activeStep() && step_r5.carryOut === 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("carry-val", step_r5.carryOut === 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r5.position < ctx_r2.activeStep() ? step_r5.carryOut : "?");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(21, step_r5.position > 0 ? 21 : -1);
  }
}
function RippleCarryComponent_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r6 = ctx.$implicit;
    const $index_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bit-1", bit_r6 === 1)("bit-0", bit_r6 === 0)("bit-active", ctx_r2.bits() - 1 - $index_r7 === ctx_r2.activeStep());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bit_r6);
  }
}
function RippleCarryComponent_For_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r8 = ctx.$implicit;
    const $index_r9 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bit-1", bit_r8 === 1)("bit-0", bit_r8 === 0)("bit-active", ctx_r2.bits() - 1 - $index_r9 === ctx_r2.activeStep());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bit_r8);
  }
}
function RippleCarryComponent_For_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bit_r10 = ctx.$implicit;
    const $index_r11 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bit-1", bit_r10 === 1)("bit-0", bit_r10 === 0)("bit-revealed", ctx_r2.bits() - 1 - $index_r11 <= ctx_r2.activeStep());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.bits() - 1 - $index_r11 <= ctx_r2.activeStep() ? bit_r10 : "?", " ");
  }
}
function RippleCarryComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentStepExplanation(), " ");
  }
}
var RippleCarryComponent = class _RippleCarryComponent {
  constructor() {
    this.binarySvc = inject(BinaryService);
    this.bits = signal(4);
    this.numA = signal(5);
    this.numB = signal(3);
    this.activeStep = signal(-1);
    this.isPlaying = signal(false);
    this.speed = signal(2);
    this.speedLabels = {
      1: "Slow",
      2: "Normal",
      3: "Fast",
      4: "Faster",
      5: "Turbo"
    };
    this._timer = null;
    this.maxVal = computed(() => Math.pow(2, this.bits()) - 1);
    this.steps = computed(() => this.binarySvc.computeRippleCarry(this.numA(), this.numB(), this.bits()));
    this.displaySteps = computed(() => [...this.steps()].reverse());
    this.result = computed(() => this.steps().reduce((acc, s, i) => acc + s.sum * Math.pow(2, i), 0));
    this.overflow = computed(() => this.numA() + this.numB() > this.maxVal());
    this.displayResult = computed(() => this.overflow() ? `${this.result()} (overflow!)` : this.result().toString());
    this.bitsA = computed(() => this.binarySvc.getBitsMSBFirst(this.numA(), this.bits()));
    this.bitsB = computed(() => this.binarySvc.getBitsMSBFirst(this.numB(), this.bits()));
    this.bitsResult = computed(() => this.binarySvc.getBitsMSBFirst(this.result() & this.maxVal(), this.bits()));
    this.currentStepExplanation = computed(() => {
      const i = this.activeStep();
      const s = this.steps()[i];
      if (!s)
        return "";
      const total = s.aBit + s.bBit + s.carryIn;
      return `Bit ${s.position} (value ${Math.pow(2, s.position)}): A=${s.aBit}, B=${s.bBit}, Carry-In=${s.carryIn} \u2192 Total=${total}. Sum=${s.sum}, Carry-Out=${s.carryOut}. ` + (s.carryOut === 1 ? `\u26A1 Carry ripples to bit ${s.position + 1}!` : "No carry generated.");
    });
    this.presets = [
      { label: "1+1", a: 1, b: 1, description: "" },
      { label: "3+5", a: 3, b: 5, description: "" },
      { label: "7+8", a: 7, b: 8, description: "" },
      { label: "9+6", a: 9, b: 6, description: "" },
      { label: "15+1", a: 15, b: 1, description: "" },
      { label: "100+56", a: 100, b: 56, description: "" }
    ];
  }
  // ── Controls ─────────────────────────────────────────────────
  setBits(n) {
    this.bits.set(n);
    this.resetAnim();
    const max = Math.pow(2, n) - 1;
    if (this.numA() > max)
      this.numA.set(max);
    if (this.numB() > max)
      this.numB.set(max);
  }
  setA(v) {
    this.numA.set(Math.max(0, Math.min(v, this.maxVal())));
    this.resetAnim();
  }
  setB(v) {
    this.numB.set(Math.max(0, Math.min(v, this.maxVal())));
    this.resetAnim();
  }
  loadPreset(p) {
    this.numA.set(p.a);
    this.numB.set(p.b);
    this.resetAnim();
  }
  // ── Animation ────────────────────────────────────────────────
  togglePlay() {
    if (this.isPlaying()) {
      this._pause();
    } else {
      this._play();
    }
  }
  stepForward() {
    const max = this.steps().length - 1;
    this.activeStep.update((s) => Math.min(s + 1, max));
  }
  stepBack() {
    this.activeStep.update((s) => Math.max(s - 1, -1));
  }
  resetAnim() {
    this._pause();
    this.activeStep.set(-1);
  }
  setSpeed(e) {
    this.speed.set(+e.target.value);
  }
  _play() {
    if (this.activeStep() >= this.steps().length - 1) {
      this.activeStep.set(-1);
    }
    this.isPlaying.set(true);
    this._tick();
  }
  _pause() {
    this.isPlaying.set(false);
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }
  _tick() {
    const ms = SPEED_MS[this.speed()];
    this._timer = setTimeout(() => {
      const next = this.activeStep() + 1;
      if (next >= this.steps().length) {
        this.isPlaying.set(false);
        return;
      }
      this.activeStep.set(next);
      if (this.isPlaying())
        this._tick();
    }, ms);
  }
  ngOnDestroy() {
    this._pause();
  }
  static {
    this.\u0275fac = function RippleCarryComponent_Factory(t) {
      return new (t || _RippleCarryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RippleCarryComponent, selectors: [["app-ripple-carry"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 107, vars: 29, consts: [[1, "page", "fade-in"], [1, "section-header"], [1, "label"], [1, "card", "controls-card"], [1, "controls-row"], [1, "ctrl-group"], [1, "ctrl-label"], [1, "bit-mode-btns"], [1, "btn", "btn-sm", 3, "click"], ["type", "number", "min", "0", 1, "num-input", 3, "ngModelChange", "max", "ngModel"], [1, "ctrl-plus"], [1, "ctrl-equals"], [1, "ctrl-group", "result-group"], [1, "result-dec"], [1, "overflow-label"], [1, "presets-row"], [1, "text-xs", "text-muted"], [1, "preset-chips"], [1, "preset-chip", 3, "active"], [1, "card", "anim-controls"], [1, "anim-row"], ["title", "Step back", 1, "btn", "btn-ghost", "btn-icon", 3, "click", "disabled"], [1, "btn", "btn-primary", "play-btn", 3, "click"], ["title", "Step forward", 1, "btn", "btn-ghost", "btn-icon", 3, "click", "disabled"], ["title", "Reset", 1, "btn", "btn-ghost", "btn-icon", 3, "click"], [1, "speed-row"], ["type", "range", "min", "1", "max", "5", "step", "1", 2, "width", "80px", 3, "input", "value"], [1, "text-xs", "text-accent"], [1, "step-indicator"], [1, "step-dot", 3, "active", "done", "title"], [1, "card", "chain-card"], [1, "chain-header"], [1, "adder-chain"], [1, "overflow-box"], [1, "fa-block", 3, "fa-active", "fa-done"], [1, "card", "binary-display-card"], [1, "bin-table"], [1, "bin-row"], [1, "bin-label"], [1, "bin-bits"], [1, "bin-bit", 3, "bit-1", "bit-0", "bit-active"], [1, "bin-separator"], [1, "bin-row", "result-row"], [1, "bin-bit", "result-bit", 3, "bit-1", "bit-0", "bit-revealed"], [1, "step-explain", "explanation-box", "mt-3"], [1, "explanation-box"], [1, "icon"], [1, "preset-chip", 3, "click"], [1, "step-dot", 3, "title"], [1, "overflow-arrow"], [1, "ov-val", "carry-val"], [1, "fa-block"], [1, "carry-pin", "top-pin"], [1, "pin-label"], [1, "pin-val"], [1, "fa-body"], [1, "fa-title"], [1, "fa-inputs"], [1, "fa-input-bit"], [1, "fa-output-sum"], [1, "carry-pin", "bot-pin"], [1, "ripple-arrow", 3, "arrow-active"], [1, "ripple-arrow"], [1, "bin-bit"], [1, "bin-bit", "result-bit"]], template: function RippleCarryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Layer 6 \u2014 Ripple Carry Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Ripple Carry Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " Chain multiple full adders together. Each adder hands its carry output to the next one \u2014 that rippling effect is what gives this circuit its name. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "Bit Width");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7)(14, "button", 8);
        \u0275\u0275listener("click", function RippleCarryComponent_Template_button_click_14_listener() {
          return ctx.setBits(4);
        });
        \u0275\u0275text(15, "4-bit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 8);
        \u0275\u0275listener("click", function RippleCarryComponent_Template_button_click_16_listener() {
          return ctx.setBits(8);
        });
        \u0275\u0275text(17, "8-bit");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 5)(19, "label", 6);
        \u0275\u0275text(20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "input", 9);
        \u0275\u0275listener("ngModelChange", function RippleCarryComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.setA($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 10);
        \u0275\u0275text(23, "+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 5)(25, "label", 6);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 9);
        \u0275\u0275listener("ngModelChange", function RippleCarryComponent_Template_input_ngModelChange_27_listener($event) {
          return ctx.setB($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 11);
        \u0275\u0275text(29, "=");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 12)(31, "label", 6);
        \u0275\u0275text(32, "Result");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 13);
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, RippleCarryComponent_Conditional_35_Template, 2, 0, "span", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 15)(37, "span", 16);
        \u0275\u0275text(38, "Examples:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 17);
        \u0275\u0275repeaterCreate(40, RippleCarryComponent_For_41_Template, 2, 3, "button", 18, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 19)(43, "div", 20)(44, "button", 21);
        \u0275\u0275listener("click", function RippleCarryComponent_Template_button_click_44_listener() {
          return ctx.stepBack();
        });
        \u0275\u0275text(45, "\u23EE");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 22);
        \u0275\u0275listener("click", function RippleCarryComponent_Template_button_click_46_listener() {
          return ctx.togglePlay();
        });
        \u0275\u0275text(47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 23);
        \u0275\u0275listener("click", function RippleCarryComponent_Template_button_click_48_listener() {
          return ctx.stepForward();
        });
        \u0275\u0275text(49, "\u23ED");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 24);
        \u0275\u0275listener("click", function RippleCarryComponent_Template_button_click_50_listener() {
          return ctx.resetAnim();
        });
        \u0275\u0275text(51, "\u21BA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 25)(53, "span", 16);
        \u0275\u0275text(54, "Speed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "input", 26);
        \u0275\u0275listener("input", function RippleCarryComponent_Template_input_input_55_listener($event) {
          return ctx.setSpeed($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span", 27);
        \u0275\u0275text(57);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 28);
        \u0275\u0275repeaterCreate(59, RippleCarryComponent_For_60_Template, 1, 5, "div", 29, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 30)(62, "div", 31)(63, "span", 16);
        \u0275\u0275text(64, "\u2190 MSB");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "h3");
        \u0275\u0275text(66);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 16);
        \u0275\u0275text(68, "LSB \u2192");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 32);
        \u0275\u0275template(70, RippleCarryComponent_Conditional_70_Template, 5, 0, "div", 33);
        \u0275\u0275repeaterCreate(71, RippleCarryComponent_For_72_Template, 22, 25, "div", 34, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 35)(74, "h3");
        \u0275\u0275text(75, "Binary addition \u2014 column by column");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 36)(77, "div", 37)(78, "span", 38);
        \u0275\u0275text(79);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 39);
        \u0275\u0275repeaterCreate(81, RippleCarryComponent_For_82_Template, 2, 7, "span", 40, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "div", 37)(84, "span", 38);
        \u0275\u0275text(85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 39);
        \u0275\u0275repeaterCreate(87, RippleCarryComponent_For_88_Template, 2, 7, "span", 40, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(89, "div", 41);
        \u0275\u0275elementStart(90, "div", 42)(91, "span", 38);
        \u0275\u0275text(92);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 39);
        \u0275\u0275repeaterCreate(94, RippleCarryComponent_For_95_Template, 2, 7, "span", 43, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(96, RippleCarryComponent_Conditional_96_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 45)(98, "div", 46);
        \u0275\u0275text(99, "\u{1F30A}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "h4");
        \u0275\u0275text(101, 'Why "Ripple" Carry?');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "p");
        \u0275\u0275text(103, " Each full adder must wait for the carry from the adder to its right before it can produce its own sum and carry. In the worst case (e.g., adding 0111\u20261 + 0000\u20261), the carry ripples all the way from bit 0 to bit N\u22121. This makes ripple-carry adders simple but slow for wide word sizes. Modern CPUs use ");
        \u0275\u0275elementStart(104, "em");
        \u0275\u0275text(105, "carry-lookahead");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, " adders that compute carries in parallel. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275classProp("btn-primary", ctx.bits() === 4)("btn-ghost", ctx.bits() !== 4);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("btn-primary", ctx.bits() === 8)("btn-ghost", ctx.bits() !== 8);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Number A (0\u2013", ctx.maxVal(), ")");
        \u0275\u0275advance();
        \u0275\u0275property("max", ctx.maxVal())("ngModel", ctx.numA());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("Number B (0\u2013", ctx.maxVal(), ")");
        \u0275\u0275advance();
        \u0275\u0275property("max", ctx.maxVal())("ngModel", ctx.numB());
        \u0275\u0275advance(6);
        \u0275\u0275classProp("overflow", ctx.overflow());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.displayResult());
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.overflow() ? 35 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.presets);
        \u0275\u0275advance(4);
        \u0275\u0275property("disabled", ctx.activeStep() <= -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.isPlaying() ? "\u23F8 Pause" : "\u25B6 Play Animation", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.activeStep() >= ctx.steps().length - 1);
        \u0275\u0275advance(7);
        \u0275\u0275property("value", ctx.speed());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.speedLabels[ctx.speed()]);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.steps());
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("Full Adder Chain (", ctx.bits(), "-bit)");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(70, ctx.overflow() ? 70 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.displaySteps());
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("A = ", ctx.numA(), "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bitsA());
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("B = ", ctx.numB(), "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bitsB());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("= ", ctx.displayResult(), "");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.bitsResult());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(96, ctx.activeStep() >= 0 && ctx.activeStep() < ctx.steps().length ? 96 : -1);
      }
    }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.controls-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.controls-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 1.25rem;\n}\n.ctrl-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.ctrl-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.bit-mode-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.35rem;\n}\n.ctrl-plus[_ngcontent-%COMP%], .ctrl-equals[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  align-self: center;\n  padding-bottom: 0.1rem;\n}\n.result-group[_ngcontent-%COMP%]   .result-dec[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--sig-high);\n  min-width: 4rem;\n  &.overflow {\n    color: var(--error);\n  }\n}\n.overflow-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--warning);\n}\n.presets-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.anim-controls[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.anim-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.play-btn[_ngcontent-%COMP%] {\n  min-width: 9rem;\n  justify-content: center;\n}\n.speed-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-left: auto;\n}\n.chain-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.chain-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.adder-chain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: stretch;\n  gap: 0;\n  overflow-x: auto;\n  padding-bottom: 0.5rem;\n}\n.overflow-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0 0.5rem;\n  .overflow-arrow {\n    font-size: 0.65rem;\n    color: var(--sig-carry);\n  }\n}\n.fa-block[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 80px;\n  border: 1.5px solid var(--border-subtle);\n  border-radius: var(--radius);\n  margin: 2px;\n  background: var(--bg-card);\n  transition:\n    border-color 250ms,\n    background 250ms,\n    box-shadow 250ms;\n  &.fa-active {\n    border-color: var(--accent);\n    background: var(--accent-dim);\n    box-shadow: 0 0 16px var(--accent-dim);\n  }\n  &.fa-done {\n    border-color: var(--success);\n    background: #10b98108;\n  }\n}\n.carry-pin[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n  padding: 0.3rem 0.4rem;\n  width: 100%;\n  &.top-pin {\n    border-bottom: 1px solid var(--border-subtle);\n  }\n  &.bot-pin {\n    border-top: 1px solid var(--border-subtle);\n  }\n  &.pin-active {\n    background: #f59e0b11;\n  }\n}\n.pin-label[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: var(--text-muted);\n}\n.pin-val[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: var(--text-muted);\n  &.carry-val {\n    color: var(--sig-carry);\n    text-shadow: var(--sig-carry-glow);\n  }\n}\n.fa-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.5rem 0.4rem;\n  gap: 0.35rem;\n  flex: 1;\n}\n.fa-title[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n.fa-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.fa-input-bit[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.78rem;\n  padding: 0.1rem 0.3rem;\n  border-radius: var(--radius-sm);\n  background: var(--bg-input);\n  border: 1px solid var(--border-subtle);\n  color: var(--text-muted);\n  &.bit-hi {\n    color: var(--sig-high);\n    border-color: var(--sig-high);\n  }\n}\n.fa-output-sum[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.95rem;\n  font-weight: 700;\n  padding: 0.2rem 0.5rem;\n  border-radius: var(--radius-sm);\n  border: 1.5px solid var(--border-default);\n  color: var(--text-muted);\n  transition: all 250ms;\n  &.sum-active {\n    color: var(--sig-high);\n    border-color: var(--sig-high);\n    background: #00ff8811;\n    box-shadow: var(--sig-high-glow);\n  }\n}\n.ripple-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -18px;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 1.1rem;\n  color: var(--text-muted);\n  transition: color 250ms;\n  &.arrow-active {\n    color: var(--sig-carry);\n    text-shadow: var(--sig-carry-glow);\n  }\n}\n.bin-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  margin-top: 0.75rem;\n}\n.bin-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.bin-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  width: 90px;\n  text-align: right;\n  font-family: var(--font-code);\n}\n.bin-bits[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n.bin-bit[_ngcontent-%COMP%] {\n  width: 2.2rem;\n  height: 2.2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: var(--font-code);\n  font-size: 1rem;\n  font-weight: 700;\n  border: 1.5px solid var(--border-subtle);\n  border-radius: var(--radius-sm);\n  color: var(--text-muted);\n  transition: all 250ms;\n  &.bit-active {\n    border-color: var(--accent);\n    background: var(--accent-dim);\n    color: var(--text-primary);\n  }\n  &.bit-1 {\n    color: var(--sig-high);\n  }\n}\n.bin-separator[_ngcontent-%COMP%] {\n  height: 2px;\n  background: var(--border-default);\n  margin: 4px 0 4px 98px;\n}\n.result-bit[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  &.bit-revealed.bit-1 {\n    color: var(--sig-high);\n    background: #00ff8808;\n    border-color: var(--sig-high);\n  }\n  &.bit-revealed.bit-0 {\n    color: var(--text-secondary);\n  }\n}\n.result-row[_ngcontent-%COMP%]   .bin-label[_ngcontent-%COMP%] {\n  color: var(--sig-high);\n  font-weight: 700;\n}\n.step-explain[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n/*# sourceMappingURL=ripple-carry.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RippleCarryComponent, { className: "RippleCarryComponent", filePath: "src\\app\\features\\ripple-carry\\ripple-carry.component.ts", lineNumber: 378 });
})();
export {
  RippleCarryComponent
};
//# sourceMappingURL=chunk-NII273PP.js.map
