"use client";

import ReactSelect from "react-select";

interface SelectProps {
  label: string;
  value?: Record<string, any>;
  placeholder?: string;
  onChange: (value: Record<string, any>) => void;
  options: Record<string, any>[];
  disabled?: boolean;
  padding?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  value,
  placeholder,
  onChange,
  options,
  disabled,
  padding,
}) => {
  if (typeof window == "undefined" && typeof document == "undefined")
    return <div></div>;

  return (
    <div style={{ zIndex: 100 }}>
      <label
        style={{
          display: "block",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
          fontWeight: 500,
          color: "#111827",
        }}
      >
        {label}
      </label>
      <div style={{ marginTop: ".25rem" }}>
        <ReactSelect
          isDisabled={disabled}
          value={value}
          placeholder={placeholder}
          onChange={onChange as any}
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base: any) => ({
              ...base,
              zIndex: 99999,
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }),
            control: (baseStyles: any, state: any) => ({
              ...baseStyles,
              padding: padding || "0.25rem .25rem",
            }),
          }}
        />
      </div>
    </div>
  );
};

export default Select;
