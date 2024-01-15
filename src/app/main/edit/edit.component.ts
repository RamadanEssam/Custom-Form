import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { ItemFormField } from '../../item-form-field';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { FormServiceService } from '../../serveses/form-service.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() formFields: ItemFormField[] = [];
  @Output() onSubmit = new EventEmitter<any>();

  itemsForm!: FormGroup;
  originalFormValues: any;
  isEditMode = false;
  isSaveButtonEnabled = false;
  isLoading = false;

  constructor(private fb: FormBuilder, private renderer: Renderer2,
    private _formService: FormServiceService) {
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
    this.formFields.forEach((field) => {
      this.itemsForm.addControl(
        field.controlName,
        this.fb.control(field.defaultValue, field.validators)
      );
    });

    this.itemsForm.valueChanges.subscribe(() => {

        this.isSaveButtonEnabled = true;
      debugger
    });
  }

  saveChanges(): void {
    debugger
    if (this.itemsForm.valid) {
      const formData = this.itemsForm.value;
      this.onSubmit.emit(formData);
      console.log('values', formData);
      this.resetFormState();
      this.onDetailsMode();
      debugger
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
    // this.itemsForm.reset(this.initialFormValues); // Reset form values to initial
    this.itemsForm.reset(this.originalFormValues);
    this.isEditMode = false;
    this.itemsForm.disable();
    this.isSaveButtonEnabled = false;
    this.onDetailsMode();
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


  onDetailsMode() {
    this._formService.isEditMode.next(false);
  }
}
