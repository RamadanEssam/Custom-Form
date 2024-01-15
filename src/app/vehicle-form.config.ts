import { Validators } from '@angular/forms';
export const VehicleFormFields = [

  { label: 'Plate Number', controlName: 'plateNumber', defaultValue: 'ABC-123', validators: [Validators.required , Validators.minLength(5)], type: 'text' },
  { label: 'Code', controlName: 'code', defaultValue: 'XYZ789', validators: [Validators.required], type: 'password' },
  { label: 'Vehicle Type', controlName: 'vehicleType', defaultValue: 'Sedan', validators: [Validators.required], type: 'text' },
  { label: 'Branch', controlName: 'branch', defaultValue: 'Main Branch', validators: [Validators.required], type: 'text' },
  { label: 'Sub Branch', controlName: 'subBranch', defaultValue: 'Sub Branch 1', validators: [Validators.required], type: 'text' },
  { label: 'Current Mileage', controlName: 'currentMileage', defaultValue: '10000', validators: [Validators.required], type: 'number' },
  { label: 'Manufacturer', controlName: 'manufacturer', defaultValue: 'Toyota', validators: [Validators.required], type: 'text' },
  { label: 'Brand', controlName: 'brand', defaultValue: 'Corolla', validators: [Validators.required], type: 'text' },
  { label: 'Production Year', controlName: 'productionYear', defaultValue: '2020', validators: [Validators.required], type: 'text' },
  { label: 'Speed Limit', controlName: 'speedLimit', defaultValue: '120', validators: [Validators.required], type: 'text' },
  { label: 'License Number', controlName: 'licenseNumber', defaultValue: 'LIC123456', validators: [Validators.required], type: 'text' },
  { label: 'License Expiry Date', controlName: 'licenseExpiry', defaultValue: '2023-12-31', validators: [Validators.required], type: 'text' },
  { label: 'Insurance Number', controlName: 'insuranceNumber', defaultValue: 'INS987654', validators: [Validators.required], type: 'text' }

];
