import { Routes } from '@angular/router';
import { CreateRFRComponent } from './create-rfr/create-rfr.component';
import { PreventiveMaintenanceComponent } from './preventive-maintenance/preventive-maintenance.component';
import { AllocateStaffComponent } from './allocate-staff/allocate-staff.component';

export const routes: Routes = [
  { path: 'create-rfr', component: CreateRFRComponent },
  { path: 'maintenance', component: PreventiveMaintenanceComponent },
  { path: 'allocate-staff', component: AllocateStaffComponent },

];
