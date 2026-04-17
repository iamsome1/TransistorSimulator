import {
  ExplanationPanelComponent
} from "./chunk-DC47JGN6.js";
import {
  TruthTableComponent
} from "./chunk-QGOD2MD2.js";
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
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate6
} from "./chunk-GW2HLFSL.js";

// src/app/features/full-adder/full-adder.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _c0 = (a0, a1, a2) => [a0, a1, a2];
function FullAdderComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 76);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 77)(4, "input", 78);
    \u0275\u0275listener("change", function FullAdderComponent_For_21_Template_input_change_4_listener() {
      const inp_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleInput(inp_r2.key));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 80);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const inp_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("carry-name", inp_r2.key === "cin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(inp_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.getInput(inp_r2.key) === 1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bit-1", ctx_r2.getInput(inp_r2.key) === 1)("bit-0", ctx_r2.getInput(inp_r2.key) === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.getInput(inp_r2.key), " ");
  }
}
var FullAdderComponent = class _FullAdderComponent {
  constructor() {
    this.binarySvc = inject(BinaryService);
    this.a = signal(0);
    this.b = signal(0);
    this.cin = signal(0);
    this.state = computed(() => this.binarySvc.buildFullAdderState(this.a(), this.b(), this.cin()));
    this.truthTable = computed(() => this.binarySvc.generateFullAdderTruthTable());
    this.inputDefs = [
      { key: "a", label: "A" },
      { key: "b", label: "B" },
      { key: "cin", label: "Cin" }
    ];
    this.explanationSteps = [
      {
        id: 1,
        title: "Three inputs: A, B, Carry-In",
        body: "Unlike a half adder, a full adder accepts a carry from the previous bit column. This makes it suitable for chaining in a multi-bit adder."
      },
      {
        id: 2,
        title: "Half Adder 1 processes A and B",
        body: "HA1 computes XOR(A,B) \u2192 intermediate sum, and AND(A,B) \u2192 first carry candidate."
      },
      {
        id: 3,
        title: "Half Adder 2 adds Carry-In",
        body: "HA2 takes the intermediate sum from HA1 and adds Carry-In. XOR gives the final Sum bit; AND gives the second carry candidate."
      },
      {
        id: 4,
        title: "OR gate combines the two carries",
        body: "Carry-Out = OR(HA1 carry, HA2 carry). If either half adder generated a carry, the full adder propagates it forward."
      },
      {
        id: 5,
        title: "Why two half adders + OR?",
        body: "The two-stage design elegantly handles all 8 input combinations (A,B,Cin). It uses ~28 transistors in CMOS \u2014 still tiny on a modern chip."
      }
    ];
  }
  getInput(key) {
    if (key === "a")
      return this.a();
    if (key === "b")
      return this.b();
    if (key === "cin")
      return this.cin();
    return 0;
  }
  toggleInput(key) {
    if (key === "a")
      this.a.update((v) => v === 0 ? 1 : 0);
    if (key === "b")
      this.b.update((v) => v === 0 ? 1 : 0);
    if (key === "cin")
      this.cin.update((v) => v === 0 ? 1 : 0);
  }
  wireCls(v, carry = false) {
    if (v === 1)
      return carry ? "wire wire--carry wire--flowing" : "wire wire--high wire--flowing";
    return "wire";
  }
  dotCls(v) {
    return `signal-dot signal-dot--${v === 1 ? "high" : "low"}`;
  }
  gateCls(out) {
    return `gate-body${out === 1 ? " gate-body--active" : ""}`;
  }
  static {
    this.\u0275fac = function FullAdderComponent_Factory(t) {
      return new (t || _FullAdderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullAdderComponent, selectors: [["app-full-adder"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 170, vars: 116, consts: [[1, "page", "fade-in"], [1, "section-header"], [1, "label"], [1, "main-layout"], [1, "left-col"], [1, "card"], [1, "input-toggles"], [1, "input-row"], [1, "output-row"], [1, "out-field"], [1, "out-label"], [1, "out-val"], [1, "out-sub", "mono", "text-xs"], [1, "out-val", "carry"], [1, "equation", "mt-3", "mono", "text-sm"], [1, "stage-list"], [1, "stage"], [1, "stage-badge"], [1, "stage-detail"], [1, "mono"], [1, "stage-arrow"], [1, "stage-badge", "or-badge"], [3, "table", "activeInputs"], [1, "right-col"], [1, "card", "circuit-card"], [1, "text-xs", "text-muted", "mb-4"], [1, "svg-wrap"], ["viewBox", "0 0 560 300", "aria-label", "Full adder circuit diagram", 1, "circuit-svg"], ["x", "60", "y", "18", 1, "col-label"], ["x", "195", "y", "18", 1, "col-label"], ["x", "355", "y", "18", 1, "col-label"], ["x", "485", "y", "18", 1, "col-label"], ["x", "8", "y", "73", 1, "sig-label"], ["x", "8", "y", "133", 1, "sig-label"], ["x", "4", "y", "253", 1, "sig-label"], ["cx", "30", "cy", "70", "r", "5"], ["cx", "30", "cy", "130", "r", "5"], ["cx", "30", "cy", "250", "r", "5"], ["points", "30,70 88,70 88,62 150,62"], ["points", "88,70 88,132 150,132"], ["cx", "88", "cy", "70", "r", "3"], ["points", "30,130 108,130 108,82 150,82"], ["points", "108,130 108,152 150,152"], ["cx", "108", "cy", "130", "r", "3"], ["d", "M 155 52 Q 168 52 200 72 Q 168 92 155 92 Q 165 72 155 52 Z"], ["d", "M 149 52 Q 159 72 149 92", "fill", "none", "stroke-width", "1.5"], ["x", "183", "y", "76", 1, "gate-txt"], ["d", "M 155 122 L 178 122 Q 200 122 200 142 Q 200 162 178 162 L 155 162 Z"], ["x", "180", "y", "146", 1, "gate-txt"], ["x1", "200", "y1", "72", "x2", "310", "y2", "72"], ["points", "200,142 260,142 260,220 310,220"], ["points", "310,72 340,72 340,132 310,132 310,72", "fill", "none"], ["points", "310,72 340,72 340,62 370,62"], ["points", "340,72 340,132 370,132"], ["cx", "340", "cy", "72", "r", "3"], ["points", "30,250 280,250 280,82 370,82"], ["points", "280,250 280,152 370,152"], ["cx", "280", "cy", "250", "r", "3"], ["d", "M 375 52 Q 388 52 420 72 Q 388 92 375 92 Q 385 72 375 52 Z"], ["d", "M 369 52 Q 379 72 369 92", "fill", "none", "stroke-width", "1.5"], ["x", "403", "y", "76", 1, "gate-txt"], ["d", "M 375 122 L 398 122 Q 420 122 420 142 Q 420 162 398 162 L 375 162 Z"], ["x", "400", "y", "146", 1, "gate-txt"], ["points", "420,142 450,142 450,232 460,232"], ["d", "M 460 208 Q 472 208 500 220 Q 472 232 460 232 Q 470 220 460 208 Z"], ["x", "482", "y", "224", 1, "gate-txt"], ["x1", "420", "y1", "72", "x2", "540", "y2", "72"], ["x", "545", "y", "76", 1, "sig-label"], ["x1", "500", "y1", "220", "x2", "540", "y2", "220"], ["x", "545", "y", "224", 1, "sig-label"], ["x", "142", "y", "28", "width", "70", "height", "150", "fill", "none", "stroke", "var(--border-subtle)", "stroke-width", "1", "stroke-dasharray", "4 3", "rx", "6"], ["x", "177", "y", "188", 1, "block-label"], ["x", "362", "y", "28", "width", "70", "height", "150", "fill", "none", "stroke", "var(--border-subtle)", "stroke-width", "1", "stroke-dasharray", "4 3", "rx", "6"], ["x", "397", "y", "188", 1, "block-label"], [1, "insight-box"], ["title", "How the Full Adder works", 3, "steps", "activeStep"], [1, "input-name"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked"], [1, "track"], [1, "bit"]], template: function FullAdderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Layer 5 \u2014 Full Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Full Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " A full adder adds ");
        \u0275\u0275elementStart(8, "strong");
        \u0275\u0275text(9, "three bits");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, ": A, B, and a ");
        \u0275\u0275elementStart(11, "strong");
        \u0275\u0275text(12, "Carry-In");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " from the previous bit column. Internally it is two half adders joined by an OR gate. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 3)(15, "div", 4)(16, "div", 5)(17, "h3");
        \u0275\u0275text(18, "Inputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 6);
        \u0275\u0275repeaterCreate(20, FullAdderComponent_For_21_Template, 8, 9, "div", 7, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 5)(23, "h3");
        \u0275\u0275text(24, "Outputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 8)(26, "div", 9)(27, "span", 10);
        \u0275\u0275text(28, "Sum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 11);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 12);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 9)(34, "span", 10);
        \u0275\u0275text(35, "Carry-Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "span", 13);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span", 12);
        \u0275\u0275text(39, "to next FA");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 14);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 5)(43, "h3");
        \u0275\u0275text(44, "Internal breakdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 15)(46, "div", 16)(47, "div", 17);
        \u0275\u0275text(48, "HA1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 18)(50, "div");
        \u0275\u0275text(51);
        \u0275\u0275elementStart(52, "strong", 19);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " \u2192 HA2 input");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div");
        \u0275\u0275text(56);
        \u0275\u0275elementStart(57, "strong", 19);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " \u2192 OR input");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "div", 20);
        \u0275\u0275text(61, "\u2193");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 16)(63, "div", 17);
        \u0275\u0275text(64, "HA2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 18)(66, "div");
        \u0275\u0275text(67);
        \u0275\u0275elementStart(68, "strong", 19);
        \u0275\u0275text(69);
        \u0275\u0275elementEnd();
        \u0275\u0275text(70, " \u2192 Sum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div");
        \u0275\u0275text(72);
        \u0275\u0275elementStart(73, "strong", 19);
        \u0275\u0275text(74);
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " \u2192 OR input");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 20);
        \u0275\u0275text(77, "\u2193");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 16)(79, "div", 21);
        \u0275\u0275text(80, "OR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 18)(82, "div");
        \u0275\u0275text(83);
        \u0275\u0275elementStart(84, "strong", 19);
        \u0275\u0275text(85);
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, " \u2192 Carry-Out");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(87, "div", 5)(88, "h3");
        \u0275\u0275text(89, "Truth Table");
        \u0275\u0275elementEnd();
        \u0275\u0275element(90, "app-truth-table", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 23)(92, "div", 24)(93, "h3");
        \u0275\u0275text(94, "Circuit Diagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p", 25);
        \u0275\u0275text(96, " Full Adder = Half Adder 1 + Half Adder 2 + OR gate ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(98, "svg", 27)(99, "text", 28);
        \u0275\u0275text(100, "Inputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "text", 29);
        \u0275\u0275text(102, "HA 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "text", 30);
        \u0275\u0275text(104, "HA 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "text", 31);
        \u0275\u0275text(106, "Outputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "text", 32);
        \u0275\u0275text(108, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "text", 33);
        \u0275\u0275text(110, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "text", 34);
        \u0275\u0275text(112, "Cin");
        \u0275\u0275elementEnd();
        \u0275\u0275element(113, "circle", 35)(114, "circle", 36)(115, "circle", 37)(116, "polyline", 38)(117, "polyline", 39)(118, "circle", 40)(119, "polyline", 41)(120, "polyline", 42)(121, "circle", 43)(122, "path", 44)(123, "path", 45);
        \u0275\u0275elementStart(124, "text", 46);
        \u0275\u0275text(125, "XOR");
        \u0275\u0275elementEnd();
        \u0275\u0275element(126, "path", 47);
        \u0275\u0275elementStart(127, "text", 48);
        \u0275\u0275text(128, "AND");
        \u0275\u0275elementEnd();
        \u0275\u0275element(129, "line", 49)(130, "polyline", 50)(131, "polyline", 51)(132, "polyline", 52)(133, "polyline", 53)(134, "circle", 54)(135, "polyline", 55)(136, "polyline", 56)(137, "circle", 57)(138, "path", 58)(139, "path", 59);
        \u0275\u0275elementStart(140, "text", 60);
        \u0275\u0275text(141, "XOR");
        \u0275\u0275elementEnd();
        \u0275\u0275element(142, "path", 61);
        \u0275\u0275elementStart(143, "text", 62);
        \u0275\u0275text(144, "AND");
        \u0275\u0275elementEnd();
        \u0275\u0275element(145, "polyline", 63)(146, "path", 64);
        \u0275\u0275elementStart(147, "text", 65);
        \u0275\u0275text(148, "OR");
        \u0275\u0275elementEnd();
        \u0275\u0275element(149, "line", 66);
        \u0275\u0275elementStart(150, "text", 67);
        \u0275\u0275text(151);
        \u0275\u0275elementEnd();
        \u0275\u0275element(152, "line", 68);
        \u0275\u0275elementStart(153, "text", 69);
        \u0275\u0275text(154);
        \u0275\u0275elementEnd();
        \u0275\u0275element(155, "rect", 70);
        \u0275\u0275elementStart(156, "text", 71);
        \u0275\u0275text(157, "HA 1");
        \u0275\u0275elementEnd();
        \u0275\u0275element(158, "rect", 72);
        \u0275\u0275elementStart(159, "text", 73);
        \u0275\u0275text(160, "HA 2");
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(161, "div", 74)(162, "strong");
        \u0275\u0275text(163, "\u{1F4A1} Equation:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "span", 19);
        \u0275\u0275text(165);
        \u0275\u0275elementEnd();
        \u0275\u0275element(166, "br");
        \u0275\u0275elementStart(167, "span", 19);
        \u0275\u0275text(168);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(169, "app-explanation-panel", 75);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(20);
        \u0275\u0275repeater(ctx.inputDefs);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("out-high", ctx.state().sum === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.state().sum, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("bit ", ctx.state().sum, "");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("out-high", ctx.state().carryOut === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.state().carryOut, " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate6(" ", ctx.a(), " + ", ctx.b(), " + ", ctx.cin(), " = ", ctx.a() + ctx.b() + ctx.cin(), ' decimal = "', ctx.state().carryOut, "", ctx.state().sum, '" binary ');
        \u0275\u0275advance(5);
        \u0275\u0275classProp("stage-active", ctx.state().ha1.sum === 1 || ctx.state().ha1.carry === 1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("XOR(", ctx.a(), ",", ctx.b(), ") = ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.state().ha1.sum);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("AND(", ctx.a(), ",", ctx.b(), ") = ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.state().ha1.carry);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("stage-active", ctx.state().ha2.sum === 1 || ctx.state().ha2.carry === 1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("XOR(", ctx.state().ha1.sum, ",", ctx.cin(), ") = ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.state().ha2.sum);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2("AND(", ctx.state().ha1.sum, ",", ctx.cin(), ") = ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.state().ha2.carry);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("stage-active", ctx.state().orGate.output === 1);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("OR(", ctx.state().ha1.carry, ",", ctx.state().ha2.carry, ") = ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.state().orGate.output);
        \u0275\u0275advance(5);
        \u0275\u0275property("table", ctx.truthTable())("activeInputs", \u0275\u0275pureFunction3(112, _c0, ctx.a(), ctx.b(), ctx.cin()));
        \u0275\u0275advance(17);
        \u0275\u0275classProp("sig-hi", ctx.a() === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sig-hi", ctx.b() === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sig-hi", ctx.cin() === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.dotCls(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotCls(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotCls(ctx.cin()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotCls(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotCls(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.gateCls(ctx.state().ha1.xorGate.output));
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.state().ha1.xorGate.output === 1 ? "var(--gate-stroke-active)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.gateCls(ctx.state().ha1.andGate.output));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.wireCls(ctx.state().ha1.sum));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.state().ha1.carry, true));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.state().ha1.sum));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.state().ha1.sum));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.state().ha1.sum));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotCls(ctx.state().ha1.sum));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.cin()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.cin()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotCls(ctx.cin()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.gateCls(ctx.state().ha2.xorGate.output));
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.state().ha2.xorGate.output === 1 ? "var(--gate-stroke-active)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.gateCls(ctx.state().ha2.andGate.output));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.wireCls(ctx.state().ha2.carry, true));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.gateCls(ctx.state().orGate.output));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.wireCls(ctx.state().ha2.xorGate.output));
        \u0275\u0275advance();
        \u0275\u0275classProp("sig-hi", ctx.state().ha2.xorGate.output === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" S=", ctx.state().ha2.xorGate.output, " ");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireCls(ctx.state().orGate.output, true));
        \u0275\u0275advance();
        \u0275\u0275classProp("sig-hi", ctx.state().orGate.output === 1)("carry-lbl", ctx.state().orGate.output === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Co=", ctx.state().orGate.output, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate3(" S = XOR(XOR(A,B), Cin) = XOR(", ctx.state().ha1.sum, ", ", ctx.cin(), ") = ", ctx.state().sum, "");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" Co = OR(AND(A,B), AND(XOR(A,B),Cin)) = OR(", ctx.state().ha1.carry, ",", ctx.state().ha2.carry, ") = ", ctx.state().carryOut, "");
        \u0275\u0275advance();
        \u0275\u0275property("steps", ctx.explanationSteps)("activeStep", -1);
      }
    }, dependencies: [TruthTableComponent, ExplanationPanelComponent], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.main-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 1.25rem;\n}\n@media (max-width: 900px) {\n  .main-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.left-col[_ngcontent-%COMP%], .right-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.input-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.input-name[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--accent);\n  width: 2.5rem;\n  &.carry-name {\n    color: var(--sig-carry);\n  }\n}\n.output-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-top: 0.75rem;\n}\n.out-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.out-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.out-val[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius);\n  border: 2px solid var(--border-default);\n  font-family: var(--font-code);\n  font-size: 1.5rem;\n  font-weight: 800;\n  transition: all 250ms;\n  &.out-high {\n    border-color: var(--sig-high);\n    color: var(--sig-high);\n    background: #00ff8811;\n    box-shadow: var(--sig-high-glow);\n  }\n  &.carry.out-high {\n    border-color: var(--sig-carry);\n    color: var(--sig-carry);\n    background: #f59e0b11;\n  }\n}\n.out-sub[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  margin-top: 2px;\n}\n.equation[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background: var(--bg-input);\n  border-radius: var(--radius);\n  border: 1px solid var(--border-subtle);\n}\n.stage-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  margin-top: 0.75rem;\n}\n.stage[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.65rem 0.75rem;\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius);\n  transition: border-color 250ms, background 250ms;\n  &.stage-active {\n    border-color: var(--accent);\n    background: var(--accent-dim);\n  }\n}\n.stage-arrow[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--text-muted);\n  padding: 0.15rem 0;\n  font-size: 1.2rem;\n  padding-left: 1.5rem;\n}\n.stage-badge[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  background: var(--accent-dim);\n  color: var(--accent);\n  border: 1px solid var(--border-accent);\n  flex-shrink: 0;\n  margin-top: 2px;\n  &.or-badge {\n    background: var(--purple-dim);\n    color: var(--purple);\n    border-color: var(--purple);\n  }\n}\n.stage-detail[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.stage-detail[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n}\n.circuit-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.svg-wrap[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  overflow-x: auto;\n}\n.circuit-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 500px;\n}\n.sig-label[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 12px;\n  font-weight: 700;\n  fill: var(--text-muted);\n  &.sig-hi {\n    fill: var(--sig-high);\n  }\n}\n.carry-lbl[_ngcontent-%COMP%] {\n  fill: var(--sig-carry) !important;\n}\n.gate-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 8px;\n  fill: var(--text-secondary);\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n.col-label[_ngcontent-%COMP%] {\n  font-family: var(--font-ui);\n  font-size: 9px;\n  fill: var(--text-muted);\n  text-anchor: middle;\n}\n.block-label[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 9px;\n  fill: var(--border-default);\n  text-anchor: middle;\n}\n.insight-box[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.75rem 1rem;\n  background: var(--accent-dim);\n  border: 1px solid var(--border-accent);\n  border-radius: var(--radius);\n  font-size: 0.82rem;\n  line-height: 1.6;\n}\n/*# sourceMappingURL=full-adder.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullAdderComponent, { className: "FullAdderComponent", filePath: "src\\app\\features\\full-adder\\full-adder.component.ts", lineNumber: 337 });
})();
export {
  FullAdderComponent
};
//# sourceMappingURL=chunk-ZZYN2P7C.js.map
