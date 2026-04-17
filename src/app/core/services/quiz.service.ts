import { Injectable, signal, computed } from '@angular/core';
import { QuizQuestion, QuizState } from '../models';

/** All quiz questions covering all 8 learning layers */
const ALL_QUESTIONS: QuizQuestion[] = [
  // ── Binary Concepts ─────────────────────────────────────────
  {
    id: 1,
    category: 'binary-concept',
    difficulty: 'easy',
    question: 'Why do computers use binary (0s and 1s) instead of decimal (0–9)?',
    options: [
      'Computers were invented by mathematicians who liked binary',
      'Electronic switches have exactly two stable states: ON and OFF',
      'Binary is easier for humans to read',
      'Decimal numbers are too large to store',
    ],
    correctAnswer: 1,
    explanation:
      'Every transistor inside a chip works like a tiny switch — it is either ON (conducting) or OFF (blocking). These two states map perfectly to 1 and 0. Binary is the natural language of electronics.',
  },
  {
    id: 2,
    category: 'binary-concept',
    difficulty: 'easy',
    question: 'What is the binary representation of the decimal number 5?',
    context: 'Remember: 4 = 100, 2 = 010, 1 = 001',
    options: ['100', '101', '110', '111'],
    correctAnswer: 1,
    explanation:
      '5 = 4 + 1 = 2² + 2⁰ = 101 in binary. You can verify: 1×4 + 0×2 + 1×1 = 5.',
  },
  {
    id: 3,
    category: 'binary-concept',
    difficulty: 'easy',
    question: 'What decimal value does the binary number 1010 represent?',
    options: ['8', '9', '10', '12'],
    correctAnswer: 2,
    explanation:
      '1010 = 1×8 + 0×4 + 1×2 + 0×1 = 8 + 2 = 10.',
  },
  {
    id: 4,
    category: 'binary-concept',
    difficulty: 'medium',
    question: 'Why does binary addition always go from right to left (LSB to MSB)?',
    options: [
      'It is just a convention with no logical reason',
      'Carry bits are generated at each position and passed to the next higher bit',
      'Computers can only read from right to left',
      'The most significant bit is always 0',
    ],
    correctAnswer: 1,
    explanation:
      'When two bits add up to 2 or more, the excess is "carried" into the next column on the left — just like in decimal addition. So we must process each column before we know what to carry into the next.',
  },
  {
    id: 5,
    category: 'binary-concept',
    difficulty: 'medium',
    question: 'What is 0111 + 0001 in binary?',
    options: ['0111', '1000', '1001', '1010'],
    correctAnswer: 1,
    explanation:
      '7 + 1 = 8 in decimal. 8 in binary is 1000. The carry ripples all the way from bit 0 to bit 3.',
  },

  // ── Gate Identification ──────────────────────────────────────
  {
    id: 6,
    category: 'gate-identification',
    difficulty: 'easy',
    question: 'Which gate outputs 1 only when BOTH inputs are 1?',
    options: ['OR gate', 'AND gate', 'XOR gate', 'NOT gate'],
    correctAnswer: 1,
    explanation:
      'The AND gate implements logical conjunction: output = A AND B. Only A=1, B=1 gives output 1.',
  },
  {
    id: 7,
    category: 'gate-identification',
    difficulty: 'easy',
    question: 'Which gate outputs 1 when the inputs are DIFFERENT?',
    options: ['AND gate', 'OR gate', 'XOR gate', 'NAND gate'],
    correctAnswer: 2,
    explanation:
      'XOR (Exclusive OR) outputs 1 when one input is 1 and the other is 0. When both are the same it outputs 0.',
  },
  {
    id: 8,
    category: 'gate-identification',
    difficulty: 'medium',
    question: 'A NAND gate is equivalent to which combination?',
    options: [
      'AND gate followed by a NOT gate',
      'OR gate followed by a NOT gate',
      'Two AND gates in series',
      'An XOR gate followed by a NOT gate',
    ],
    correctAnswer: 0,
    explanation:
      'NAND = NOT(AND). Its output is the complement of an AND gate. NAND is universal — any other gate can be built from NAND gates alone.',
  },
  {
    id: 9,
    category: 'gate-identification',
    difficulty: 'hard',
    question: 'How many NAND gates are needed to build a NOT gate?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0,
    explanation:
      'Connect both inputs of a single NAND gate together: NAND(A, A) = NOT(A AND A) = NOT(A). One NAND gate is enough.',
  },

  // ── Gate Output ──────────────────────────────────────────────
  {
    id: 10,
    category: 'gate-output',
    difficulty: 'easy',
    question: 'What is the output of an OR gate when A=0 and B=0?',
    options: ['0', '1', 'Depends on carry', 'Undefined'],
    correctAnswer: 0,
    explanation:
      'OR outputs 1 if at least one input is 1. When both are 0, the output is 0.',
  },
  {
    id: 11,
    category: 'gate-output',
    difficulty: 'medium',
    question: 'What is XOR(1, 1)?',
    options: ['0', '1', '2', 'Error'],
    correctAnswer: 0,
    explanation:
      'XOR outputs 1 only when inputs differ. Both 1 means they are the same, so XOR(1,1) = 0. This is why XOR computes the sum bit of a half adder (without carry).',
  },
  {
    id: 12,
    category: 'gate-output',
    difficulty: 'medium',
    question: 'What is AND(1, 0)?',
    options: ['0', '1', '10', 'Undefined'],
    correctAnswer: 0,
    explanation:
      'AND requires both inputs to be 1. Since one input is 0, AND(1, 0) = 0.',
  },

  // ── Adder Output ─────────────────────────────────────────────
  {
    id: 13,
    category: 'adder-output',
    difficulty: 'medium',
    question: 'In a half adder, what are Sum and Carry when A=1 and B=1?',
    context: 'Half adder: Sum = XOR(A,B), Carry = AND(A,B)',
    options: [
      'Sum=0, Carry=0',
      'Sum=1, Carry=0',
      'Sum=0, Carry=1',
      'Sum=1, Carry=1',
    ],
    correctAnswer: 2,
    explanation:
      'XOR(1,1) = 0 (same inputs → 0), AND(1,1) = 1. So Sum=0, Carry=1. This is 1+1=2 in decimal, which is "10" in binary — sum bit 0, carry bit 1.',
  },
  {
    id: 14,
    category: 'adder-output',
    difficulty: 'medium',
    question: 'What is the difference between a half adder and a full adder?',
    options: [
      'A full adder handles larger numbers',
      'A full adder has an extra Carry-In input',
      'A half adder uses fewer transistors',
      'A full adder outputs two bits instead of one',
    ],
    correctAnswer: 1,
    explanation:
      'A half adder takes only two bits (A, B). A full adder takes three bits (A, B, Carry-In) so it can be chained in a ripple-carry adder to handle the carry from the previous bit position.',
  },
  {
    id: 15,
    category: 'adder-output',
    difficulty: 'hard',
    question: 'In a full adder with A=1, B=1, Carry-In=1, what are Sum and Carry-Out?',
    context: 'Full adder: Sum = XOR(XOR(A,B), Cin), Cout = OR(AND(A,B), AND(XOR(A,B), Cin))',
    options: [
      'Sum=0, Cout=0',
      'Sum=1, Cout=1',
      'Sum=0, Cout=1',
      'Sum=1, Cout=0',
    ],
    correctAnswer: 1,
    explanation:
      '1+1+1 = 3 in decimal = 11 in binary. Sum bit = 1, Carry-Out = 1. Verify: XOR(XOR(1,1),1) = XOR(0,1) = 1 ✓, Cout = OR(AND(1,1), AND(0,1)) = OR(1,0) = 1 ✓.',
  },

  // ── Carry Propagation ────────────────────────────────────────
  {
    id: 16,
    category: 'carry-propagation',
    difficulty: 'medium',
    question: 'In a 4-bit ripple-carry adder, where does the first carry-in come from?',
    options: [
      'The MSB full adder',
      'It is always 0 (tied to ground)',
      'The previous addition operation',
      'A separate carry generator circuit',
    ],
    correctAnswer: 1,
    explanation:
      'The LSB (rightmost) full adder\'s Carry-In is always wired to 0 because there is no previous bit to carry from. Carry only starts propagating once the first full adder produces a carry-out.',
  },
  {
    id: 17,
    category: 'carry-propagation',
    difficulty: 'hard',
    question: 'Why is a ripple-carry adder called "ripple-carry"?',
    options: [
      'Because the carry signal ripples from the MSB to the LSB',
      'Because the carry signal ripples from the LSB to the MSB, one stage at a time',
      'Because it uses ripple filters to smooth the output',
      'Because carries can propagate in both directions',
    ],
    correctAnswer: 1,
    explanation:
      'Each full adder must wait for the carry from the previous stage before computing its output. The carry "ripples" (propagates) from bit 0 (LSB) through to bit N-1 (MSB), which is why this design is slow for wide adders.',
  },

  // ── Transistor Concept ───────────────────────────────────────
  {
    id: 18,
    category: 'transistor-concept',
    difficulty: 'easy',
    question: 'What does a transistor act as in a digital circuit?',
    options: [
      'A tiny light bulb',
      'An electronic switch that can be turned ON or OFF',
      'A miniature battery',
      'A digital memory cell',
    ],
    correctAnswer: 1,
    explanation:
      'In digital circuits, transistors operate as electronic switches. A small control voltage (gate/base) turns the transistor ON (allowing current to flow) or OFF (blocking current), representing 1 and 0.',
  },
  {
    id: 19,
    category: 'transistor-concept',
    difficulty: 'medium',
    question: 'Roughly how many transistors does a modern NAND gate consist of?',
    options: ['1', '2', '4', '32'],
    correctAnswer: 2,
    explanation:
      'A standard CMOS NAND gate uses 4 transistors: 2 PMOS in parallel (pull-up network) and 2 NMOS in series (pull-down network). This is one of the most fundamental building blocks in digital chips.',
  },
  {
    id: 20,
    category: 'transistor-concept',
    difficulty: 'hard',
    question: 'What does CMOS stand for in the context of transistors?',
    options: [
      'Compact Metal Oxide Semiconductor',
      'Complementary Metal-Oxide-Semiconductor',
      'Controlled Metal-Oxide Switch',
      'Central Memory Operating System',
    ],
    correctAnswer: 1,
    explanation:
      'CMOS (Complementary Metal-Oxide-Semiconductor) uses complementary pairs of p-type and n-type transistors. This pairing means only one transistor type conducts at a time, resulting in very low static power consumption.',
  },
];

@Injectable({ providedIn: 'root' })
export class QuizService {

  // ── Signals ───────────────────────────────────────────────────
  readonly state = signal<QuizState>({
    questions: [],
    currentQuestion: 0,
    score: 0,
    answers: [],
    completed: false,
    showExplanation: false,
  });

  readonly currentQ = computed(() => {
    const s = this.state();
    return s.questions[s.currentQuestion] ?? null;
  });

  readonly progress = computed(() => {
    const s = this.state();
    if (s.questions.length === 0) return 0;
    return Math.round((s.currentQuestion / s.questions.length) * 100);
  });

  readonly scorePercent = computed(() => {
    const s = this.state();
    if (s.questions.length === 0) return 0;
    return Math.round((s.score / s.questions.length) * 100);
  });

  // ── Public API ────────────────────────────────────────────────

  /** Start a new quiz session, optionally filtering by category/difficulty */
  startQuiz(count = 10): void {
    const shuffled = [...ALL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, count);
    this.state.set({
      questions: shuffled,
      currentQuestion: 0,
      score: 0,
      answers: new Array(shuffled.length).fill(null),
      completed: false,
      showExplanation: false,
    });
  }

  /** Submit an answer for the current question */
  answer(chosenIndex: number): void {
    this.state.update(s => {
      const q = s.questions[s.currentQuestion];
      if (!q) return s;
      const newAnswers = [...s.answers];
      newAnswers[s.currentQuestion] = chosenIndex;
      const isCorrect = chosenIndex === q.correctAnswer;
      return {
        ...s,
        answers: newAnswers,
        score: isCorrect ? s.score + 1 : s.score,
        showExplanation: true,
      };
    });
  }

  /** Advance to the next question (or mark as completed) */
  next(): void {
    this.state.update(s => {
      const nextQ = s.currentQuestion + 1;
      if (nextQ >= s.questions.length) {
        return { ...s, completed: true, showExplanation: false };
      }
      return { ...s, currentQuestion: nextQ, showExplanation: false };
    });
  }

  /** Restart with a fresh shuffle */
  restart(): void {
    this.startQuiz();
  }

  getAllQuestions(): QuizQuestion[] {
    return ALL_QUESTIONS;
  }
}
