"use client";

import { FC } from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import styles from "@/styles/input.module.css"

// typescript interfaces and types
interface InputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({
  label,
  id,
  placeholder,
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
      <div>
        <input
          id={id}
          type={type}
          autoComplete={id}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(styles.input, 
            errors[id] && styles.error,
            disabled && styles.disabled
          )}
        />
      </div>
    </div>
  );
};

export default Input;
