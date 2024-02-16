"use client";

import { FC } from "react";
import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

import styles from "@/styles/input.module.css";

// typescript interfaces and types
interface InputProps {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  disabled?: boolean;
}

const TextArea: FC<InputProps> = ({
  label,
  id,
    placeholder,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div>
        <textarea
          id={id}
          autoComplete={id}
          placeholder={placeholder}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            styles.input,
            errors[id] && styles.error,
            disabled && styles.disabled
          )}
          rows={4}
        ></textarea>
      </div>
    </div>
  );
};

export default TextArea;
