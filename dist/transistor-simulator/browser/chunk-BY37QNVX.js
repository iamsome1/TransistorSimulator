import {
  GateSymbolComponent
} from "./chunk-5XIHWYDO.js";
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtextInterpolate5
} from "./chunk-GW2HLFSL.js";

// src/app/features/half-adder/half-adder.component.ts
var _c0 = (a0, a1) => [a0, a1];
function HalfAdderComponent_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 55);
  }
}
function HalfAdderComponent_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 56);
  }
}
function HalfAdderComponent_Conditional_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "br");
    \u0275\u0275elementStart(1, "span", 59);
    \u0275\u0275text(2, '1+1=2 decimal = "10" binary \u2192 sum bit 0, carry bit 1 \u2713');
    \u0275\u0275elementEnd();
  }
}
var HalfAdderComponent = class _HalfAdderComponent {
  constructor() {
    this.binarySvc = inject(BinaryService);
    this.a = signal(0);
    this.b = signal(0);
    this.state = computed(() => this.binarySvc.buildHalfAdderState(this.a(), this.b()));
    this.truthTable = computed(() => this.binarySvc.generateHalfAdderTruthTable());
    this.explanationSteps = [
      {
        id: 1,
        title: "Two inputs: A and B",
        body: "The half adder receives two single-bit values (each is 0 or 1). These represent the two bits you want to add together."
      },
      {
        id: 2,
        title: "XOR gate computes the Sum bit",
        body: "XOR(A,B) = 1 when A and B are different. In binary, 0+0=0, 0+1=1, 1+0=1, 1+1=0 (with carry). The XOR gate naturally computes this sum."
      },
      {
        id: 3,
        title: "AND gate computes the Carry bit",
        body: 'A carry of 1 only happens when both A=1 and B=1 (1+1=2, which is "10" in binary). AND(1,1)=1 \u2014 exactly the carry condition.'
      },
      {
        id: 4,
        title: "Limitation: no carry-in",
        body: "A half adder cannot accept a carry from a previous bit column. That is why we need a Full Adder when chaining multiple bits together."
      },
      {
        id: 5,
        title: "Inside: ~12 transistors",
        body: "An XOR gate needs roughly 8 transistors, an AND gate needs 4. So one half adder fits in about 12 transistors \u2014 smaller than a grain of sand on modern chips."
      }
    ];
  }
  toggleA() {
    this.a.update((v) => v === 0 ? 1 : 0);
  }
  toggleB() {
    this.b.update((v) => v === 0 ? 1 : 0);
  }
  // ── SVG helpers ──────────────────────────────────────────────
  wireClass(value, isCarry = false) {
    if (value === 1)
      return isCarry ? "wire wire--carry wire--flowing" : "wire wire--high wire--flowing";
    return "wire";
  }
  dotClass(value) {
    return `signal-dot signal-dot--${value === 1 ? "high" : "low"}`;
  }
  gateClass(output) {
    return `gate-body ${output === 1 ? "gate-body--active" : ""}`;
  }
  static {
    this.\u0275fac = function HalfAdderComponent_Factory(t) {
      return new (t || _HalfAdderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HalfAdderComponent, selectors: [["app-half-adder"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 127, vars: 94, consts: [[1, "page", "fade-in"], [1, "section-header"], [1, "label"], [1, "main-layout"], [1, "left-col"], [1, "card"], [1, "input-toggles"], [1, "input-row"], [1, "input-name"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked"], [1, "track"], [1, "bit"], [1, "output-row"], [1, "out-field"], [1, "out-label"], [1, "out-val"], [1, "out-formula", "mono", "text-xs"], [1, "out-val", "carry"], [1, "equation", "mt-3"], [1, "mono", "text-sm"], [1, "gate-detail-pair"], [1, "gate-detail-card", "card"], [1, "gd-header"], [1, "gd-badge", "xor-badge"], [1, "gd-role"], ["type", "XOR", 3, "inputValues", "outputValue", "width"], [1, "gd-desc", "text-xs"], [1, "gd-badge", "and-badge"], ["type", "AND", 3, "inputValues", "outputValue", "width"], [3, "table", "activeInputs"], [1, "right-col"], [1, "card", "circuit-card"], [1, "text-xs", "text-muted", "mb-4"], [1, "svg-wrap"], ["viewBox", "0 0 420 240", "aria-label", "Half adder circuit diagram", 1, "circuit-svg"], ["x", "14", "y", "88", 1, "sig-label"], ["x", "14", "y", "158", 1, "sig-label"], ["cx", "32", "cy", "85", "r", "5"], ["cx", "32", "cy", "155", "r", "5"], ["points", "32,85 90,85 90,75 160,75"], ["points", "90,85 90,145 160,145"], ["points", "32,155 110,155 110,95 160,95"], ["points", "110,155 110,165 160,165"], ["cx", "90", "cy", "85", "r", "3.5"], ["cx", "110", "cy", "155", "r", "3.5"], ["d", "M 165 62 Q 178 62 210 85 Q 178 108 165 108 Q 175 85 165 62 Z"], ["d", "M 159 62 Q 169 85 159 108", "fill", "none", "stroke-width", "1.5"], ["x", "189", "y", "89", 1, "gate-txt"], ["x1", "210", "y1", "85", "x2", "340", "y2", "85"], ["x", "350", "y", "89", 1, "sig-label", "out-label"], ["d", "M 165 132 L 190 132 Q 210 132 210 155 Q 210 178 190 178 L 165 178 Z"], ["x", "189", "y", "159", 1, "gate-txt"], ["x1", "210", "y1", "155", "x2", "340", "y2", "155"], ["x", "350", "y", "159", 1, "sig-label", "out-label"], ["cx", "32", "cy", "85", "r", "3", 1, "pulse-dot"], ["cx", "32", "cy", "155", "r", "3", 1, "pulse-dot"], [1, "insight-box"], ["title", "How the Half Adder works", 3, "steps", "activeStep"], [1, "text-xs", "text-muted"]], template: function HalfAdderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Layer 4 \u2014 Half Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Half Adder");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " A half adder combines an ");
        \u0275\u0275elementStart(8, "strong");
        \u0275\u0275text(9, "XOR gate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " (for the sum bit) and an ");
        \u0275\u0275elementStart(11, "strong");
        \u0275\u0275text(12, "AND gate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, " (for the carry bit). It can add two single bits. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 3)(15, "div", 4)(16, "div", 5)(17, "h3");
        \u0275\u0275text(18, "Inputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 6)(20, "div", 7)(21, "span", 8);
        \u0275\u0275text(22, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "label", 9)(24, "input", 10);
        \u0275\u0275listener("change", function HalfAdderComponent_Template_input_change_24_listener() {
          return ctx.toggleA();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "span", 8);
        \u0275\u0275text(30, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "label", 9)(32, "input", 10);
        \u0275\u0275listener("change", function HalfAdderComponent_Template_input_change_32_listener() {
          return ctx.toggleB();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(33, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span", 12);
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 5)(37, "h3");
        \u0275\u0275text(38, "Outputs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 13)(40, "div", 14)(41, "span", 15);
        \u0275\u0275text(42, "Sum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 16);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "span", 17);
        \u0275\u0275text(46, "XOR(A,B)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 14)(48, "span", 15);
        \u0275\u0275text(49, "Carry");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span", 18);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 17);
        \u0275\u0275text(53, "AND(A,B)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 19)(55, "span", 20);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "div", 21)(58, "div", 22)(59, "div", 23)(60, "span", 24);
        \u0275\u0275text(61, "XOR");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "span", 25);
        \u0275\u0275text(63, "\u2192 Sum bit");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(64, "app-gate-symbol", 26);
        \u0275\u0275elementStart(65, "p", 27);
        \u0275\u0275text(66, "Outputs 1 when inputs differ. That's exactly what we need for the binary sum bit.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 22)(68, "div", 23)(69, "span", 28);
        \u0275\u0275text(70, "AND");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "span", 25);
        \u0275\u0275text(72, "\u2192 Carry bit");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(73, "app-gate-symbol", 29);
        \u0275\u0275elementStart(74, "p", 27);
        \u0275\u0275text(75, "Only 1+1 generates a carry. AND(1,1)=1 \u2014 exactly right.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "div", 5)(77, "h3");
        \u0275\u0275text(78, "Truth Table");
        \u0275\u0275elementEnd();
        \u0275\u0275element(79, "app-truth-table", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 31)(81, "div", 32)(82, "h3");
        \u0275\u0275text(83, "Circuit Diagram");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p", 33);
        \u0275\u0275text(85, "Green wires carry signal 1 \xB7 Gray wires carry 0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 34);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(87, "svg", 35)(88, "text", 36);
        \u0275\u0275text(89, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "text", 37);
        \u0275\u0275text(91, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275element(92, "circle", 38)(93, "circle", 39)(94, "polyline", 40)(95, "polyline", 41)(96, "polyline", 42)(97, "polyline", 43)(98, "circle", 44)(99, "circle", 45)(100, "path", 46)(101, "path", 47);
        \u0275\u0275elementStart(102, "text", 48);
        \u0275\u0275text(103, "XOR");
        \u0275\u0275elementEnd();
        \u0275\u0275element(104, "line", 49);
        \u0275\u0275elementStart(105, "text", 50);
        \u0275\u0275text(106);
        \u0275\u0275elementEnd();
        \u0275\u0275element(107, "path", 51);
        \u0275\u0275elementStart(108, "text", 52);
        \u0275\u0275text(109, "AND");
        \u0275\u0275elementEnd();
        \u0275\u0275element(110, "line", 53);
        \u0275\u0275elementStart(111, "text", 54);
        \u0275\u0275text(112);
        \u0275\u0275elementEnd();
        \u0275\u0275template(113, HalfAdderComponent_Conditional_113_Template, 1, 0, ":svg:circle", 55)(114, HalfAdderComponent_Conditional_114_Template, 1, 0, ":svg:circle", 56);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(115, "div", 57)(116, "strong");
        \u0275\u0275text(117, "\u{1F4A1} Key insight:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118);
        \u0275\u0275elementStart(119, "strong");
        \u0275\u0275text(120);
        \u0275\u0275elementEnd();
        \u0275\u0275text(121);
        \u0275\u0275elementStart(122, "strong");
        \u0275\u0275text(123);
        \u0275\u0275elementEnd();
        \u0275\u0275text(124, " (carry) ");
        \u0275\u0275template(125, HalfAdderComponent_Conditional_125_Template, 3, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(126, "app-explanation-panel", 58);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275property("checked", ctx.a() === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bit-1", ctx.a() === 1)("bit-0", ctx.a() === 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.a());
        \u0275\u0275advance(5);
        \u0275\u0275property("checked", ctx.b() === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("bit-1", ctx.b() === 1)("bit-0", ctx.b() === 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.b());
        \u0275\u0275advance(8);
        \u0275\u0275classProp("out-high", ctx.state().sum === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.state().sum, " ");
        \u0275\u0275advance(6);
        \u0275\u0275classProp("out-high", ctx.state().carry === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.state().carry, " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate5(" A(", ctx.a(), ") + B(", ctx.b(), ") = Carry(", ctx.state().carry, ")Sum(", ctx.state().sum, ") = ", ctx.a() + ctx.b(), " decimal ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("gate-active", ctx.state().xorGate.output === 1);
        \u0275\u0275advance(6);
        \u0275\u0275property("inputValues", \u0275\u0275pureFunction2(85, _c0, ctx.a(), ctx.b()))("outputValue", ctx.state().xorGate.output)("width", 110);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("gate-active", ctx.state().andGate.output === 1);
        \u0275\u0275advance(6);
        \u0275\u0275property("inputValues", \u0275\u0275pureFunction2(88, _c0, ctx.a(), ctx.b()))("outputValue", ctx.state().andGate.output)("width", 110);
        \u0275\u0275advance(6);
        \u0275\u0275property("table", ctx.truthTable())("activeInputs", \u0275\u0275pureFunction2(91, _c0, ctx.a(), ctx.b()));
        \u0275\u0275advance(9);
        \u0275\u0275classProp("sig-hi", ctx.a() === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("sig-hi", ctx.b() === 1);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.dotClass(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotClass(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireClass(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireClass(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireClass(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.wireClass(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotClass(ctx.a()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.dotClass(ctx.b()));
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.gateClass(ctx.state().xorGate.output));
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.state().xorGate.output === 1 ? "var(--gate-stroke-active)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.wireClass(ctx.state().xorGate.output));
        \u0275\u0275advance();
        \u0275\u0275classProp("sig-hi", ctx.state().xorGate.output === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Sum=", ctx.state().xorGate.output, " ");
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.gateClass(ctx.state().andGate.output));
        \u0275\u0275advance(3);
        \u0275\u0275classMap(ctx.wireClass(ctx.state().andGate.output, true));
        \u0275\u0275advance();
        \u0275\u0275classProp("sig-hi", ctx.state().andGate.output === 1)("carry-lbl", ctx.state().andGate.output === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Carry=", ctx.state().andGate.output, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(113, ctx.a() === 1 ? 113 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(114, ctx.b() === 1 ? 114 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate4(" When A=", ctx.a(), ", B=", ctx.b(), ": XOR(", ctx.a(), ",", ctx.b(), ") = ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.state().xorGate.output);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2(" (sum) \xB7 AND(", ctx.a(), ",", ctx.b(), ") = ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.state().andGate.output);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(125, ctx.a() === 1 && ctx.b() === 1 ? 125 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("steps", ctx.explanationSteps)("activeStep", -1);
      }
    }, dependencies: [TruthTableComponent, ExplanationPanelComponent, GateSymbolComponent], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.main-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 340px 1fr;\n  gap: 1.25rem;\n}\n@media (max-width: 900px) {\n  .main-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.left-col[_ngcontent-%COMP%], .right-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.input-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n}\n.input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.input-name[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: var(--accent);\n  width: 1.2rem;\n}\n.output-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-top: 0.75rem;\n}\n.out-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.3rem;\n}\n.out-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.out-val[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: var(--radius);\n  border: 2px solid var(--border-default);\n  font-family: var(--font-code);\n  font-size: 1.5rem;\n  font-weight: 800;\n  transition: all 250ms;\n  &.out-high {\n    border-color: var(--sig-high);\n    color: var(--sig-high);\n    background: #00ff8811;\n    box-shadow: var(--sig-high-glow);\n  }\n  &.carry.out-high {\n    border-color: var(--sig-carry);\n    color: var(--sig-carry);\n    background: #f59e0b11;\n    box-shadow: var(--sig-carry-glow);\n  }\n}\n.out-formula[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.equation[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  background: var(--bg-input);\n  border-radius: var(--radius);\n  border: 1px solid var(--border-subtle);\n}\n.gate-detail-pair[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.gate-detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: border-color 250ms;\n}\n.gate-detail-card.gate-active[_ngcontent-%COMP%] {\n  border-color: var(--sig-high);\n}\n.gd-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.gd-badge[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  border: 1px solid;\n}\n.xor-badge[_ngcontent-%COMP%] {\n  color: var(--success);\n  border-color: var(--success);\n}\n.and-badge[_ngcontent-%COMP%] {\n  color: var(--accent);\n  border-color: var(--accent);\n}\n.gd-role[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.gd-desc[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.circuit-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.svg-wrap[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  overflow-x: auto;\n}\n.circuit-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 380px;\n}\n.sig-label[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 13px;\n  font-weight: 700;\n  fill: var(--text-muted);\n  &.sig-hi {\n    fill: var(--sig-high);\n  }\n}\n.out-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.carry-lbl[_ngcontent-%COMP%] {\n  fill: var(--sig-carry) !important;\n}\n.gate-txt[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 9px;\n  fill: var(--text-secondary);\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n.pulse-dot[_ngcontent-%COMP%] {\n  fill: var(--sig-high);\n  animation: glow-pulse 1s ease-in-out infinite;\n}\n.insight-box[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 0.75rem 1rem;\n  background: var(--accent-dim);\n  border: 1px solid var(--border-accent);\n  border-radius: var(--radius);\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=half-adder.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HalfAdderComponent, { className: "HalfAdderComponent", filePath: "src\\app\\features\\half-adder\\half-adder.component.ts", lineNumber: 293 });
})();
export {
  HalfAdderComponent
};
//# sourceMappingURL=chunk-BY37QNVX.js.map
