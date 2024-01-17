import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracker.component.html',
  styleUrl: './tracker.component.scss'
})
export class TrackerComponent {



    steps = [
      { name: 'Main info', active: true },
      { name: 'Preventive maintenance', active: false },
      { name: 'Operations', active: false },
      { name: 'Device info', active: false },
      { name: 'Photos', active: false },
      { name: 'Attributes', active: false },
      { name: 'More', active: false }
    ];

    gotoStep(index: number): void {

      this.steps.forEach((step, i) => step.active = i <= index);


    }

    isLineActive(index: number): boolean {
      return index < this.steps.length - 1 && this.steps[index + 1].active;
    }
}
