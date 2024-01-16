import { Validators } from '@angular/forms';
import { AttributeType } from './AttributeType';

export const branchFormFields = [
  { label: 'Name', controlName: 'name', defaultValue: '', validators: [Validators.required], type: AttributeType.Text },
  { label: 'Mobile', controlName: 'mobile', defaultValue: '', validators: [Validators.required, Validators.pattern(/^[0-9]{10}$/)], type: AttributeType.Text },
  { label: 'Location', controlName: 'location', defaultValue: '', validators: [Validators.required], type: AttributeType.Text },
];
