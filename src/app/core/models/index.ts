// ================================================================
//  Core domain models for the Transistor Simulator
//  All simulation state is derived from these pure data types.
// ================================================================

/** A single-bit value, optionally annotated for display */
export interface BitSignal {
  value: 0 | 1;
  label?: string;
  /** true while this wire/signal is being highlighted in animation */
  active?: boolean;
}

/** All supported logic gate types */
export type GateType = 'AND' | 'OR' | 'XOR' | 'NOT' | 'NAND' | 'NOR';

/** Snapshot of one logic gate: inputs, output, and highlight state */
export interface GateState {
  type: GateType;
  inputs: (0 | 1)[];
  output: 0 | 1;
  highlighted: boolean;
}

/** The internal wiring of a half adder:
 *  Sum  = XOR(A, B)
 *  Carry = AND(A, B)
 */
export interface HalfAdderState {
  a: 0 | 1;
  b: 0 | 1;
  sum: 0 | 1;
  carry: 0 | 1;
  xorGate: GateState;
  andGate: GateState;
  /** Which SVG wires are carrying a '1' signal right now */
  activeWires: Set<string>;
}

/** Full adder = HA1 + HA2 + OR gate
 *  Sum    = XOR(XOR(A, B), Cin)
 *  Carry  = OR(AND(A,B), AND(XOR(A,B), Cin))
 */
export interface FullAdderState {
  a: 0 | 1;
  b: 0 | 1;
  carryIn: 0 | 1;
  sum: 0 | 1;
  carryOut: 0 | 1;
  ha1: HalfAdderState;
  ha2: HalfAdderState;
  orGate: GateState;
  activeWires: Set<string>;
}

/** One column of a ripple-carry addition (one full adder's work) */
export interface BitAdditionStep {
  position: number;   // 0 = LSB
  aBit: 0 | 1;
  bBit: 0 | 1;
  carryIn: 0 | 1;
  sum: 0 | 1;
  carryOut: 0 | 1;
  active: boolean;    // highlighted in the animation sweep
}

/** Complete state of the ripple-carry adder panel */
export interface RippleAdderState {
  bits: 4 | 8;
  numberA: number;
  numberB: number;
  binaryA: string;    // MSB-first display string
  binaryB: string;
  steps: BitAdditionStep[];
  result: number;
  resultBinary: string;
  overflow: boolean;
  /** Index of the currently animated full-adder (0 = LSB) */
  currentStep: number;
  isAnimating: boolean;
}

/** Speed levels for animation (1 = slowest, 5 = fastest) */
export type AnimationSpeed = 1 | 2 | 3 | 4 | 5;

/** Milliseconds per animation step for each speed level */
export const SPEED_MS: Record<AnimationSpeed, number> = {
  1: 2000,
  2: 1200,
  3: 700,
  4: 350,
  5: 120,
};

/** Difficulty tier for quiz questions */
export type QuizDifficulty = 'easy' | 'medium' | 'hard';

/** Type of knowledge being tested */
export type QuizCategory =
  | 'binary-concept'
  | 'gate-identification'
  | 'gate-output'
  | 'adder-output'
  | 'carry-propagation'
  | 'transistor-concept';

/** One quiz question with multiple-choice answers */
export interface QuizQuestion {
  id: number;
  category: QuizCategory;
  difficulty: QuizDifficulty;
  question: string;
  /** Optional extra context shown below the question */
  context?: string;
  options: string[];
  /** Zero-based index of the correct option */
  correctAnswer: number;
  /** Shown after the user answers */
  explanation: string;
}

/** Live state of a quiz session */
export interface QuizState {
  questions: QuizQuestion[];
  currentQuestion: number;
  score: number;
  /** null = not yet answered; number = chosen option index */
  answers: (number | null)[];
  completed: boolean;
  showExplanation: boolean;
}

/** Simplified conceptual transistor (not a SPICE model!) */
export interface TransistorState {
  /** The gate/base control signal */
  gateSignal: 0 | 1;
  /** Whether current is flowing (transistor is "on") */
  isOn: boolean;
  /** What comes out the drain/collector */
  output: 0 | 1;
  label?: string;
}

/** Preset addition examples shown as quick-load buttons */
export interface PresetExample {
  label: string;
  a: number;
  b: number;
  description: string;
}

/** One row of a truth table */
export interface TruthTableRow {
  inputs: (0 | 1)[];
  outputs: (0 | 1)[];
  /** true when inputs match current live toggle state */
  highlighted?: boolean;
}

/** Complete truth table definition */
export interface TruthTable {
  inputLabels: string[];
  outputLabels: string[];
  rows: TruthTableRow[];
}

/** One numbered explanation step shown in the learning panel */
export interface ExplanationStep {
  id: number;
  title: string;
  body: string;
  /** Optional set of SVG element IDs to highlight */
  highlight?: string[];
}
