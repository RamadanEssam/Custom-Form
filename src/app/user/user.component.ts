import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAttributesComponent } from "../old/item-attributes/item-attributes.component";
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AttributeType } from '../AttributeType';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    imports: [CommonModule, ItemAttributesComponent]
})
export class UserComponent {
   userFormFields = [
    { label: 'SIM card Number', controlName: 'sIMCardNumber', defaultValue: '980-476', validators: [Validators.required], type: AttributeType.Text},
    { label: 'Provider', controlName: 'Provider', defaultValue: 'Etisalat', validators: [Validators.required], type: AttributeType.Text },
    { label: 'Device code', controlName: 'Devicecode', defaultValue: '2765-3656-4356-2543', validators: [Validators.required  ], type: AttributeType.Text },
    { label: 'Device type', controlName: 'Device type', defaultValue: 'device type', validators: [Validators.required  ], type:AttributeType.Text },
     { label: 'Version', controlName: 'Version', defaultValue: '0,001', validators: [Validators.required  ], type:AttributeType.Text },
     { label: 'Vendor', controlName: 'Vendor', defaultValue: 'Vendor name', validators: [Validators.required ], type:AttributeType.Text },
  ];

onUserDataChanged(userData: any) {
  console.log('User Data:', userData);
  // Handle user data
}


}


