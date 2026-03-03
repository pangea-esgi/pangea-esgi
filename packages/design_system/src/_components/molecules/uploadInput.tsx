import React from 'react';
import '@pangea-esgi/design_system/src/styles/formInput.css';
import icon from '@pangea-esgi/design_system/src/images/icon.png';

interface UploadInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

const UploadInput: React.FC<UploadInputProps> = ({ label, id, ...rest }) => {

  return (
    <div className="form-input upload-input">
      <label className="form-input__label">
        {label}
      </label>
      <div className="upload-input__wrapper">
        <input
          type="file"
          className="upload-input__control"
          {...rest}
        />
        <img src={icon} alt="icon" className="upload-input__icon" />
      </div>
    </div>
  );
};

export default UploadInput;
