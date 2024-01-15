import { Component, Input, OnInit } from '@angular/core';
import { ItemFormField } from '../../item-form-field';
import { CommonModule } from '@angular/common';
import { FormServiceService } from '../../serveses/form-service.service';

@Component({
  selector: 'app-display',
  standalone: true,
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  imports: [CommonModule]
})
export class DisplayComponent implements OnInit {
  isEditMode!: boolean;

  constructor(private _formService: FormServiceService) {}

  ngOnInit(): void {
  }

  @Input() formFields: ItemFormField[] = [];

  getRowFields(fields: ItemFormField[]): ItemFormField[][] {
    const rows: ItemFormField[][] = [];
    const itemsPerRow = 3;

    for (let i = 0; i < fields.length; i += itemsPerRow) {
      rows.push(fields.slice(i, i + itemsPerRow));
    }
    return rows;
  }

  onEditMode() {
    this._formService.isEditMode.next(true);
  }
}
