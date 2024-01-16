import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ValidatorFn, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { ItemAttribute } from '../../../ItemAttribute';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent  implements OnInit {
  @Input() formFields: ItemAttribute[] = [];


  @Input() isEditMode!: boolean;
  @Output() onSubmit = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  itemsForm!: FormGroup;
  originalFormValues: any;

  isSaveButtonEnabled = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2

  ) {
    this.itemsForm = this.fb.group({}); // Initialize the form group
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  getRowFields(fields: ItemAttribute[]): ItemAttribute[][] {
    const rows: ItemAttribute[][] = [];
    const itemsPerRow = 3;

    for (let i = 0; i < fields.length; i += itemsPerRow) {
      rows.push(fields.slice(i, i + itemsPerRow));
    }
    return rows;
  }
  getRowFieldsTrackBy(index: number, itemArray: ItemAttribute[]): any {
    return itemArray.length > 0 ? itemArray[0].controlName : index;
  }
  private initializeForm(): void {
    this.formFields.forEach((field) => {
      this.itemsForm.addControl(
        field.controlName,
        this.fb.control(field.defaultValue, field.validators)
      );
    });

    this.itemsForm.valueChanges.subscribe(() => {
      this.isSaveButtonEnabled = true;

    });
  }

  saveChanges(): void {

    if (this.itemsForm.valid) {
      const formData = this.itemsForm.value;
      this.onSubmit.emit(formData);
      console.log('values', formData);
      this.resetFormState();
      this.isEditMode=false;

    } else {
      this.markAllAsTouched();
    }
  }

  private resetFormState(): void {
    this.isEditMode = false;
    this.itemsForm.disable();
    this.isSaveButtonEnabled = false;
  }
  private markAllAsTouched(): void {
    Object.keys(this.itemsForm.controls).forEach((field) => {
      const control = this.itemsForm.get(field);
      if (control && control.dirty && !control.valid) {
        control?.markAsTouched({ onlySelf: true });
      }
    });
  }

  noSpacesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (typeof value === 'string' && value.startsWith(' ')) {
        return { noLeadingSpaces: true };
      }
      return null;
    };
  }
  cancelAction(): void {

    this.itemsForm.reset(this.originalFormValues);
    this.isSaveButtonEnabled = false;
    this.isEditMode = false;
    this.onCancel.emit();

  }



  showSpinner(): void {
    this.isLoading = true;
  }

  hideSpinner(): void {
    this.isLoading = false;
  }
  isFieldRequired(controlName: string): boolean {
    const control = this.itemsForm.get(controlName);
    return control?.validator
      ? control.validator({} as AbstractControl)?.['required']
      : false;
  }

}
