import {
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-GW2HLFSL.js";

// src/app/core/services/quiz.service.ts
var ALL_QUESTIONS = [
  // ── Binary Concepts ─────────────────────────────────────────
  {
    id: 1,
    category: "binary-concept",
    difficulty: "easy",
    question: "Why do computers use binary (0s and 1s) instead of decimal (0\u20139)?",
    options: [
      "Computers were invented by mathematicians who liked binary",
      "Electronic switches have exactly two stable states: ON and OFF",
      "Binary is easier for humans to read",
      "Decimal numbers are too large to store"
    ],
    correctAnswer: 1,
    explanation: "Every transistor inside a chip works like a tiny switch \u2014 it is either ON (conducting) or OFF (blocking). These two states map perfectly to 1 and 0. Binary is the natural language of electronics."
  },
  {
    id: 2,
    category: "binary-concept",
    difficulty: "easy",
    question: "What is the binary representation of the decimal number 5?",
    context: "Remember: 4 = 100, 2 = 010, 1 = 001",
    options: ["100", "101", "110", "111"],
    correctAnswer: 1,
    explanation: "5 = 4 + 1 = 2\xB2 + 2\u2070 = 101 in binary. You can verify: 1\xD74 + 0\xD72 + 1\xD71 = 5."
  },
  {
    id: 3,
    category: "binary-concept",
    difficulty: "easy",
    question: "What decimal value does the binary number 1010 represent?",
    options: ["8", "9", "10", "12"],
    correctAnswer: 2,
    explanation: "1010 = 1\xD78 + 0\xD74 + 1\xD72 + 0\xD71 = 8 + 2 = 10."
  },
  {
    id: 4,
    category: "binary-concept",
    difficulty: "medium",
    question: "Why does binary addition always go from right to left (LSB to MSB)?",
    options: [
      "It is just a convention with no logical reason",
      "Carry bits are generated at each position and passed to the next higher bit",
      "Computers can only read from right to left",
      "The most significant bit is always 0"
    ],
    correctAnswer: 1,
    explanation: 'When two bits add up to 2 or more, the excess is "carried" into the next column on the left \u2014 just like in decimal addition. So we must process each column before we know what to carry into the next.'
  },
  {
    id: 5,
    category: "binary-concept",
    difficulty: "medium",
    question: "What is 0111 + 0001 in binary?",
    options: ["0111", "1000", "1001", "1010"],
    correctAnswer: 1,
    explanation: "7 + 1 = 8 in decimal. 8 in binary is 1000. The carry ripples all the way from bit 0 to bit 3."
  },
  // ── Gate Identification ──────────────────────────────────────
  {
    id: 6,
    category: "gate-identification",
    difficulty: "easy",
    question: "Which gate outputs 1 only when BOTH inputs are 1?",
    options: ["OR gate", "AND gate", "XOR gate", "NOT gate"],
    correctAnswer: 1,
    explanation: "The AND gate implements logical conjunction: output = A AND B. Only A=1, B=1 gives output 1."
  },
  {
    id: 7,
    category: "gate-identification",
    difficulty: "easy",
    question: "Which gate outputs 1 when the inputs are DIFFERENT?",
    options: ["AND gate", "OR gate", "XOR gate", "NAND gate"],
    correctAnswer: 2,
    explanation: "XOR (Exclusive OR) outputs 1 when one input is 1 and the other is 0. When both are the same it outputs 0."
  },
  {
    id: 8,
    category: "gate-identification",
    difficulty: "medium",
    question: "A NAND gate is equivalent to which combination?",
    options: [
      "AND gate followed by a NOT gate",
      "OR gate followed by a NOT gate",
      "Two AND gates in series",
      "An XOR gate followed by a NOT gate"
    ],
    correctAnswer: 0,
    explanation: "NAND = NOT(AND). Its output is the complement of an AND gate. NAND is universal \u2014 any other gate can be built from NAND gates alone."
  },
  {
    id: 9,
    category: "gate-identification",
    difficulty: "hard",
    question: "How many NAND gates are needed to build a NOT gate?",
    options: ["1", "2", "3", "4"],
    correctAnswer: 0,
    explanation: "Connect both inputs of a single NAND gate together: NAND(A, A) = NOT(A AND A) = NOT(A). One NAND gate is enough."
  },
  // ── Gate Output ──────────────────────────────────────────────
  {
    id: 10,
    category: "gate-output",
    difficulty: "easy",
    question: "What is the output of an OR gate when A=0 and B=0?",
    options: ["0", "1", "Depends on carry", "Undefined"],
    correctAnswer: 0,
    explanation: "OR outputs 1 if at least one input is 1. When both are 0, the output is 0."
  },
  {
    id: 11,
    category: "gate-output",
    difficulty: "medium",
    question: "What is XOR(1, 1)?",
    options: ["0", "1", "2", "Error"],
    correctAnswer: 0,
    explanation: "XOR outputs 1 only when inputs differ. Both 1 means they are the same, so XOR(1,1) = 0. This is why XOR computes the sum bit of a half adder (without carry)."
  },
  {
    id: 12,
    category: "gate-output",
    difficulty: "medium",
    question: "What is AND(1, 0)?",
    options: ["0", "1", "10", "Undefined"],
    correctAnswer: 0,
    explanation: "AND requires both inputs to be 1. Since one input is 0, AND(1, 0) = 0."
  },
  // ── Adder Output ─────────────────────────────────────────────
  {
    id: 13,
    category: "adder-output",
    difficulty: "medium",
    question: "In a half adder, what are Sum and Carry when A=1 and B=1?",
    context: "Half adder: Sum = XOR(A,B), Carry = AND(A,B)",
    options: [
      "Sum=0, Carry=0",
      "Sum=1, Carry=0",
      "Sum=0, Carry=1",
      "Sum=1, Carry=1"
    ],
    correctAnswer: 2,
    explanation: 'XOR(1,1) = 0 (same inputs \u2192 0), AND(1,1) = 1. So Sum=0, Carry=1. This is 1+1=2 in decimal, which is "10" in binary \u2014 sum bit 0, carry bit 1.'
  },
  {
    id: 14,
    category: "adder-output",
    difficulty: "medium",
    question: "What is the difference between a half adder and a full adder?",
    options: [
      "A full adder handles larger numbers",
      "A full adder has an extra Carry-In input",
      "A half adder uses fewer transistors",
      "A full adder outputs two bits instead of one"
    ],
    correctAnswer: 1,
    explanation: "A half adder takes only two bits (A, B). A full adder takes three bits (A, B, Carry-In) so it can be chained in a ripple-carry adder to handle the carry from the previous bit position."
  },
  {
    id: 15,
    category: "adder-output",
    difficulty: "hard",
    question: "In a full adder with A=1, B=1, Carry-In=1, what are Sum and Carry-Out?",
    context: "Full adder: Sum = XOR(XOR(A,B), Cin), Cout = OR(AND(A,B), AND(XOR(A,B), Cin))",
    options: [
      "Sum=0, Cout=0",
      "Sum=1, Cout=1",
      "Sum=0, Cout=1",
      "Sum=1, Cout=0"
    ],
    correctAnswer: 1,
    explanation: "1+1+1 = 3 in decimal = 11 in binary. Sum bit = 1, Carry-Out = 1. Verify: XOR(XOR(1,1),1) = XOR(0,1) = 1 \u2713, Cout = OR(AND(1,1), AND(0,1)) = OR(1,0) = 1 \u2713."
  },
  // ── Carry Propagation ────────────────────────────────────────
  {
    id: 16,
    category: "carry-propagation",
    difficulty: "medium",
    question: "In a 4-bit ripple-carry adder, where does the first carry-in come from?",
    options: [
      "The MSB full adder",
      "It is always 0 (tied to ground)",
      "The previous addition operation",
      "A separate carry generator circuit"
    ],
    correctAnswer: 1,
    explanation: "The LSB (rightmost) full adder's Carry-In is always wired to 0 because there is no previous bit to carry from. Carry only starts propagating once the first full adder produces a carry-out."
  },
  {
    id: 17,
    category: "carry-propagation",
    difficulty: "hard",
    question: 'Why is a ripple-carry adder called "ripple-carry"?',
    options: [
      "Because the carry signal ripples from the MSB to the LSB",
      "Because the carry signal ripples from the LSB to the MSB, one stage at a time",
      "Because it uses ripple filters to smooth the output",
      "Because carries can propagate in both directions"
    ],
    correctAnswer: 1,
    explanation: 'Each full adder must wait for the carry from the previous stage before computing its output. The carry "ripples" (propagates) from bit 0 (LSB) through to bit N-1 (MSB), which is why this design is slow for wide adders.'
  },
  // ── Transistor Concept ───────────────────────────────────────
  {
    id: 18,
    category: "transistor-concept",
    difficulty: "easy",
    question: "What does a transistor act as in a digital circuit?",
    options: [
      "A tiny light bulb",
      "An electronic switch that can be turned ON or OFF",
      "A miniature battery",
      "A digital memory cell"
    ],
    correctAnswer: 1,
    explanation: "In digital circuits, transistors operate as electronic switches. A small control voltage (gate/base) turns the transistor ON (allowing current to flow) or OFF (blocking current), representing 1 and 0."
  },
  {
    id: 19,
    category: "transistor-concept",
    difficulty: "medium",
    question: "Roughly how many transistors does a modern NAND gate consist of?",
    options: ["1", "2", "4", "32"],
    correctAnswer: 2,
    explanation: "A standard CMOS NAND gate uses 4 transistors: 2 PMOS in parallel (pull-up network) and 2 NMOS in series (pull-down network). This is one of the most fundamental building blocks in digital chips."
  },
  {
    id: 20,
    category: "transistor-concept",
    difficulty: "hard",
    question: "What does CMOS stand for in the context of transistors?",
    options: [
      "Compact Metal Oxide Semiconductor",
      "Complementary Metal-Oxide-Semiconductor",
      "Controlled Metal-Oxide Switch",
      "Central Memory Operating System"
    ],
    correctAnswer: 1,
    explanation: "CMOS (Complementary Metal-Oxide-Semiconductor) uses complementary pairs of p-type and n-type transistors. This pairing means only one transistor type conducts at a time, resulting in very low static power consumption."
  }
];
var QuizService = class _QuizService {
  constructor() {
    this.state = signal({
      questions: [],
      currentQuestion: 0,
      score: 0,
      answers: [],
      completed: false,
      showExplanation: false
    });
    this.currentQ = computed(() => {
      const s = this.state();
      return s.questions[s.currentQuestion] ?? null;
    });
    this.progress = computed(() => {
      const s = this.state();
      if (s.questions.length === 0)
        return 0;
      return Math.round(s.currentQuestion / s.questions.length * 100);
    });
    this.scorePercent = computed(() => {
      const s = this.state();
      if (s.questions.length === 0)
        return 0;
      return Math.round(s.score / s.questions.length * 100);
    });
  }
  // ── Public API ────────────────────────────────────────────────
  /** Start a new quiz session, optionally filtering by category/difficulty */
  startQuiz(count = 10) {
    const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, count);
    this.state.set({
      questions: shuffled,
      currentQuestion: 0,
      score: 0,
      answers: new Array(shuffled.length).fill(null),
      completed: false,
      showExplanation: false
    });
  }
  /** Submit an answer for the current question */
  answer(chosenIndex) {
    this.state.update((s) => {
      const q = s.questions[s.currentQuestion];
      if (!q)
        return s;
      const newAnswers = [...s.answers];
      newAnswers[s.currentQuestion] = chosenIndex;
      const isCorrect = chosenIndex === q.correctAnswer;
      return __spreadProps(__spreadValues({}, s), {
        answers: newAnswers,
        score: isCorrect ? s.score + 1 : s.score,
        showExplanation: true
      });
    });
  }
  /** Advance to the next question (or mark as completed) */
  next() {
    this.state.update((s) => {
      const nextQ = s.currentQuestion + 1;
      if (nextQ >= s.questions.length) {
        return __spreadProps(__spreadValues({}, s), { completed: true, showExplanation: false });
      }
      return __spreadProps(__spreadValues({}, s), { currentQuestion: nextQ, showExplanation: false });
    });
  }
  /** Restart with a fresh shuffle */
  restart() {
    this.startQuiz();
  }
  getAllQuestions() {
    return ALL_QUESTIONS;
  }
  static {
    this.\u0275fac = function QuizService_Factory(t) {
      return new (t || _QuizService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/quiz/quiz.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function QuizComponent_Conditional_8_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r2.val);
  }
}
function QuizComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5);
    \u0275\u0275text(2, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Ready to test yourself?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, " The quiz draws 10 random questions from a pool of 20, covering all topics. You'll see the correct answer and an explanation after each response. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6);
    \u0275\u0275repeaterCreate(8, QuizComponent_Conditional_8_For_9_Template, 7, 3, "div", 7, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function QuizComponent_Conditional_8_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startQuiz());
    });
    \u0275\u0275text(11, "Start Quiz \u25B6");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.quizInfo);
  }
}
function QuizComponent_Conditional_9_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r4.context);
  }
}
function QuizComponent_Conditional_9_Conditional_10_For_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_Conditional_9_Conditional_10_For_13_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31);
    \u0275\u0275text(1, "\u2717");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_Conditional_9_Conditional_10_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function QuizComponent_Conditional_9_Conditional_10_For_13_Template_button_click_0_listener() {
      const $index_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectAnswer($index_r6));
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, QuizComponent_Conditional_9_Conditional_10_For_13_Conditional_5_Template, 2, 0, "span", 30)(6, QuizComponent_Conditional_9_Conditional_10_For_13_Conditional_6_Template, 2, 0, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    const $index_r6 = ctx.$index;
    const q_r4 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("option-selected", ctx_r2.selectedAnswer() === $index_r6)("option-correct", ctx_r2.showExplanation() && $index_r6 === q_r4.correctAnswer)("option-wrong", ctx_r2.showExplanation() && ctx_r2.selectedAnswer() === $index_r6 && $index_r6 !== q_r4.correctAnswer);
    \u0275\u0275property("disabled", ctx_r2.showExplanation());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.optionLetters[$index_r6]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(opt_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, ctx_r2.showExplanation() && $index_r6 === q_r4.correctAnswer ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r2.showExplanation() && ctx_r2.selectedAnswer() === $index_r6 && $index_r6 !== q_r4.correctAnswer ? 6 : -1);
  }
}
function QuizComponent_Conditional_9_Conditional_10_Conditional_14_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong", 37);
    \u0275\u0275text(3, "Correct!");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_Conditional_9_Conditional_10_Conditional_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u274C");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "strong", 38);
    \u0275\u0275text(3, "Not quite.");
    \u0275\u0275elementEnd();
  }
}
function QuizComponent_Conditional_9_Conditional_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    \u0275\u0275template(2, QuizComponent_Conditional_9_Conditional_10_Conditional_14_Conditional_2_Template, 4, 0)(3, QuizComponent_Conditional_9_Conditional_10_Conditional_14_Conditional_3_Template, 4, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 35);
    \u0275\u0275listener("click", function QuizComponent_Conditional_9_Conditional_10_Conditional_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.next());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r4 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("was-correct", ctx_r2.wasCorrect())("was-wrong", !ctx_r2.wasCorrect());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r2.wasCorrect() ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r4.explanation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.currentIdx() >= ctx_r2.totalQs() - 1 ? "See Results \u{1F3C1}" : "Next Question \u2192", " ");
  }
}
function QuizComponent_Conditional_9_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "span", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h3", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, QuizComponent_Conditional_9_Conditional_10_Conditional_10_Template, 2, 1, "div", 23);
    \u0275\u0275elementStart(11, "div", 24);
    \u0275\u0275repeaterCreate(12, QuizComponent_Conditional_9_Conditional_10_For_13_Template, 7, 11, "button", 25, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, QuizComponent_Conditional_9_Conditional_10_Conditional_14_Template, 8, 7, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.categoryLabel(q_r4.category));
    \u0275\u0275advance();
    \u0275\u0275classMap("diff-" + q_r4.difficulty);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r4.difficulty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Q", ctx_r2.currentIdx() + 1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r4.question);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, q_r4.context ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(q_r4.options);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, ctx_r2.showExplanation() ? 14 : -1);
  }
}
function QuizComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275element(2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6, " Score: ");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, QuizComponent_Conditional_9_Conditional_10_Template, 15, 8, "div", 17);
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.quiz.progress(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" Question ", ctx_r2.currentIdx() + 1, " of ", ctx_r2.totalQs(), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.score());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", ctx_r2.currentIdx(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(10, (tmp_5_0 = ctx_r2.currentQ()) ? 10 : -1, tmp_5_0);
  }
}
function QuizComponent_Conditional_10_For_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Correct: ", item_r10.correctAnswer, " ");
  }
}
function QuizComponent_Conditional_10_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "div", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, QuizComponent_Conditional_10_For_19_Conditional_6_Template, 2, 1, "div", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275classProp("review-correct", item_r10.correct)("review-wrong", !item_r10.correct);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.correct ? "\u2713" : "\u2717");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.question);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, !item_r10.correct ? 6 : -1);
  }
}
function QuizComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Quiz Complete!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 40)(6, "div", 41)(7, "span", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 45);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 46)(16, "h4");
    \u0275\u0275text(17, "Review");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(18, QuizComponent_Conditional_10_For_19_Template, 7, 7, "div", 47, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 48)(21, "button", 49);
    \u0275\u0275listener("click", function QuizComponent_Conditional_10_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.startQuiz());
    });
    \u0275\u0275text(22, "Try Again \u{1F504}");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.scorePercent() >= 80 ? "\u{1F3C6}" : ctx_r2.scorePercent() >= 60 ? "\u{1F44D}" : "\u{1F4DA}", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.score());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("/ ", ctx_r2.totalQs(), "");
    \u0275\u0275advance();
    \u0275\u0275classProp("high", ctx_r2.scorePercent() >= 80)("mid", ctx_r2.scorePercent() >= 60 && ctx_r2.scorePercent() < 80)("low", ctx_r2.scorePercent() < 60);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.scorePercent(), "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.scoreMessage());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.reviewItems());
  }
}
var QuizComponent = class _QuizComponent {
  constructor() {
    this.quiz = inject(QuizService);
    this.optionLetters = ["A", "B", "C", "D"];
    this.quizInfo = [
      { icon: "\u2753", label: "Questions", val: "10 random" },
      { icon: "\u{1F3F7}\uFE0F", label: "Topics", val: "6 categories" },
      { icon: "\u23F1\uFE0F", label: "Timed?", val: "No \u2014 take your time" },
      { icon: "\u{1F4A1}", label: "Feedback", val: "Instant explanations" }
    ];
    this.quizStarted = signal(false);
    this.currentQ = this.quiz.currentQ;
    this.currentIdx = computed(() => this.quiz.state().currentQuestion);
    this.totalQs = computed(() => this.quiz.state().questions.length);
    this.score = computed(() => this.quiz.state().score);
    this.isCompleted = computed(() => this.quiz.state().completed);
    this.showExplanation = computed(() => this.quiz.state().showExplanation);
    this.scorePercent = this.quiz.scorePercent;
    this.selectedAnswer = computed(() => {
      const s = this.quiz.state();
      return s.answers[s.currentQuestion] ?? null;
    });
    this.wasCorrect = computed(() => {
      const q = this.currentQ();
      const ans = this.selectedAnswer();
      return q !== null && ans !== null && ans === q.correctAnswer;
    });
    this.reviewItems = computed(() => {
      const s = this.quiz.state();
      return s.questions.map((q, i) => ({
        question: q.question,
        correct: s.answers[i] === q.correctAnswer,
        correctAnswer: q.options[q.correctAnswer]
      }));
    });
    this.scoreMessage = computed(() => {
      const p = this.scorePercent();
      if (p >= 90)
        return "\u{1F31F} Outstanding! You have a deep understanding of digital logic.";
      if (p >= 80)
        return "\u{1F389} Great job! You know your gates and adders well.";
      if (p >= 60)
        return "\u{1F44D} Good effort! A bit more practice on carries and transistors will help.";
      if (p >= 40)
        return "\u{1F4D6} Keep going! Review the Gates Playground and Adder sections.";
      return "\u{1F501} Don't worry \u2014 start with Binary Basics and work through each section step by step.";
    });
  }
  // ── Actions ───────────────────────────────────────────────────
  startQuiz() {
    this.quiz.startQuiz(10);
    this.quizStarted.set(true);
  }
  selectAnswer(index) {
    if (this.showExplanation())
      return;
    this.quiz.answer(index);
  }
  next() {
    this.quiz.next();
  }
  categoryLabel(cat) {
    const map = {
      "binary-concept": "Binary",
      "gate-identification": "Gates",
      "gate-output": "Gate Output",
      "adder-output": "Adders",
      "carry-propagation": "Carry",
      "transistor-concept": "Transistors"
    };
    return map[cat] ?? cat;
  }
  static {
    this.\u0275fac = function QuizComponent_Factory(t) {
      return new (t || _QuizComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizComponent, selectors: [["app-quiz"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 3, consts: [[1, "page", "fade-in"], [1, "section-header"], [1, "label"], [1, "start-screen", "card"], [1, "results-card", "card"], [1, "start-icon"], [1, "quiz-info-grid"], [1, "qi-card"], [1, "btn", "btn-primary", "start-btn", 3, "click"], [1, "qi-icon"], [1, "qi-label"], [1, "qi-val"], [1, "progress-header"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-text"], [1, "score-live"], [1, "question-card", "card"], [1, "q-meta"], [1, "q-category"], [1, "q-difficulty"], [1, "q-number", "mono", "text-xs", "text-muted"], [1, "q-text"], [1, "q-context", "mono", "text-sm"], [1, "options-grid"], [1, "option-btn", 3, "option-selected", "option-correct", "option-wrong", "disabled"], [1, "explanation-reveal", 3, "was-correct", "was-wrong"], [1, "option-btn", 3, "click", "disabled"], [1, "opt-letter"], [1, "opt-text"], [1, "opt-check"], [1, "opt-x"], [1, "explanation-reveal"], [1, "explain-header"], [1, "explain-text"], [1, "btn", "btn-primary", "next-btn", 3, "click"], [1, "explain-icon"], [1, "text-success"], [1, "text-error"], [1, "results-icon"], [1, "score-display"], [1, "score-big"], [1, "score-num"], [1, "score-denom"], [1, "score-percent"], [1, "score-msg"], [1, "review-list"], [1, "review-item", 3, "review-correct", "review-wrong"], [1, "results-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "review-item"], [1, "review-icon"], [1, "review-detail"], [1, "review-q", "text-sm"], [1, "review-answer", "text-xs", "text-muted"]], template: function QuizComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3, "Layer 8 \u2014 Quiz Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2");
        \u0275\u0275text(5, "Test Your Knowledge");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "20 questions covering binary, logic gates, adders, and transistors. Instant explanations after each answer.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, QuizComponent_Conditional_8_Template, 12, 0, "div", 3)(9, QuizComponent_Conditional_9_Template, 11, 7)(10, QuizComponent_Conditional_10_Template, 23, 11, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(8, !ctx.quizStarted() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(9, ctx.quizStarted() && !ctx.isCompleted() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.isCompleted() ? 10 : -1);
      }
    }, styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.start-screen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 2.5rem 2rem;\n  text-align: center;\n}\n.start-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.start-screen[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.quiz-info-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.qi-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.75rem 1.25rem;\n  background: var(--bg-input);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius);\n}\n.qi-icon[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.qi-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.qi-val[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--text-primary);\n}\n.start-btn[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  padding: 0.75rem 2rem;\n  font-size: 1rem;\n}\n.progress-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.progress-track[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: var(--border-default);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      var(--accent),\n      var(--sig-high));\n  border-radius: 3px;\n  transition: width 400ms var(--ease-out);\n}\n.progress-text[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.score-live[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  white-space: nowrap;\n}\n.question-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.q-category[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  padding: 0.15rem 0.6rem;\n  border-radius: 999px;\n  background: var(--accent-dim);\n  color: var(--accent);\n  border: 1px solid var(--border-accent);\n  font-weight: 600;\n}\n.q-difficulty[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0.15rem 0.5rem;\n  border-radius: 999px;\n  font-weight: 600;\n  text-transform: capitalize;\n  &.diff-easy {\n    background: #10b98122;\n    color: var(--success);\n    border: 1px solid var(--success);\n  }\n  &.diff-medium {\n    background: #f59e0b22;\n    color: var(--warning);\n    border: 1px solid var(--warning);\n  }\n  &.diff-hard {\n    background: #ef444422;\n    color: var(--error);\n    border: 1px solid var(--error);\n  }\n}\n.q-text[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  line-height: 1.5;\n  color: var(--text-primary);\n}\n.q-context[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.9rem;\n  background: var(--bg-input);\n  border: 1px solid var(--border-subtle);\n  border-radius: var(--radius);\n  color: var(--text-code);\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n}\n.option-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 1rem;\n  background: var(--bg-input);\n  border: 1.5px solid var(--border-subtle);\n  border-radius: var(--radius);\n  cursor: pointer;\n  text-align: left;\n  color: var(--text-secondary);\n  font-size: 0.9rem;\n  transition: all 180ms;\n  &:not(:disabled):hover {\n    border-color: var(--accent);\n    color: var(--text-primary);\n    background: var(--accent-dim);\n  }\n  &.option-selected {\n    border-color: var(--accent);\n    color: var(--text-primary);\n  }\n  &.option-correct {\n    border-color: var(--success) !important;\n    background: #10b98122 !important;\n    color: var(--success) !important;\n  }\n  &.option-wrong {\n    border-color: var(--error) !important;\n    background: #ef444422 !important;\n    color: var(--error) !important;\n  }\n  &:disabled {\n    cursor: default;\n  }\n}\n.opt-letter[_ngcontent-%COMP%] {\n  width: 1.6rem;\n  height: 1.6rem;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: var(--border-default);\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--text-muted);\n}\n.opt-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.opt-check[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--success);\n  font-size: 1rem;\n}\n.opt-x[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: var(--error);\n  font-size: 1rem;\n}\n.explanation-reveal[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg);\n  padding: 1rem 1.25rem;\n  border: 1px solid;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  &.was-correct {\n    background: #10b98110;\n    border-color: var(--success);\n  }\n  &.was-wrong {\n    background: #ef444410;\n    border-color: var(--error);\n  }\n}\n.explain-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.explain-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.explain-text[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: var(--text-secondary);\n  line-height: 1.65;\n}\n.next-btn[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.results-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1.25rem;\n  padding: 2rem;\n  text-align: center;\n}\n.results-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n}\n.score-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.score-big[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n}\n.score-num[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 800;\n  font-family: var(--font-code);\n  color: var(--text-primary);\n}\n.score-denom[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--text-muted);\n  font-family: var(--font-code);\n}\n.score-percent[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  font-family: var(--font-code);\n  &.high {\n    color: var(--success);\n  }\n  &.mid {\n    color: var(--warning);\n  }\n  &.low {\n    color: var(--error);\n  }\n}\n.score-msg[_ngcontent-%COMP%] {\n  max-width: 420px;\n  font-size: 0.95rem;\n}\n.review-list[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  text-align: left;\n}\n.review-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n.review-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  padding: 0.5rem 0.75rem;\n  border-radius: var(--radius);\n  border: 1px solid var(--border-subtle);\n  background: var(--bg-input);\n  &.review-correct {\n    border-color: var(--success);\n    background: #10b98108;\n  }\n  &.review-wrong {\n    border-color: var(--error);\n    background: #ef444408;\n  }\n}\n.review-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.review-detail[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1rem;\n}\n.review-q[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n}\n.review-answer[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.results-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=quiz.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizComponent, { className: "QuizComponent", filePath: "src\\app\\features\\quiz\\quiz.component.ts", lineNumber: 299 });
})();
export {
  QuizComponent
};
//# sourceMappingURL=chunk-LZVABU5O.js.map
