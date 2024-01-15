import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAttributesComponent } from "../item-attributes/item-attributes.component";
import { branchFormFields } from './../branch-form.config';

@Component({
    selector: 'app-branch',
    standalone: true,
    templateUrl: './branch.component.html',
    styleUrl: './branch.component.scss',
    imports: [CommonModule, ItemAttributesComponent]
})
export class BranchComponent {
  branchFormFields= branchFormFields; // Assigning the imported fields to the component property



onBranchDataChanged(branchData: any) {
  console.log('Branch Data:', branchData);
  // Handle user data
}}
