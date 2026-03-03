import React from 'react';
import '@pangea-esgi/design_system/src/styles/formInput.css';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeholder, id, ...rest }) => {
  return (
    <div className="form-input">
      <label className="form-input__label">
        {label}
      </label>
      <input
        id= "inputMolecule"
        placeholder={placeholder}
        className="form-input__control"
        {...rest}
      />
    </div>
  );
};

export default FormInput;
