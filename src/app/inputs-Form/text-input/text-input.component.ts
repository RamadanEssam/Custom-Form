import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAttribute } from '../../ItemAttribute';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() field!: ItemAttribute;
  @Input() form!: FormGroup;

  get control(): FormControl {
    return this.form.get(this.field.controlName) as FormControl;
  }

  get required(): boolean {
    return this.field.validators?.some(validator => validator === 'required') || false;
  }
}
