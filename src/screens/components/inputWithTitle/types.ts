import { Control, FieldValues } from 'react-hook-form';

export interface InputWithTitleProps {
  title?: string;
  control: Control<FieldValues>;
  rules: any;
  name: string;
}


