import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display/display.component';
import { ItemAttribute } from '../ItemAttribute';
import { EditComponent } from './edit/edit.component';
import { FormServiceService } from '../serveses/form-service.service';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [CommonModule,DisplayComponent, EditComponent],
})
export class MainComponent  implements OnInit {
  @Input() isEditable = false;
  @Input() formFields: ItemAttribute[] = [];
  isEditMode!: boolean;

  constructor(private _formService: FormServiceService) {}

  ngOnInit(): void {
    this.onGetEditModeStatus();
  }

  handleSubmission(data: any) {
    console.log('Form data:', data);
  }

  onGetEditModeStatus() {
    this._formService.isEditMode.subscribe((value) => {
      this.isEditMode = value;
    })
  }
}


