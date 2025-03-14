
import React from "react";


interface InputProps {
    label: string;
    type: string;
    id: string;
    name: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }


export const Input: React.FC<InputProps> = ({ label, type, id, name, value, onChange, placeholder }) => {
    return (
      <>
        <label htmlFor={id} >{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          //value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control"
        />
      </>
    );
  };
  