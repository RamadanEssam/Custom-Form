import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ItemFormField } from '../item-form-field';
import { CommonModule } from '@angular/common';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { SpinnerComponent } from "../shared/spinner/spinner.component";

@Component({
    selector: 'app-item-attributes',
    standalone: true,
    templateUrl: './item-attributes.component.html',
    styleUrls: ['./item-attributes.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, SpinnerComponent]
})

export class ItemAttributesComponent implements OnInit {

  @Input() formFields: ItemFormField[] = [];
  @Output() onSubmit = new EventEmitter<any>();

  itemsForm!: FormGroup;
  originalFormValues: any;
  isEditMode = false;
  isSaveButtonEnabled = false;
  isLoading = false;


  constructor(private fb: FormBuilder ,private renderer: Renderer2 ) {
    this.itemsForm = this.fb.group({}); // Initialize the form group
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  getRowFields(fields: ItemFormField[]): ItemFormField[][] {
    const rows: ItemFormField[][] = [];
    const itemsPerRow = 3;

    for (let i = 0; i < fields.length; i += itemsPerRow) {
      rows.push(fields.slice(i, i + itemsPerRow));
    }
    return rows;
  }
  getRowFieldsTrackBy(index: number, itemArray: ItemFormField[]): any {
    return itemArray.length > 0 ? itemArray[0].controlName : index;
  }
  private initializeForm(): void {
    this.formFields.forEach(field => {
      this.itemsForm.addControl(field.controlName, this.fb.control(field.defaultValue, field.validators));
    });
    this.itemsForm.disable();

    this.itemsForm.valueChanges.subscribe(() => {
      if (this.isEditMode) {
        this.isSaveButtonEnabled = true;
      }
    });
  }
  activateEditMode(): void {
    this.isEditMode = true;
    // store values
    this.originalFormValues = this.itemsForm.value;
    this.itemsForm.enable();

    this.isSaveButtonEnabled = false;

  // Add the border-edit-mode class to the desired elements
  const elements = document.querySelectorAll('.input-form-control');
  elements.forEach(el => {
    this.renderer.addClass(el, 'border-edit-mode');
  });


  }

  private resetBorderStyle(): void {
    const elements = document.querySelectorAll('.input-form-control');
    elements.forEach(el => {
      this.renderer.removeClass(el, 'border-edit-mode');
    });
  }
  saveChanges(): void {
    if (this.itemsForm.valid) {
      const formData = this.itemsForm.value;
      this.onSubmit.emit(formData);
      console.log("values",formData)
      this.resetFormState();
    } else {
      this.markAllAsTouched();
    }
    this.resetBorderStyle();
  }

  private resetFormState(): void {
    this.isEditMode = false;
    this.itemsForm.disable();
    this.isSaveButtonEnabled = false;
  }
  private markAllAsTouched(): void {
    Object.keys(this.itemsForm.controls).forEach(field => {
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
      return { 'noLeadingSpaces': true };
    }
    return null;
  };
  }
  cancelAction(): void {
  // this.itemsForm.reset(this.initialFormValues); // Reset form values to initial
  this.itemsForm.reset(this.originalFormValues);
  this.isEditMode = false;
  this.itemsForm.disable();
  this.isSaveButtonEnabled = false;
  this.resetBorderStyle();
  }

  showSpinner(): void {
    this.isLoading=true;
  }

  hideSpinner(): void {
    this.isLoading=false;
  }
  isFieldRequired(controlName: string): boolean {
    const control = this.itemsForm.get(controlName);
    return control?.validator ? control.validator({} as AbstractControl)?.['required'] : false;
  }



}
