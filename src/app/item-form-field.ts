import { FormFieldType } from "./form-field-type.enum";

 export interface ItemFormField {
  label: string;
  controlName: string;
  defaultValue: any;
  validators?: any[];
  type: FormFieldType;
  options?: Array<{label: string, value: any}>; // خاصية الخيارات للقائمة المنسدلة وأزرار الراديو
}
