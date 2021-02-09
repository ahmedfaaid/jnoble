import { Field } from './InputField.styled';

interface IInputField {
  name: string;
  text: string;
  type: string;
  value: string;
  field?: string;
}

export default function InputField({
  name,
  text,
  type,
  value,
  field
}: IInputField) {
  switch (field) {
    case 'select':
      return (
        <Field>
          <label htmlFor={name}>{text}</label>
          <select name={name} value={value} disabled>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
        </Field>
      );
    default:
      return (
        <Field>
          <label htmlFor={name}>{text}</label>
          <input type={type} name={name} value={value} readOnly />
        </Field>
      );
  }
}
