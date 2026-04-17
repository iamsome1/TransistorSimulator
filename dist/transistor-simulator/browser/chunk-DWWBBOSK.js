import {
  RouterLink
} from "./chunk-WANSW2VL.js";
import "./chunk-T6CYCFWY.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GW2HLFSL.js";

// src/app/features/home/home.component.ts
var _forTrack0 = ($index, $item) => $item.n;
var _forTrack1 = ($index, $item) => $item.path;
var _forTrack2 = ($index, $item) => $item.q;
function HomeComponent_For_47_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function HomeComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomeComponent_For_47_Conditional_7_Template, 2, 0, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const \u0275$index_76_r2 = ctx.$index;
    const \u0275$count_76_r3 = ctx.$count;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, !(\u0275$index_76_r2 === \u0275$count_76_r3 - 1) ? 7 : -1);
  }
}
function HomeComponent_For_56_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(card_r4.badge);
  }
}
function HomeComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275template(1, HomeComponent_For_56_Conditional_1_Template, 2, 1, "span", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9, "Explore \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r4 = ctx.$implicit;
    \u0275\u0275styleProp("--card-color", card_r4.color);
    \u0275\u0275property("routerLink", card_r4.path);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, card_r4.badge ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r4.description);
  }
}
function HomeComponent_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.q);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.a);
  }
}
var HomeComponent = class _HomeComponent {
  constructor() {
    this.flowSteps = [
      { n: 1, icon: "\u{1F522}", label: "Decimal" },
      { n: 2, icon: "01", label: "Binary" },
      { n: 3, icon: "\u2699\uFE0F", label: "Gates" },
      { n: 4, icon: "\xBD", label: "Half Adder" },
      { n: 5, icon: "\u{1F501}", label: "Full Adder" },
      { n: 6, icon: "\u{1F30A}", label: "Ripple Carry" },
      { n: 7, icon: "\u{1F52C}", label: "Transistors" },
      { n: 8, icon: "\u{1F3AF}", label: "Quiz" }
    ];
    this.sections = [
      {
        path: "binary-basics",
        icon: "\u{1F522}",
        color: "#00d4ff",
        title: "Binary Basics",
        description: "Convert decimal numbers to binary and watch bit-by-bit addition with carry propagation."
      },
      {
        path: "gate-playground",
        icon: "\u2699\uFE0F",
        color: "#a78bfa",
        title: "Gate Playground",
        description: "Toggle AND, OR, XOR, NOT, NAND, NOR gates interactively. See live truth tables."
      },
      {
        path: "half-adder",
        icon: "\u2795",
        color: "#10b981",
        title: "Half Adder",
        description: "Explore how XOR + AND combine to form the simplest 1-bit adder circuit."
      },
      {
        path: "full-adder",
        icon: "\u{1F501}",
        color: "#f59e0b",
        title: "Full Adder",
        description: "Add carry-in to the mix. Watch how two half adders and an OR gate handle all 3 inputs."
      },
      {
        path: "ripple-carry",
        icon: "\u{1F30A}",
        color: "#ef4444",
        title: "Ripple Carry Adder",
        description: "Chain 4 or 8 full adders. Watch carry ripple through positions from LSB to MSB.",
        badge: "Animated"
      },
      {
        path: "transistor",
        icon: "\u{1F52C}",
        color: "#06b6d4",
        title: "Transistor Concept",
        description: "Understand how tiny transistor switches form logic gates, which form adders."
      },
      {
        path: "quiz",
        icon: "\u{1F3AF}",
        color: "#ec4899",
        title: "Quiz Mode",
        description: "Test your understanding with 20+ questions. Instant feedback and explanations.",
        badge: "New"
      }
    ];
    this.keyConcepts = [
      { icon: "\u{1F4A1}", q: "Why binary?", a: "Transistors have 2 states: ON and OFF \u2014 a perfect match for 1 and 0." },
      { icon: "\u{1F4E6}", q: "What is a bit?", a: "The smallest unit of data \u2014 a single 0 or 1 stored in one transistor switch." },
      { icon: "\u27A1\uFE0F", q: "What is carry?", a: 'When 1+1=2, binary needs two bits (10). The left bit "carries" to the next column.' },
      { icon: "\u2B05\uFE0F", q: "Why right to left?", a: "Each column generates a carry for the next \u2014 we must process LSB first." },
      { icon: "\xBD", q: "Half vs Full Adder?", a: "Half adds 2 bits; Full adds 3 (including carry-in from the previous column)." },
      { icon: "\u{1F517}", q: "Why chain adders?", a: "Each bit column needs its own full adder. Chain them to handle multi-bit numbers." }
    ];
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 66, vars: 0, consts: [[1, "home", "fade-in"], [1, "hero"], [1, "hero-badge"], [1, "hero-accent"], [1, "hero-desc"], [1, "hero-actions"], ["routerLink", "/binary-basics", 1, "btn", "btn-primary"], ["routerLink", "/quiz", 1, "btn", "btn-secondary"], [1, "hero-stats"], [1, "stat"], [1, "stat-n"], [1, "stat-l"], [1, "concept-flow"], [1, "section-header"], [1, "label"], [1, "flow-steps"], [1, "flow-step"], [1, "cards-grid"], [1, "section-card", 3, "routerLink", "--card-color"], [1, "concepts-row"], [1, "concepts-grid"], [1, "concept-card"], [1, "flow-n"], [1, "flow-icon"], [1, "flow-label"], [1, "flow-arrow"], [1, "section-card", 3, "routerLink"], [1, "card-badge"], [1, "card-icon"], [1, "card-cta"], [1, "concept-icon"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2);
        \u0275\u0275text(3, "Interactive Learning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, " How does a chip");
        \u0275\u0275element(6, "br");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8, "add two numbers?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p", 4);
        \u0275\u0275text(10, " From a single transistor switch to a complete 8-bit adder \u2014 explore every layer of the digital stack through animated, interactive visualisations. No prior electronics knowledge needed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 5)(12, "a", 6);
        \u0275\u0275text(13, "Start Learning \u25B6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 7);
        \u0275\u0275text(15, "Take the Quiz \u{1F3AF}");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "span", 10);
        \u0275\u0275text(19, "8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 11);
        \u0275\u0275text(21, "Layers");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 9)(23, "span", 10);
        \u0275\u0275text(24, "20+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 11);
        \u0275\u0275text(26, "Quiz Qs");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 9)(28, "span", 10);
        \u0275\u0275text(29, "\u221E");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 11);
        \u0275\u0275text(31, "Combinations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 9)(33, "span", 10);
        \u0275\u0275text(34, "0");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 11);
        \u0275\u0275text(36, "Prerequisites");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "section", 12)(38, "div", 13)(39, "span", 14);
        \u0275\u0275text(40, "Progressive Learning Path");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "h2");
        \u0275\u0275text(42, "From switches to adders");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "Each layer builds on the previous. Follow the path or jump directly to any topic.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 15);
        \u0275\u0275repeaterCreate(46, HomeComponent_For_47_Template, 8, 4, "div", 16, _forTrack0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "section")(49, "div", 13)(50, "span", 14);
        \u0275\u0275text(51, "All Sections");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "h2");
        \u0275\u0275text(53, "Choose your topic");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "div", 17);
        \u0275\u0275repeaterCreate(55, HomeComponent_For_56_Template, 10, 7, "a", 18, _forTrack1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "section", 19)(58, "div", 13)(59, "span", 14);
        \u0275\u0275text(60, "Key Ideas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "h2");
        \u0275\u0275text(62, "Things you'll understand after this");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 20);
        \u0275\u0275repeaterCreate(64, HomeComponent_For_65_Template, 7, 3, "div", 21, _forTrack2);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(46);
        \u0275\u0275repeater(ctx.flowSteps);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.sections);
        \u0275\u0275advance(9);
        \u0275\u0275repeater(ctx.keyConcepts);
      }
    }, dependencies: [RouterLink], styles: ['\n\n.home[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 3.5rem;\n}\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.3rem 0.9rem;\n  border-radius: 999px;\n  background: var(--accent-dim);\n  border: 1px solid var(--border-accent);\n  color: var(--accent);\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 1.25rem;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.hero-accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.hero-desc[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto 1.75rem;\n  font-size: 1.05rem;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stat-n[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: var(--text-primary);\n  font-family: var(--font-code);\n}\n.stat-l[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n.flow-steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  padding: 1.5rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius-lg);\n}\n.flow-step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  flex: 1;\n  min-width: 70px;\n}\n.flow-n[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  background: var(--accent-dim);\n  border: 1px solid var(--accent);\n  color: var(--accent);\n  font-size: 0.7rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.flow-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.flow-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-align: center;\n  color: var(--text-secondary);\n}\n.flow-arrow[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--text-muted);\n  margin: 0 0.25rem;\n  align-self: center;\n}\n.cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.section-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  padding: 1.25rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  color: inherit;\n  transition:\n    border-color 200ms,\n    transform 200ms,\n    box-shadow 200ms;\n  overflow: hidden;\n  &::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 3px;\n    height: 100%;\n    background: var(--card-color, var(--accent));\n  }\n  &:hover {\n    border-color: var(--card-color, var(--accent));\n    transform: translateY(-2px);\n    box-shadow: var(--shadow);\n  }\n  h3 {\n    color: var(--text-primary);\n    font-size: 0.95rem;\n  }\n  p {\n    font-size: 0.8rem;\n    flex: 1;\n  }\n}\n.card-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.card-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.6rem;\n  right: 0.6rem;\n  font-size: 0.65rem;\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  background: var(--purple-dim);\n  color: var(--purple);\n  border: 1px solid var(--purple);\n  font-weight: 600;\n}\n.card-cta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--card-color, var(--accent));\n  font-weight: 600;\n  margin-top: 0.25rem;\n}\n.concepts-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n}\n.concept-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  background: var(--bg-card);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius);\n  .concept-icon {\n    font-size: 1.3rem;\n    display: block;\n    margin-bottom: 0.4rem;\n  }\n  strong {\n    font-size: 0.85rem;\n    color: var(--text-primary);\n    display: block;\n    margin-bottom: 0.3rem;\n  }\n  p {\n    font-size: 0.78rem;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\features\\home\\home.component.ts", lineNumber: 242 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-DWWBBOSK.js.map
