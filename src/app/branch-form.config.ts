import { Validators } from '@angular/forms';
import { FormFieldType } from './form-field-type.enum';

export const branchFormFields = [
  { label: 'Name', controlName: 'name', defaultValue: '', validators: [Validators.required], type: FormFieldType.Text },
  { label: 'Mobile', controlName: 'mobile', defaultValue: '', validators: [Validators.required, Validators.pattern(/^[0-9]{10}$/)], type: FormFieldType.Text },
  { label: 'Location', controlName: 'location', defaultValue: '', validators: [Validators.required], type: FormFieldType.Text },
];
