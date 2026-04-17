import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Transistor Simulator — Home',
  },
  {
    path: 'binary-basics',
    loadComponent: () =>
      import('./features/binary-basics/binary-basics.component').then(m => m.BinaryBasicsComponent),
    title: 'Binary Basics',
  },
  {
    path: 'gate-playground',
    loadComponent: () =>
      import('./features/gate-playground/gate-playground.component').then(m => m.GatePlaygroundComponent),
    title: 'Gate Playground',
  },
  {
    path: 'half-adder',
    loadComponent: () =>
      import('./features/half-adder/half-adder.component').then(m => m.HalfAdderComponent),
    title: 'Half Adder',
  },
  {
    path: 'full-adder',
    loadComponent: () =>
      import('./features/full-adder/full-adder.component').then(m => m.FullAdderComponent),
    title: 'Full Adder',
  },
  {
    path: 'ripple-carry',
    loadComponent: () =>
      import('./features/ripple-carry/ripple-carry.component').then(m => m.RippleCarryComponent),
    title: 'Ripple Carry Adder',
  },
  {
    path: 'transistor',
    loadComponent: () =>
      import('./features/transistor-concept/transistor-concept.component').then(m => m.TransistorConceptComponent),
    title: 'Transistor Concept',
  },
  {
    path: 'quiz',
    loadComponent: () =>
      import('./features/quiz/quiz.component').then(m => m.QuizComponent),
    title: 'Quiz',
  },
  { path: '**', redirectTo: 'home' },
];
