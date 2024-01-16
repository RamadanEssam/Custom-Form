import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemAttribute } from '../../../ItemAttribute';
// import { FormServiceService } from '../../../serveses/form-service.service';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss'
})
export class ItemDetailsComponent implements OnInit {

  @Input() isEditMode!: boolean;
  @Output() edit = new EventEmitter<void>();

  constructor( ) {}

  ngOnInit(): void {
  }

  @Input() formFields: ItemAttribute[] = [];

  getRowFields(fields: ItemAttribute[]): ItemAttribute[][] {
    const rows: ItemAttribute[][] = [];
    const itemsPerRow = 3;

    for (let i = 0; i < fields.length; i += itemsPerRow) {
      rows.push(fields.slice(i, i + itemsPerRow));
    }
    return rows;
  }

  // onEditMode() {
  //   this._formService.isEditMode.next(true);
  // }
}
