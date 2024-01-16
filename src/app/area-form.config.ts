import { Validators } from '@angular/forms';
import { AttributeType } from './AttributeType';

export const areaFormFields = [
  { label: 'Name', controlName: 'name', defaultValue: '', validators: [Validators.required], type: AttributeType.Text },
  { label: 'Address', controlName: 'address', defaultValue: '', validators: [Validators.required], type:AttributeType.Text },
];
