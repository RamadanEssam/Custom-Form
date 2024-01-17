

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  title: string;
  isActive: boolean;
}
@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  steps: Step[] = [
    { title: 'Main info', isActive: true },
    { title: 'Preventive maintenance', isActive: false },
    { title: 'Operations', isActive: false },
    { title: 'Device info', isActive: false },
    { title: 'Photos', isActive: false },
    { title: 'Attributes', isActive: false },
    { title: 'More', isActive: false }
  ];

  setActiveStep(index: number): void {
    this.steps.forEach((step, i) => {
      step.isActive = i === index;
    });
  }

// ... inside StepperComponent class
getStepIcon(isActive: boolean): string {
  if (isActive) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.5" fill="white" stroke="#DF9C49"/>
    </svg>`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.5" fill="white" stroke="#DF9C49"/>
    </svg>`;
  }
}
}
