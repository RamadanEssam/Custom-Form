import { Validators } from '@angular/forms';
import { FormFieldType } from './form-field-type.enum';

export const areaFormFields = [
  { label: 'Name', controlName: 'name', defaultValue: '', validators: [Validators.required], type: FormFieldType.Text },
  { label: 'Address', controlName: 'address', defaultValue: '', validators: [Validators.required], type:FormFieldType.Text },
];
