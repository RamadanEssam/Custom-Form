import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  isEditMode = new Subject<boolean>();

  constructor() { }

}
