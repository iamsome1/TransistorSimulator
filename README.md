# Transistor Simulator

An interactive educational web app that visually explains how computers add numbers — from transistor switches all the way up to a complete 8-bit adder.

Built with **Angular 17** using standalone components and Signals.

---

## Quick Start

```bash
npm install
npm start
```

Then open **http://localhost:4200**

---

## What's Inside

| Section | What you learn |
|---|---|
| Binary Basics | How decimal numbers convert to binary; bit-by-bit addition with carry |
| Gate Playground | Toggle AND, OR, XOR, NOT, NAND, NOR gates live with truth tables |
| Half Adder | How XOR + AND combine to add two bits |
| Full Adder | Adding three bits (A, B, Carry-In) using two half adders + OR |
| Ripple Carry Adder | Chaining 4 or 8 full adders with animated carry propagation |
| Transistor Concept | Interactive transistor switch demo and CMOS NAND gate breakdown |
| Quiz | 10 random questions with instant feedback and explanations |

---

## Tech Stack

- Angular 17 — standalone components, Signals, lazy-loaded routes
- TypeScript — strict mode
- SVG — all circuit diagrams
- Pure CSS — dark theme, no UI library

---

## Project Structure

```
src/app/
├── core/
│   ├── models/         # All TypeScript interfaces
│   └── services/       # binary.service, simulation.service, quiz.service
├── shared/components/  # truth-table, gate-symbol, explanation-panel, sim-controls
└── features/           # One folder per route/section
```

---

## Build for Production

```bash
npm run build
```

Output goes to `dist/transistor-simulator/`.
