import { AttributeType } from "./AttributeType";

 export interface ItemAttribute {
  label: string;
  controlName: string;
  defaultValue: any;
  validators?: any[];
  type: AttributeType;
  options?: Array<{label: string, value: any}>;}
