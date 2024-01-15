 export interface ItemFormField {
  label: string;
  controlName: string;
  defaultValue: any;
  validators?: any[];
  type: 'text' | 'password' | 'checkbox' | 'radio' | 'select' | 'date';
  options?: Array<{label: string, value: any}>;
}
