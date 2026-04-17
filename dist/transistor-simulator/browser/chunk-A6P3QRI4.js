import {
  computed,
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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-GW2HLFSL.js";

// src/app/features/transistor-concept/transistor-concept.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.title;
function TransistorConceptComponent_For_238_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 94)(1, "div", 95)(2, "span", 96);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 98);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 99);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    \u0275\u0275styleProp("--depth", level_r1.depth);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", level_r1.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r1.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r1.desc);
  }
}
function TransistorConceptComponent_For_241_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 100);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const fact_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fact_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fact_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(fact_r2.body);
  }
}
var TransistorConceptComponent = class _TransistorConceptComponent {
  constructor() {
    this.gateSignal = signal(0);
    this.nandA = signal(0);
    this.nandB = signal(0);
    this.nandOut = computed(() => this.nandA() === 1 && this.nandB() === 1 ? 0 : 1);
    this.pyramid = [
      { depth: 0, icon: "\u{1F3D7}\uFE0F", label: "Ripple Carry Adder", count: "~900 transistors (4-bit)", color: "#00d4ff", desc: "Four full adders chained" },
      { depth: 30, icon: "\u{1F501}", label: "Full Adder (\xD74)", count: "~28 transistors each", color: "#a78bfa", desc: "2 half adders + 1 OR gate" },
      { depth: 60, icon: "\u2795", label: "Half Adder", count: "~12 transistors", color: "#10b981", desc: "XOR gate + AND gate" },
      { depth: 90, icon: "\u2699\uFE0F", label: "Logic Gates", count: "2\u201312 transistors each", color: "#f59e0b", desc: "AND, OR, XOR, NOT\u2026" },
      { depth: 120, icon: "\u{1F52C}", label: "Transistors", count: "1 transistor = 1 switch", color: "#ef4444", desc: "The fundamental unit" },
      { depth: 150, icon: "\u26A1", label: "Physics (ON / OFF)", count: "Voltage: ~0V or ~1.8V", color: "#ec4899", desc: "Two voltage levels" }
    ];
    this.scaleFacts = [
      {
        icon: "\u{1F52C}",
        title: "How small?",
        body: "Modern transistors are ~3\u20137 nanometres wide. A human hair is 80,000 nm. You could fit 25,000 transistors across a single hair."
      },
      {
        icon: "\u{1F522}",
        title: "How many?",
        body: "A modern CPU chip (like Apple M3) contains about 25 billion transistors \u2014 more than 3\xD7 the number of people on Earth."
      },
      {
        icon: "\u26A1",
        title: "How fast?",
        body: "Transistors switch ON/OFF billions of times per second (GHz). A 3 GHz clock ticks 3,000,000,000 times every second."
      },
      {
        icon: "\u{1F4A1}",
        title: "Why CMOS?",
        body: "CMOS logic only draws power when switching (not when idle), which is why modern chips don't melt despite billions of transistors."
      },
      {
        icon: "\u{1F4D0}",
        title: "Gate length",
        body: `The "gate length" (transistor size) has halved roughly every 2 years \u2014 Moore's Law. TSMC's 3nm process launched in 2022.`
      },
      {
        icon: "\u{1F321}\uFE0F",
        title: "Voltage levels",
        body: "Older chips ran at 5V. Modern chips run at ~0.8\u20131.2V to reduce power consumption and heat. Low voltage = less power = smaller, cooler chips."
      }
    ];
  }
  toggleGate() {
    this.gateSignal.update((v) => v === 0 ? 1 : 0);
  }
  toggleNandA() {
    this.nandA.update((v) => v === 0 ? 1 : 0);
  }
  toggleNandB() {
    this.nandB.update((v) => v === 0 ? 1 : 0);
  }
  static {
    this.\u0275fac = function TransistorConceptComponent_Factory(t) {
      return new (t || _TransistorConceptComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TransistorConceptComponent, selectors: [["app-transistor-concept"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 242, vars: 82, consts: [[1, "page", "fade-in"], [1, "section-header"], [1, "label"], [1, "concept-section", "card"], [1, "cs-header"], [1, "cs-number"], [1, "cs-body", "two-col"], [1, "cs-text"], [1, "cs-list"], [1, "mt-3"], [1, "text-success"], [1, "text-error"], [1, "transistor-demo"], [1, "demo-label"], [1, "toggle-row"], [1, "toggle-switch"], ["type", "checkbox", 3, "change", "checked"], [1, "track"], [1, "tgl-text"], ["viewBox", "0 0 200 260", 1, "t-svg"], ["x", "100", "y", "18", "text-anchor", "middle", 1, "svg-label"], ["x1", "100", "y1", "22", "x2", "100", "y2", "55"], ["x", "75", "y", "55", "width", "50", "height", "12", "rx", "3", "stroke-width", "1.5"], ["x", "100", "y", "65", "text-anchor", "middle", "font-size", "8", 1, "svg-label"], ["x", "65", "y", "80", "width", "70", "height", "80", "rx", "8", "stroke-width", "2"], ["x1", "100", "y1", "95", "x2", "100", "y2", "145", "stroke-width", "3"], ["x1", "88", "y1", "105", "x2", "100", "y2", "105", "stroke-width", "2.5"], ["x1", "88", "y1", "135", "x2", "100", "y2", "135", "stroke-width", "2.5"], ["x1", "65", "y1", "120", "x2", "82", "y2", "120"], ["x1", "82", "y1", "100", "x2", "82", "y2", "140", "stroke-width", "3"], ["x", "48", "y", "124", "text-anchor", "end", "font-size", "9", 1, "svg-label"], ["x", "100", "y", "124", "text-anchor", "middle", "font-size", "11", "font-weight", "bold", 1, "svg-label"], ["x", "75", "y", "173", "width", "50", "height", "12", "rx", "3", "stroke-width", "1.5"], ["x", "100", "y", "183", "text-anchor", "middle", "font-size", "8", 1, "svg-label"], ["x1", "100", "y1", "185", "x2", "100", "y2", "220"], ["x1", "80", "y1", "220", "x2", "120", "y2", "220", "stroke", "var(--text-muted)", "stroke-width", "2"], ["x1", "88", "y1", "226", "x2", "112", "y2", "226", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x1", "94", "y1", "232", "x2", "106", "y2", "232", "stroke", "var(--text-muted)", "stroke-width", "1"], ["x", "100", "y", "248", "text-anchor", "middle", "font-size", "8", 1, "svg-label"], ["cx", "44", "cy", "120", "r", "5"], [1, "t-status"], [1, "mt-2"], [1, "nand-tt"], [1, "truth-table", 2, "width", "auto"], [1, "val-1"], [1, "text-xs"], [1, "val-0"], [1, "nand-toggles"], [1, "nand-out"], [1, "nand-svg-wrap"], ["viewBox", "0 0 220 320", 1, "nand-svg"], ["x", "110", "y", "15", "text-anchor", "middle", "font-size", "9", "fill", "var(--text-muted)", 1, "svg-label"], ["x", "110", "y", "32", "text-anchor", "middle", "font-size", "8", 1, "svg-label"], ["x1", "80", "y1", "36", "x2", "140", "y2", "36", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x1", "80", "y1", "36", "x2", "80", "y2", "52", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x1", "140", "y1", "36", "x2", "140", "y2", "52", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x", "55", "y", "52", "width", "50", "height", "36", "rx", "5", "stroke-width", "1.5"], ["x", "80", "y", "73", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x", "80", "y", "82", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x1", "25", "y1", "70", "x2", "55", "y2", "70"], ["cx", "20", "cy", "70", "r", "4"], ["x", "14", "y", "70", "text-anchor", "end", "font-size", "8", 1, "svg-label"], ["x", "115", "y", "52", "width", "50", "height", "36", "rx", "5", "stroke-width", "1.5"], ["x", "140", "y", "73", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x", "140", "y", "82", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x1", "165", "y1", "70", "x2", "195", "y2", "70"], ["cx", "200", "cy", "70", "r", "4"], ["x", "206", "y", "70", "font-size", "8", 1, "svg-label"], ["x1", "80", "y1", "88", "x2", "80", "y2", "120", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x1", "140", "y1", "88", "x2", "140", "y2", "120", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x1", "80", "y1", "120", "x2", "140", "y2", "120", "stroke-width", "1.5"], ["x1", "110", "y1", "120", "x2", "110", "y2", "140"], ["cx", "110", "cy", "120", "r", "4"], ["x1", "110", "y1", "120", "x2", "185", "y2", "120"], ["x", "190", "y", "124", "font-size", "8", 1, "svg-label"], ["x", "85", "y", "140", "width", "50", "height", "36", "rx", "5", "stroke-width", "1.5"], ["x", "110", "y", "161", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x", "110", "y", "170", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x1", "25", "y1", "158", "x2", "85", "y2", "158"], ["x", "85", "y", "196", "width", "50", "height", "36", "rx", "5", "stroke-width", "1.5"], ["x", "110", "y", "217", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x", "110", "y", "226", "text-anchor", "middle", "font-size", "7", 1, "svg-label"], ["x1", "165", "y1", "214", "x2", "195", "y2", "214"], ["x1", "110", "y1", "176", "x2", "110", "y2", "196", "stroke-width", "1.5"], ["x1", "110", "y1", "232", "x2", "110", "y2", "260", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x1", "90", "y1", "260", "x2", "130", "y2", "260", "stroke", "var(--text-muted)", "stroke-width", "2"], ["x1", "97", "y1", "266", "x2", "123", "y2", "266", "stroke", "var(--text-muted)", "stroke-width", "1.5"], ["x1", "104", "y1", "272", "x2", "116", "y2", "272", "stroke", "var(--text-muted)", "stroke-width", "1"], ["x", "110", "y", "285", "text-anchor", "middle", "font-size", "8", 1, "svg-label"], [1, "cs-body"], [1, "pyramid"], [1, "pyramid-level", 3, "--depth"], [1, "facts-grid"], [1, "fact-card", "card"], [1, "pyramid-level"], [1, "pyr-bar"], [1, "pyr-icon"], [1, "pyr-label"], [1, "pyr-count"], [1, "pyr-desc"], [1, "fact-icon"]], template: function TransistorConceptComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Layer 7 \u2014 Transistors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Transistor Concept");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, " Everything you've seen \u2014 gates, adders, chips \u2014 ultimately reduces to one incredibly simple component: a transistor acting as a tiny electronic switch. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "span", 5);
        \u0275\u0275text(11, "01");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "h3");
        \u0275\u0275text(13, "What is a transistor?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "p");
        \u0275\u0275text(17, " A transistor is a semiconductor device with three terminals. In digital circuits we treat it as a ");
        \u0275\u0275elementStart(18, "strong");
        \u0275\u0275text(19, "voltage-controlled switch");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "ul", 8)(22, "li")(23, "strong");
        \u0275\u0275text(24, "Gate (or Base)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " \u2014 the control input. A small voltage here turns the switch ON or OFF.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "li")(27, "strong");
        \u0275\u0275text(28, "Drain (or Collector)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " \u2014 where current enters.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "li")(31, "strong");
        \u0275\u0275text(32, "Source (or Emitter)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " \u2014 where current exits.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "p", 9);
        \u0275\u0275text(35, " When the gate voltage is HIGH (logic 1) \u2192 the transistor turns ");
        \u0275\u0275elementStart(36, "strong", 10);
        \u0275\u0275text(37, "ON");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " (conducts) .");
        \u0275\u0275element(39, "br");
        \u0275\u0275text(40, " When the gate voltage is LOW (logic 0) \u2192 the transistor turns ");
        \u0275\u0275elementStart(41, "strong", 11);
        \u0275\u0275text(42, "OFF");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " (blocks current). ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 12)(45, "div", 13);
        \u0275\u0275text(46, "Try it \u2014 toggle the Gate signal:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 14)(48, "label", 15)(49, "input", 16);
        \u0275\u0275listener("change", function TransistorConceptComponent_Template_input_change_49_listener() {
          return ctx.toggleGate();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 18);
        \u0275\u0275text(52, "Gate = ");
        \u0275\u0275elementStart(53, "strong");
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(55, "svg", 19)(56, "text", 20);
        \u0275\u0275text(57, "VDD (Power)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(58, "line", 21)(59, "rect", 22);
        \u0275\u0275elementStart(60, "text", 23);
        \u0275\u0275text(61, "Drain");
        \u0275\u0275elementEnd();
        \u0275\u0275element(62, "rect", 24)(63, "line", 25)(64, "line", 26)(65, "line", 27)(66, "line", 28)(67, "line", 29);
        \u0275\u0275elementStart(68, "text", 30);
        \u0275\u0275text(69, "Gate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "text", 31);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "rect", 32);
        \u0275\u0275elementStart(73, "text", 33);
        \u0275\u0275text(74, "Source");
        \u0275\u0275elementEnd();
        \u0275\u0275element(75, "line", 34)(76, "line", 35)(77, "line", 36)(78, "line", 37);
        \u0275\u0275elementStart(79, "text", 38);
        \u0275\u0275text(80, "GND");
        \u0275\u0275elementEnd();
        \u0275\u0275element(81, "circle", 39);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(82, "div", 40);
        \u0275\u0275text(83);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "div", 3)(85, "div", 4)(86, "span", 5);
        \u0275\u0275text(87, "02");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "h3");
        \u0275\u0275text(89, "Building a NAND gate from 4 transistors");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 6)(91, "div", 7)(92, "p");
        \u0275\u0275text(93, " CMOS logic uses ");
        \u0275\u0275elementStart(94, "strong");
        \u0275\u0275text(95, "complementary pairs");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, " of transistors: PMOS (turns ON when gate = 0) and NMOS (turns ON when gate = 1). ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p", 41);
        \u0275\u0275text(98, "A CMOS NAND gate uses:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "ul", 8)(100, "li")(101, "strong");
        \u0275\u0275text(102, "2 PMOS in parallel");
        \u0275\u0275elementEnd();
        \u0275\u0275text(103, " \u2014 pull-up network (connect output to VDD when either input is 0)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li")(105, "strong");
        \u0275\u0275text(106, "2 NMOS in series");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, " \u2014 pull-down network (connect output to GND only when both inputs are 1)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "p", 41);
        \u0275\u0275text(109, " Result: output = 0 only when A=1 ");
        \u0275\u0275elementStart(110, "em");
        \u0275\u0275text(111, "and");
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, " B=1. All other cases output = 1. That's NAND. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 42)(114, "table", 43)(115, "thead")(116, "tr")(117, "th");
        \u0275\u0275text(118, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "th");
        \u0275\u0275text(120, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "th");
        \u0275\u0275text(122, "NAND");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "th");
        \u0275\u0275text(124, "State");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "tbody")(126, "tr")(127, "td");
        \u0275\u0275text(128, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "td");
        \u0275\u0275text(130, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "td", 44);
        \u0275\u0275text(132, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "td", 45);
        \u0275\u0275text(134, "Both PMOS ON");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "tr")(136, "td");
        \u0275\u0275text(137, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "td");
        \u0275\u0275text(139, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "td", 44);
        \u0275\u0275text(141, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "td", 45);
        \u0275\u0275text(143, "1 PMOS ON");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "tr")(145, "td");
        \u0275\u0275text(146, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "td");
        \u0275\u0275text(148, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "td", 44);
        \u0275\u0275text(150, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "td", 45);
        \u0275\u0275text(152, "1 PMOS ON");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "tr")(154, "td");
        \u0275\u0275text(155, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "td");
        \u0275\u0275text(157, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "td", 46);
        \u0275\u0275text(159, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "td", 45);
        \u0275\u0275text(161, "Both NMOS ON");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(162, "div", 47)(163, "label", 15)(164, "input", 16);
        \u0275\u0275listener("change", function TransistorConceptComponent_Template_input_change_164_listener() {
          return ctx.toggleNandA();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(165, "div", 17);
        \u0275\u0275elementStart(166, "span", 18);
        \u0275\u0275text(167);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "label", 15)(169, "input", 16);
        \u0275\u0275listener("change", function TransistorConceptComponent_Template_input_change_169_listener() {
          return ctx.toggleNandB();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(170, "div", 17);
        \u0275\u0275elementStart(171, "span", 18);
        \u0275\u0275text(172);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "div", 48);
        \u0275\u0275text(174);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(175, "div", 49);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(176, "svg", 50)(177, "text", 51);
        \u0275\u0275text(178, "CMOS NAND \u2014 4 Transistors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "text", 52);
        \u0275\u0275text(180, "VDD");
        \u0275\u0275elementEnd();
        \u0275\u0275element(181, "line", 53)(182, "line", 54)(183, "line", 55)(184, "rect", 56);
        \u0275\u0275elementStart(185, "text", 57);
        \u0275\u0275text(186, "PMOS-A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "text", 58);
        \u0275\u0275text(188);
        \u0275\u0275elementEnd();
        \u0275\u0275element(189, "line", 59)(190, "circle", 60);
        \u0275\u0275elementStart(191, "text", 61);
        \u0275\u0275text(192, "A");
        \u0275\u0275elementEnd();
        \u0275\u0275element(193, "rect", 62);
        \u0275\u0275elementStart(194, "text", 63);
        \u0275\u0275text(195, "PMOS-B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "text", 64);
        \u0275\u0275text(197);
        \u0275\u0275elementEnd();
        \u0275\u0275element(198, "line", 65)(199, "circle", 66);
        \u0275\u0275elementStart(200, "text", 67);
        \u0275\u0275text(201, "B");
        \u0275\u0275elementEnd();
        \u0275\u0275element(202, "line", 68)(203, "line", 69)(204, "line", 70)(205, "line", 71)(206, "circle", 72)(207, "line", 73);
        \u0275\u0275elementStart(208, "text", 74);
        \u0275\u0275text(209);
        \u0275\u0275elementEnd();
        \u0275\u0275element(210, "rect", 75);
        \u0275\u0275elementStart(211, "text", 76);
        \u0275\u0275text(212, "NMOS-A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "text", 77);
        \u0275\u0275text(214);
        \u0275\u0275elementEnd();
        \u0275\u0275element(215, "line", 78)(216, "rect", 79);
        \u0275\u0275elementStart(217, "text", 80);
        \u0275\u0275text(218, "NMOS-B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "text", 81);
        \u0275\u0275text(220);
        \u0275\u0275elementEnd();
        \u0275\u0275element(221, "line", 82)(222, "line", 83)(223, "line", 84)(224, "line", 85)(225, "line", 86)(226, "line", 87);
        \u0275\u0275elementStart(227, "text", 88);
        \u0275\u0275text(228, "GND");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(229, "div", 3)(230, "div", 4)(231, "span", 5);
        \u0275\u0275text(232, "03");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "h3");
        \u0275\u0275text(234, "From transistors to adders \u2014 the abstraction pyramid");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(235, "div", 89)(236, "div", 90);
        \u0275\u0275repeaterCreate(237, TransistorConceptComponent_For_238_Template, 10, 8, "div", 91, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(239, "div", 92);
        \u0275\u0275repeaterCreate(240, TransistorConceptComponent_For_241_Template, 7, 3, "div", 93, _forTrack1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(49);
        \u0275\u0275property("checked", ctx.gateSignal() === 1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("text-success", ctx.gateSignal() === 1)("text-error", ctx.gateSignal() === 0);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.gateSignal() === 1 ? "1 (HIGH)" : "0 (LOW)", " ");
        \u0275\u0275advance(4);
        \u0275\u0275classMap("wire " + (ctx.gateSignal() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275attribute("fill", ctx.gateSignal() === 1 ? "#00ff8822" : "var(--bg-input)")("stroke", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill", ctx.gateSignal() === 1 ? "#002a12" : "var(--gate-fill)")("stroke", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275classMap("wire " + (ctx.gateSignal() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--error)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.gateSignal() === 1 ? "ON" : "OFF", " ");
        \u0275\u0275advance();
        \u0275\u0275attribute("fill", ctx.gateSignal() === 1 ? "#00ff8822" : "var(--bg-input)")("stroke", ctx.gateSignal() === 1 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275classMap("wire " + (ctx.gateSignal() === 1 ? "wire--high wire--flowing" : ""));
        \u0275\u0275advance(6);
        \u0275\u0275classMap("signal-dot " + (ctx.gateSignal() === 1 ? "signal-dot--high" : "signal-dot--low"));
        \u0275\u0275advance();
        \u0275\u0275classProp("t-on", ctx.gateSignal() === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.gateSignal() === 1 ? "\u26A1 Transistor ON \u2014 current flows from Drain to Source" : "\u{1F534} Transistor OFF \u2014 current is blocked", " ");
        \u0275\u0275advance(43);
        \u0275\u0275classProp("active", ctx.nandA() === 0 && ctx.nandB() === 0);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.nandA() === 1 && ctx.nandB() === 0);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.nandA() === 0 && ctx.nandB() === 1);
        \u0275\u0275advance(9);
        \u0275\u0275classProp("active", ctx.nandA() === 1 && ctx.nandB() === 1);
        \u0275\u0275advance(11);
        \u0275\u0275property("checked", ctx.nandA() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("A = ", ctx.nandA(), "");
        \u0275\u0275advance(2);
        \u0275\u0275property("checked", ctx.nandB() === 1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("B = ", ctx.nandB(), "");
        \u0275\u0275advance();
        \u0275\u0275classProp("nand-high", ctx.nandOut() === 1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" NAND = ", ctx.nandOut(), " ");
        \u0275\u0275advance(10);
        \u0275\u0275attribute("fill", ctx.nandA() === 0 ? "#00ff8822" : "var(--gate-fill)")("stroke", ctx.nandA() === 0 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill", ctx.nandA() === 0 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.nandA() === 0 ? "ON" : "OFF", " ");
        \u0275\u0275advance();
        \u0275\u0275classMap("wire " + (ctx.nandA() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275classMap("signal-dot " + (ctx.nandA() === 1 ? "signal-dot--high" : "signal-dot--low"));
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill", ctx.nandB() === 0 ? "#00ff8822" : "var(--gate-fill)")("stroke", ctx.nandB() === 0 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill", ctx.nandB() === 0 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.nandB() === 0 ? "ON" : "OFF", " ");
        \u0275\u0275advance();
        \u0275\u0275classMap("wire " + (ctx.nandB() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275classMap("signal-dot " + (ctx.nandB() === 1 ? "signal-dot--high" : "signal-dot--low"));
        \u0275\u0275advance(5);
        \u0275\u0275attribute("stroke", ctx.nandOut() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275classMap("wire " + (ctx.nandOut() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275classMap("signal-dot " + (ctx.nandOut() === 1 ? "signal-dot--high" : "signal-dot--low"));
        \u0275\u0275advance();
        \u0275\u0275classMap("wire " + (ctx.nandOut() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275attribute("fill", ctx.nandOut() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" Out=", ctx.nandOut(), " ");
        \u0275\u0275advance();
        \u0275\u0275attribute("fill", ctx.nandA() === 1 ? "#00ff8822" : "var(--gate-fill)")("stroke", ctx.nandA() === 1 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill", ctx.nandA() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.nandA() === 1 ? "ON" : "OFF", " ");
        \u0275\u0275advance();
        \u0275\u0275classMap("wire " + (ctx.nandA() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275attribute("fill", ctx.nandB() === 1 ? "#00ff8822" : "var(--gate-fill)")("stroke", ctx.nandB() === 1 ? "var(--sig-high)" : "var(--border-default)");
        \u0275\u0275advance(3);
        \u0275\u0275attribute("fill", ctx.nandB() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.nandB() === 1 ? "ON" : "OFF", " ");
        \u0275\u0275advance();
        \u0275\u0275classMap("wire " + (ctx.nandB() === 1 ? "wire--high" : ""));
        \u0275\u0275advance();
        \u0275\u0275attribute("stroke", ctx.nandA() === 1 && ctx.nandB() === 1 ? "var(--sig-high)" : "var(--text-muted)");
        \u0275\u0275advance(15);
        \u0275\u0275repeater(ctx.pyramid);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.scaleFacts);
      }
    }, styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.concept-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.cs-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cs-number[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: var(--accent);\n  border: 1px solid var(--border-accent);\n  background: var(--accent-dim);\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n}\n.cs-body[_ngcontent-%COMP%] {\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n  align-items: start;\n}\n@media (max-width: 800px) {\n  .two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.cs-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.cs-list[_ngcontent-%COMP%] {\n  padding-left: 1.25rem;\n  color: var(--text-secondary);\n  font-size: 0.88rem;\n  line-height: 1.7;\n}\n.cs-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.3rem;\n}\n.transistor-demo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n}\n.demo-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-muted);\n}\n.toggle-row[_ngcontent-%COMP%], .nand-toggles[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.tgl-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n}\n.t-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 180px;\n}\n.svg-label[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  fill: var(--text-secondary);\n}\n.t-status[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.4rem 0.75rem;\n  border-radius: var(--radius);\n  font-size: 0.8rem;\n  background: var(--bg-input);\n  border: 1px solid var(--border-subtle);\n  &.t-on {\n    background: #00ff8811;\n    border-color: var(--sig-high);\n    color: var(--sig-high);\n  }\n}\n.nand-tt[_ngcontent-%COMP%] {\n  margin: 0.75rem 0;\n  overflow-x: auto;\n}\n.nand-toggles[_ngcontent-%COMP%] {\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n}\n.nand-out[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.75rem;\n  border-radius: var(--radius);\n  background: var(--bg-input);\n  border: 1px solid var(--border-subtle);\n  font-family: var(--font-code);\n  font-weight: 700;\n  color: var(--text-muted);\n  transition: all 250ms;\n  &.nand-high {\n    color: var(--sig-high);\n    border-color: var(--sig-high);\n    background: #00ff8811;\n  }\n}\n.nand-svg-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.nand-svg[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 220px;\n}\n.pyramid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: center;\n  padding: 1rem 0;\n}\n.pyramid-level[_ngcontent-%COMP%] {\n  width: calc(100% - var(--depth, 0) * 2);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.pyr-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1rem;\n  border-radius: var(--radius);\n  flex: 1;\n  min-height: 2.5rem;\n}\n.pyr-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.pyr-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.88rem;\n  color: #000;\n  flex: 1;\n}\n.pyr-count[_ngcontent-%COMP%] {\n  font-family: var(--font-code);\n  font-size: 0.75rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.pyr-desc[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  max-width: 200px;\n}\n.facts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.fact-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.fact-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n}\n.fact-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-primary);\n}\n.fact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=transistor-concept.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TransistorConceptComponent, { className: "TransistorConceptComponent", filePath: "src\\app\\features\\transistor-concept\\transistor-concept.component.ts", lineNumber: 418 });
})();
export {
  TransistorConceptComponent
};
//# sourceMappingURL=chunk-A6P3QRI4.js.map
