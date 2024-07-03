import Label from './Label';
import Input from './Input';

function FormField({ id, name, type, placeholder, autoComplete, required, label }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-2">
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
        />
      </div>
    </div>
  );
}

export default FormField;
