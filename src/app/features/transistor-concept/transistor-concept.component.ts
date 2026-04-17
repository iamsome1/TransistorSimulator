import { Component, signal, computed } from '@angular/core';

interface TransistorDemo {
  gateSignal: 0 | 1;
  label: string;
}

@Component({
  selector: 'app-transistor-concept',
  standalone: true,
  template: `
    <div class="page fade-in">

      <div class="section-header">
        <span class="label">Layer 7 — Transistors</span>
        <h2>Transistor Concept</h2>
        <p>
          Everything you've seen — gates, adders, chips — ultimately reduces to
          one incredibly simple component: a transistor acting as a tiny electronic switch.
        </p>
      </div>

      <!-- ── Section 1: What is a transistor ── -->
      <div class="concept-section card">
        <div class="cs-header">
          <span class="cs-number">01</span>
          <h3>What is a transistor?</h3>
        </div>
        <div class="cs-body two-col">
          <div class="cs-text">
            <p>
              A transistor is a semiconductor device with three terminals. In digital
              circuits we treat it as a <strong>voltage-controlled switch</strong>:
            </p>
            <ul class="cs-list">
              <li><strong>Gate (or Base)</strong> — the control input. A small voltage here turns the switch ON or OFF.</li>
              <li><strong>Drain (or Collector)</strong> — where current enters.</li>
              <li><strong>Source (or Emitter)</strong> — where current exits.</li>
            </ul>
            <p class="mt-3">
              When the gate voltage is HIGH (logic 1) → the transistor turns
              <strong class="text-success">ON</strong> (conducts) .<br>
              When the gate voltage is LOW (logic 0) → the transistor turns
              <strong class="text-error">OFF</strong> (blocks current).
            </p>
          </div>

          <!-- Interactive transistor SVG -->
          <div class="transistor-demo">
            <div class="demo-label">Try it — toggle the Gate signal:</div>
            <div class="toggle-row">
              <label class="toggle-switch">
                <input type="checkbox"
                       [checked]="gateSignal() === 1"
                       (change)="toggleGate()" />
                <div class="track"></div>
              </label>
              <span class="tgl-text">Gate = <strong [class.text-success]="gateSignal()===1"
                                                    [class.text-error]="gateSignal()===0">
                {{ gateSignal() === 1 ? '1 (HIGH)' : '0 (LOW)' }}
              </strong></span>
            </div>

            <svg viewBox="0 0 200 260" class="t-svg">

              <!-- Power supply at top -->
              <text x="100" y="18" class="svg-label" text-anchor="middle">VDD (Power)</text>
              <line x1="100" y1="22" x2="100" y2="55"
                    [class]="'wire ' + (gateSignal()===1 ? 'wire--high' : '')" />

              <!-- Drain terminal -->
              <rect x="75" y="55" width="50" height="12" rx="3"
                    [attr.fill]="gateSignal()===1 ? '#00ff8822' : 'var(--bg-input)'"
                    [attr.stroke]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--border-default)'"
                    stroke-width="1.5" />
              <text x="100" y="65" class="svg-label" text-anchor="middle" font-size="8">Drain</text>

              <!-- Transistor body -->
              <rect x="65" y="80" width="70" height="80" rx="8"
                    [attr.fill]="gateSignal()===1 ? '#002a12' : 'var(--gate-fill)'"
                    [attr.stroke]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--border-default)'"
                    stroke-width="2" />

              <!-- Transistor symbol inside body -->
              <line x1="100" y1="95"  x2="100" y2="145"
                    [attr.stroke]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--text-muted)'"
                    stroke-width="3" />
              <line x1="88"  y1="105" x2="100" y2="105"
                    [attr.stroke]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--text-muted)'"
                    stroke-width="2.5" />
              <line x1="88"  y1="135" x2="100" y2="135"
                    [attr.stroke]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--text-muted)'"
                    stroke-width="2.5" />
              <!-- Gate line -->
              <line x1="65" y1="120" x2="82" y2="120"
                    [class]="'wire ' + (gateSignal()===1 ? 'wire--high' : '')" />
              <line x1="82" y1="100" x2="82" y2="140"
                    [attr.stroke]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--border-default)'"
                    stroke-width="3" />

              <!-- Gate label -->
              <text x="48" y="124" class="svg-label" text-anchor="end" font-size="9">Gate</text>

              <!-- ON/OFF status text -->
              <text x="100" y="124" class="svg-label" text-anchor="middle" font-size="11" font-weight="bold"
                    [attr.fill]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--error)'">
                {{ gateSignal()===1 ? 'ON' : 'OFF' }}
              </text>

              <!-- Source terminal -->
              <rect x="75" y="173" width="50" height="12" rx="3"
                    [attr.fill]="gateSignal()===1 ? '#00ff8822' : 'var(--bg-input)'"
                    [attr.stroke]="gateSignal()===1 ? 'var(--sig-high)' : 'var(--border-default)'"
                    stroke-width="1.5" />
              <text x="100" y="183" class="svg-label" text-anchor="middle" font-size="8">Source</text>

              <!-- Output wire -->
              <line x1="100" y1="185" x2="100" y2="220"
                    [class]="'wire ' + (gateSignal()===1 ? 'wire--high wire--flowing' : '')" />

              <!-- Ground -->
              <line x1="80" y1="220" x2="120" y2="220"
                    stroke="var(--text-muted)" stroke-width="2" />
              <line x1="88"  y1="226" x2="112" y2="226"
                    stroke="var(--text-muted)" stroke-width="1.5" />
              <line x1="94"  y1="232" x2="106" y2="232"
                    stroke="var(--text-muted)" stroke-width="1" />
              <text x="100" y="248" class="svg-label" text-anchor="middle" font-size="8">GND</text>

              <!-- Gate input arrow + signal dot -->
              <circle cx="44" cy="120" r="5"
                      [class]="'signal-dot ' + (gateSignal()===1 ? 'signal-dot--high' : 'signal-dot--low')" />

            </svg>

            <div class="t-status" [class.t-on]="gateSignal()===1">
              {{ gateSignal()===1
                ? '⚡ Transistor ON — current flows from Drain to Source'
                : '🔴 Transistor OFF — current is blocked'
              }}
            </div>
          </div>
        </div>
      </div>

      <!-- ── Section 2: NAND from transistors ── -->
      <div class="concept-section card">
        <div class="cs-header">
          <span class="cs-number">02</span>
          <h3>Building a NAND gate from 4 transistors</h3>
        </div>
        <div class="cs-body two-col">
          <div class="cs-text">
            <p>
              CMOS logic uses <strong>complementary pairs</strong> of transistors:
              PMOS (turns ON when gate = 0) and NMOS (turns ON when gate = 1).
            </p>
            <p class="mt-2">A CMOS NAND gate uses:</p>
            <ul class="cs-list">
              <li><strong>2 PMOS in parallel</strong> — pull-up network (connect output to VDD when either input is 0)</li>
              <li><strong>2 NMOS in series</strong> — pull-down network (connect output to GND only when both inputs are 1)</li>
            </ul>
            <p class="mt-2">
              Result: output = 0 only when A=1 <em>and</em> B=1. All other cases output = 1. That's NAND.
            </p>

            <div class="nand-tt">
              <table class="truth-table" style="width:auto">
                <thead>
                  <tr><th>A</th><th>B</th><th>NAND</th><th>State</th></tr>
                </thead>
                <tbody>
                  <tr [class.active]="nandA()===0 && nandB()===0">
                    <td>0</td><td>0</td><td class="val-1">1</td><td class="text-xs">Both PMOS ON</td>
                  </tr>
                  <tr [class.active]="nandA()===1 && nandB()===0">
                    <td>1</td><td>0</td><td class="val-1">1</td><td class="text-xs">1 PMOS ON</td>
                  </tr>
                  <tr [class.active]="nandA()===0 && nandB()===1">
                    <td>0</td><td>1</td><td class="val-1">1</td><td class="text-xs">1 PMOS ON</td>
                  </tr>
                  <tr [class.active]="nandA()===1 && nandB()===1">
                    <td>1</td><td>1</td><td class="val-0">0</td><td class="text-xs">Both NMOS ON</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="nand-toggles">
              <label class="toggle-switch">
                <input type="checkbox" [checked]="nandA()===1"
                       (change)="toggleNandA()" />
                <div class="track"></div>
                <span class="tgl-text">A = {{ nandA() }}</span>
              </label>
              <label class="toggle-switch">
                <input type="checkbox" [checked]="nandB()===1"
                       (change)="toggleNandB()" />
                <div class="track"></div>
                <span class="tgl-text">B = {{ nandB() }}</span>
              </label>
              <div class="nand-out" [class.nand-high]="nandOut()===1">
                NAND = {{ nandOut() }}
              </div>
            </div>
          </div>

          <!-- NAND transistor SVG -->
          <div class="nand-svg-wrap">
            <svg viewBox="0 0 220 320" class="nand-svg">
              <text x="110" y="15" text-anchor="middle" class="svg-label" font-size="9" fill="var(--text-muted)">CMOS NAND — 4 Transistors</text>

              <!-- VDD -->
              <text x="110" y="32" text-anchor="middle" class="svg-label" font-size="8">VDD</text>
              <line x1="80" y1="36" x2="140" y2="36" stroke="var(--text-muted)" stroke-width="1.5"/>
              <line x1="80" y1="36" x2="80" y2="52" stroke="var(--text-muted)" stroke-width="1.5"/>
              <line x1="140" y1="36" x2="140" y2="52" stroke="var(--text-muted)" stroke-width="1.5"/>

              <!-- PMOS A (left, circles at gate = active-low) -->
              <rect x="55" y="52" width="50" height="36" rx="5"
                    [attr.fill]="nandA()===0 ? '#00ff8822':'var(--gate-fill)'"
                    [attr.stroke]="nandA()===0 ? 'var(--sig-high)':'var(--border-default)'"
                    stroke-width="1.5"/>
              <text x="80" y="73" text-anchor="middle" class="svg-label" font-size="7">PMOS-A</text>
              <text x="80" y="82" text-anchor="middle" class="svg-label" font-size="7"
                    [attr.fill]="nandA()===0?'var(--sig-high)':'var(--text-muted)'">
                {{ nandA()===0 ? 'ON':'OFF' }}
              </text>
              <!-- Gate A input -->
              <line x1="25" y1="70" x2="55" y2="70"
                    [class]="'wire '+(nandA()===1?'wire--high':'')" />
              <circle cx="20" cy="70" r="4"
                      [class]="'signal-dot '+(nandA()===1?'signal-dot--high':'signal-dot--low')"/>
              <text x="14" y="70" text-anchor="end" class="svg-label" font-size="8">A</text>

              <!-- PMOS B (right) -->
              <rect x="115" y="52" width="50" height="36" rx="5"
                    [attr.fill]="nandB()===0 ? '#00ff8822':'var(--gate-fill)'"
                    [attr.stroke]="nandB()===0 ? 'var(--sig-high)':'var(--border-default)'"
                    stroke-width="1.5"/>
              <text x="140" y="73" text-anchor="middle" class="svg-label" font-size="7">PMOS-B</text>
              <text x="140" y="82" text-anchor="middle" class="svg-label" font-size="7"
                    [attr.fill]="nandB()===0?'var(--sig-high)':'var(--text-muted)'">
                {{ nandB()===0 ? 'ON':'OFF' }}
              </text>
              <!-- Gate B input -->
              <line x1="165" y1="70" x2="195" y2="70"
                    [class]="'wire '+(nandB()===1?'wire--high':'')" />
              <circle cx="200" cy="70" r="4"
                      [class]="'signal-dot '+(nandB()===1?'signal-dot--high':'signal-dot--low')"/>
              <text x="206" y="70" class="svg-label" font-size="8">B</text>

              <!-- PMOS outputs join to output node -->
              <line x1="80" y1="88" x2="80" y2="120" stroke="var(--text-muted)" stroke-width="1.5"/>
              <line x1="140" y1="88" x2="140" y2="120" stroke="var(--text-muted)" stroke-width="1.5"/>
              <line x1="80" y1="120" x2="140" y2="120"
                    [attr.stroke]="nandOut()===1?'var(--sig-high)':'var(--text-muted)'" stroke-width="1.5"/>
              <line x1="110" y1="120" x2="110" y2="140"
                    [class]="'wire '+(nandOut()===1?'wire--high':'')" />

              <!-- Output node + wire to right -->
              <circle cx="110" cy="120" r="4"
                      [class]="'signal-dot '+(nandOut()===1?'signal-dot--high':'signal-dot--low')"/>
              <line x1="110" y1="120" x2="185" y2="120"
                    [class]="'wire '+(nandOut()===1?'wire--high':'')" />
              <text x="190" y="124" class="svg-label" font-size="8"
                    [attr.fill]="nandOut()===1?'var(--sig-high)':'var(--text-muted)'">
                Out={{ nandOut() }}
              </text>

              <!-- NMOS A (top of series stack) -->
              <rect x="85" y="140" width="50" height="36" rx="5"
                    [attr.fill]="nandA()===1?'#00ff8822':'var(--gate-fill)'"
                    [attr.stroke]="nandA()===1?'var(--sig-high)':'var(--border-default)'"
                    stroke-width="1.5"/>
              <text x="110" y="161" text-anchor="middle" class="svg-label" font-size="7">NMOS-A</text>
              <text x="110" y="170" text-anchor="middle" class="svg-label" font-size="7"
                    [attr.fill]="nandA()===1?'var(--sig-high)':'var(--text-muted)'">
                {{ nandA()===1?'ON':'OFF' }}
              </text>
              <line x1="25" y1="158" x2="85" y2="158"
                    [class]="'wire '+(nandA()===1?'wire--high':'')" />

              <!-- NMOS B (bottom of series stack) -->
              <rect x="85" y="196" width="50" height="36" rx="5"
                    [attr.fill]="nandB()===1?'#00ff8822':'var(--gate-fill)'"
                    [attr.stroke]="nandB()===1?'var(--sig-high)':'var(--border-default)'"
                    stroke-width="1.5"/>
              <text x="110" y="217" text-anchor="middle" class="svg-label" font-size="7">NMOS-B</text>
              <text x="110" y="226" text-anchor="middle" class="svg-label" font-size="7"
                    [attr.fill]="nandB()===1?'var(--sig-high)':'var(--text-muted)'">
                {{ nandB()===1?'ON':'OFF' }}
              </text>
              <line x1="165" y1="214" x2="195" y2="214"
                    [class]="'wire '+(nandB()===1?'wire--high':'')" />

              <!-- Series connection + GND -->
              <line x1="110" y1="176" x2="110" y2="196"
                    [attr.stroke]="(nandA()===1&&nandB()===1)?'var(--sig-high)':'var(--text-muted)'"
                    stroke-width="1.5"/>
              <line x1="110" y1="232" x2="110" y2="260"
                    stroke="var(--text-muted)" stroke-width="1.5"/>
              <line x1="90"  y1="260" x2="130" y2="260" stroke="var(--text-muted)" stroke-width="2"/>
              <line x1="97"  y1="266" x2="123" y2="266" stroke="var(--text-muted)" stroke-width="1.5"/>
              <line x1="104" y1="272" x2="116" y2="272" stroke="var(--text-muted)" stroke-width="1"/>
              <text x="110" y="285" text-anchor="middle" class="svg-label" font-size="8">GND</text>
            </svg>
          </div>
        </div>
      </div>

      <!-- ── Section 3: Scale pyramid ── -->
      <div class="concept-section card">
        <div class="cs-header">
          <span class="cs-number">03</span>
          <h3>From transistors to adders — the abstraction pyramid</h3>
        </div>
        <div class="cs-body">
          <div class="pyramid">
            @for (level of pyramid; track level.label) {
              <div class="pyramid-level" [style.--depth]="level.depth">
                <div class="pyr-bar" [style.background]="level.color">
                  <span class="pyr-icon">{{ level.icon }}</span>
                  <span class="pyr-label">{{ level.label }}</span>
                  <span class="pyr-count">{{ level.count }}</span>
                </div>
                <p class="pyr-desc">{{ level.desc }}</p>
              </div>
            }
          </div>
        </div>
      </div>

      <!-- ── Section 4: Scale facts ── -->
      <div class="facts-grid">
        @for (fact of scaleFacts; track fact.title) {
          <div class="fact-card card">
            <div class="fact-icon">{{ fact.icon }}</div>
            <h4>{{ fact.title }}</h4>
            <p>{{ fact.body }}</p>
          </div>
        }
      </div>

    </div>
  `,
  styles: [`
    .page { max-width: 1100px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; }

    /* Concept sections */
    .concept-section { display: flex; flex-direction: column; gap: 1rem; }
    .cs-header { display: flex; align-items: center; gap: 0.75rem; }
    .cs-number {
      font-family: var(--font-code); font-size: 0.7rem; font-weight: 700;
      color: var(--accent); border: 1px solid var(--border-accent);
      background: var(--accent-dim); padding: 0.2rem 0.5rem; border-radius: 999px;
    }
    .cs-body { }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start; }
    @media (max-width: 800px) { .two-col { grid-template-columns: 1fr; } }

    .cs-text p { margin-bottom: 0.5rem; }
    .cs-list { padding-left: 1.25rem; color: var(--text-secondary); font-size: 0.88rem; line-height: 1.7; }
    .cs-list li { margin-bottom: 0.3rem; }

    /* Transistor demo */
    .transistor-demo { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; }
    .demo-label { font-size: 0.82rem; color: var(--text-muted); }
    .toggle-row, .nand-toggles { display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; }
    .tgl-text { font-size: 0.85rem; color: var(--text-secondary); }
    .t-svg { width: 100%; max-width: 180px; }
    .svg-label { font-family: var(--font-code); fill: var(--text-secondary); }
    .t-status {
      text-align: center; padding: 0.4rem 0.75rem;
      border-radius: var(--radius); font-size: 0.8rem;
      background: var(--bg-input); border: 1px solid var(--border-subtle);
      &.t-on { background: #00ff8811; border-color: var(--sig-high); color: var(--sig-high); }
    }

    /* NAND demo */
    .nand-tt { margin: 0.75rem 0; overflow-x: auto; }
    .nand-toggles { gap: 0.75rem; margin-top: 0.75rem; }
    .nand-out {
      padding: 0.3rem 0.75rem; border-radius: var(--radius);
      background: var(--bg-input); border: 1px solid var(--border-subtle);
      font-family: var(--font-code); font-weight: 700; color: var(--text-muted);
      transition: all 250ms;
      &.nand-high { color: var(--sig-high); border-color: var(--sig-high); background: #00ff8811; }
    }
    .nand-svg-wrap { display: flex; justify-content: center; }
    .nand-svg { width: 100%; max-width: 220px; }

    /* Pyramid */
    .pyramid { display: flex; flex-direction: column; gap: 0.5rem; align-items: center; padding: 1rem 0; }
    .pyramid-level {
      width: calc(100% - var(--depth, 0) * 2);
      display: flex; align-items: center; gap: 1rem;
    }
    .pyr-bar {
      display: flex; align-items: center; gap: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: var(--radius);
      flex: 1; min-height: 2.5rem;
    }
    .pyr-icon { font-size: 1rem; }
    .pyr-label { font-weight: 600; font-size: 0.88rem; color: #000; flex: 1; }
    .pyr-count { font-family: var(--font-code); font-size: 0.75rem; color: rgba(0,0,0,0.6); }
    .pyr-desc { font-size: 0.78rem; color: var(--text-muted); max-width: 200px; }

    /* Facts grid */
    .facts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
    .fact-card { display: flex; flex-direction: column; gap: 0.5rem; }
    .fact-icon { font-size: 1.6rem; }
    .fact-card h4 { font-size: 0.9rem; color: var(--text-primary); }
    .fact-card p  { font-size: 0.8rem; }
  `]
})
export class TransistorConceptComponent {

  protected readonly gateSignal = signal<0|1>(0);
  protected readonly nandA      = signal<0|1>(0);
  protected readonly nandB      = signal<0|1>(0);

  protected readonly nandOut = computed((): 0|1 =>
    (this.nandA() === 1 && this.nandB() === 1) ? 0 : 1
  );

  protected toggleGate():  void { this.gateSignal.update(v => v === 0 ? 1 : 0); }
  protected toggleNandA(): void { this.nandA.update(v => v === 0 ? 1 : 0); }
  protected toggleNandB(): void { this.nandB.update(v => v === 0 ? 1 : 0); }

  protected readonly pyramid = [
    { depth: 0,   icon: '🏗️', label: 'Ripple Carry Adder',   count: '~900 transistors (4-bit)', color: '#00d4ff', desc: 'Four full adders chained' },
    { depth: 30,  icon: '🔁', label: 'Full Adder (×4)',       count: '~28 transistors each',    color: '#a78bfa', desc: '2 half adders + 1 OR gate' },
    { depth: 60,  icon: '➕', label: 'Half Adder',             count: '~12 transistors',         color: '#10b981', desc: 'XOR gate + AND gate' },
    { depth: 90,  icon: '⚙️', label: 'Logic Gates',           count: '2–12 transistors each',   color: '#f59e0b', desc: 'AND, OR, XOR, NOT…' },
    { depth: 120, icon: '🔬', label: 'Transistors',           count: '1 transistor = 1 switch', color: '#ef4444', desc: 'The fundamental unit' },
    { depth: 150, icon: '⚡', label: 'Physics (ON / OFF)',    count: 'Voltage: ~0V or ~1.8V',   color: '#ec4899', desc: 'Two voltage levels' },
  ];

  protected readonly scaleFacts = [
    { icon: '🔬', title: 'How small?',
      body: 'Modern transistors are ~3–7 nanometres wide. A human hair is 80,000 nm. You could fit 25,000 transistors across a single hair.' },
    { icon: '🔢', title: 'How many?',
      body: 'A modern CPU chip (like Apple M3) contains about 25 billion transistors — more than 3× the number of people on Earth.' },
    { icon: '⚡', title: 'How fast?',
      body: 'Transistors switch ON/OFF billions of times per second (GHz). A 3 GHz clock ticks 3,000,000,000 times every second.' },
    { icon: '💡', title: 'Why CMOS?',
      body: 'CMOS logic only draws power when switching (not when idle), which is why modern chips don\'t melt despite billions of transistors.' },
    { icon: '📐', title: 'Gate length',
      body: 'The "gate length" (transistor size) has halved roughly every 2 years — Moore\'s Law. TSMC\'s 3nm process launched in 2022.' },
    { icon: '🌡️', title: 'Voltage levels',
      body: 'Older chips ran at 5V. Modern chips run at ~0.8–1.2V to reduce power consumption and heat. Low voltage = less power = smaller, cooler chips.' },
  ];
}
