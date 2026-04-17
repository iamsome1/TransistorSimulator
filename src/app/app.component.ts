import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  path: string;
  label: string;
  icon: string;
  sublabel: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="app-shell" [class.sidebar-open]="sidebarOpen()">

      <!-- ─── Mobile top bar ─── -->
      <header class="topbar">
        <button class="btn btn-icon topbar-menu" (click)="toggleSidebar()" aria-label="Menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            @if (sidebarOpen()) {
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            } @else {
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            }
          </svg>
        </button>
        <span class="topbar-title">
          <span class="chip-icon">⚡</span> Transistor Sim
        </span>
      </header>

      <!-- ─── Sidebar Backdrop (mobile) ─── -->
      @if (sidebarOpen()) {
        <div class="sidebar-backdrop" (click)="closeSidebar()"></div>
      }

      <!-- ─── Sidebar Navigation ─── -->
      <nav class="sidebar" role="navigation" aria-label="Main navigation">
        <div class="sidebar-brand">
          <div class="brand-icon">⚡</div>
          <div>
            <div class="brand-title">Transistor<br>Simulator</div>
            <div class="brand-sub">Interactive Learning</div>
          </div>
        </div>

        <ul class="nav-list">
          @for (item of navItems; track item.path) {
            <li>
              <a class="nav-item"
                 [routerLink]="item.path"
                 routerLinkActive="active"
                 (click)="closeSidebar()">
                <span class="nav-icon">{{ item.icon }}</span>
                <span class="nav-text">
                  <span class="nav-label">{{ item.label }}</span>
                  <span class="nav-sub">{{ item.sublabel }}</span>
                </span>
              </a>
            </li>
          }
        </ul>

        <div class="sidebar-footer">
          <span class="text-muted text-xs">v1.0 · Angular 17 · Signals</span>
        </div>
      </nav>

      <!-- ─── Main Content ─── -->
      <main class="main-content">
        <router-outlet />
      </main>
    </div>
  `,
  styles: [`
    .app-shell {
      display: flex;
      min-height: 100vh;
    }

    /* ── Top bar (mobile only) ── */
    .topbar {
      display: none;
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 52px;
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border-subtle);
      align-items: center;
      gap: 0.75rem;
      padding: 0 1rem;
      z-index: 200;
    }
    .topbar-title {
      font-weight: 700;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .chip-icon { font-size: 1.1rem; }

    @media (max-width: 768px) {
      .topbar { display: flex; }
    }

    /* ── Sidebar ── */
    .sidebar {
      width: 230px;
      min-height: 100vh;
      background: var(--bg-secondary);
      border-right: 1px solid var(--border-subtle);
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0; left: 0; bottom: 0;
      z-index: 100;
      overflow-y: auto;
      transition: transform 0.3s var(--ease-out);
    }

    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(-100%);
        top: 52px;
      }
      .app-shell.sidebar-open .sidebar {
        transform: translateX(0);
        box-shadow: 4px 0 24px rgba(0,0,0,.6);
      }
      .sidebar-backdrop {
        position: fixed;
        inset: 52px 0 0 0;
        background: rgba(0,0,0,.5);
        z-index: 99;
      }
    }

    .sidebar-brand {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1.25rem 1rem;
      border-bottom: 1px solid var(--border-subtle);
    }
    .brand-icon {
      width: 2.5rem; height: 2.5rem;
      background: linear-gradient(135deg, #00d4ff22, #7c3aed22);
      border: 1px solid var(--border-default);
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      flex-shrink: 0;
    }
    .brand-title {
      font-weight: 700;
      font-size: 0.85rem;
      line-height: 1.2;
      color: var(--text-primary);
    }
    .brand-sub {
      font-size: 0.7rem;
      color: var(--text-muted);
      margin-top: 2px;
    }

    /* Nav list */
    .nav-list {
      list-style: none;
      padding: 0.75rem 0.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.55rem 0.75rem;
      border-radius: var(--radius);
      color: var(--text-secondary);
      text-decoration: none;
      transition: background 180ms, color 180ms;

      &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
      }
      &.active {
        background: var(--accent-dim);
        color: var(--accent);
        border: 1px solid var(--border-accent);
        .nav-icon { filter: drop-shadow(0 0 4px var(--accent)); }
      }
    }
    .nav-icon { font-size: 1rem; width: 1.25rem; text-align: center; flex-shrink: 0; }
    .nav-text { display: flex; flex-direction: column; }
    .nav-label { font-size: 0.85rem; font-weight: 500; line-height: 1.2; }
    .nav-sub { font-size: 0.67rem; color: var(--text-muted); line-height: 1; margin-top: 1px; }

    .sidebar-footer {
      padding: 0.75rem 1rem;
      border-top: 1px solid var(--border-subtle);
      text-align: center;
    }

    /* ── Main content ── */
    .main-content {
      flex: 1;
      margin-left: 230px;
      min-height: 100vh;
      padding: 2rem;
    }

    @media (max-width: 768px) {
      .main-content {
        margin-left: 0;
        padding: 1rem;
        padding-top: calc(52px + 1rem);
      }
    }
  `]
})
export class AppComponent {
  protected readonly sidebarOpen = signal(false);

  protected readonly navItems: NavItem[] = [
    { path: 'home',           label: 'Introduction',      icon: '🏠', sublabel: 'Start here' },
    { path: 'binary-basics',  label: 'Binary Basics',     icon: '🔢', sublabel: 'Decimal → Binary' },
    { path: 'gate-playground',label: 'Gate Playground',   icon: '⚙️', sublabel: 'AND, OR, XOR…' },
    { path: 'half-adder',     label: 'Half Adder',        icon: '➕', sublabel: 'XOR + AND' },
    { path: 'full-adder',     label: 'Full Adder',        icon: '🔁', sublabel: 'With carry-in' },
    { path: 'ripple-carry',   label: 'Ripple Carry',      icon: '🌊', sublabel: '4-bit / 8-bit' },
    { path: 'transistor',     label: 'Transistors',       icon: '🔬', sublabel: 'The tiny switches' },
    { path: 'quiz',           label: 'Quiz',              icon: '🎯', sublabel: 'Test yourself' },
  ];

  protected toggleSidebar(): void {
    this.sidebarOpen.update(v => !v);
  }

  protected closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.closeSidebar();
  }
}
