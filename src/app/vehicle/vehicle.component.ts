import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { AttributeType } from '../AttributeType';
import { MainComponent } from '../main/main.component';
import { ItemAttribute } from '../ItemAttribute';
import { ItemAttributesComponent } from '../Softec-Form/item-attributes/item-attributes.component';


export const VehicleFormFields: ItemAttribute[] = [

  { label: 'Plate Number', controlName: 'plateNumber', defaultValue: '980-476', validators: [Validators.required], type: AttributeType.Text },
  { label: 'Code', controlName: 'code', defaultValue: 'XYZ789', validators: [Validators.required], type: AttributeType.Text },
  {label: 'Vehicle Type', controlName: 'vehicleType',defaultValue: 'Sedan',validators: [Validators.required], type:AttributeType.Select, options: [{label: 'Car', value: 'Car'}, {label: 'Bus', value: 'Bus'},{label: 'Sedan', value: 'Sedan'}]},
  { label: 'Branch', controlName: 'branch', defaultValue: 'Main Branch', validators: [Validators.required], type: AttributeType.Text  },
  { label: 'Sub Branch', controlName: 'subBranch', defaultValue: 'Sub Branch 1', validators: [Validators.required], type: AttributeType.Text  },
  { label: 'Current Mileage', controlName: 'currentMileage', defaultValue: '10000', validators: [Validators.required], type: AttributeType.Number },
  { label: 'Manufacturer', controlName: 'manufacturer', defaultValue: 'Toyota', validators: [Validators.required], type: AttributeType.Text  },
  { label: 'Brand', controlName: 'brand', defaultValue: 'Corolla', validators: [Validators.required], type: AttributeType.Text  },
  { label: 'Production Year', controlName: 'productionYear', defaultValue: '2020', validators: [Validators.required], type: AttributeType.Text  },
  { label: 'Speed Limit', controlName: 'speedLimit', defaultValue: '120', validators: [Validators.required], type: AttributeType.Text  },
  { label: 'License Number', controlName: 'licenseNumber', defaultValue: 'LIC123456', validators: [Validators.required], type: AttributeType.Text  },
  { label: 'License Expiry Date',controlName: 'licenseExpiry',defaultValue: '2023-12-31',validators: [Validators.required],type: AttributeType.Text},
  { label: 'Insurance Number', controlName: 'insuranceNumber', defaultValue: 'INS987654', validators: [Validators.required], type:AttributeType.Text }

];

@Component({
    selector: 'app-vehicle',
    standalone: true,
    templateUrl: './vehicle.component.html',
    styleUrl: './vehicle.component.scss',
    imports: [CommonModule,MainComponent,ItemAttributesComponent]
})
export class VehicleComponent {
  vehicleFormFields = VehicleFormFields;

  onVehicleDataChanged(vehicleData: any) {
    console.log('Vehicle Data:', vehicleData);
  }
}
