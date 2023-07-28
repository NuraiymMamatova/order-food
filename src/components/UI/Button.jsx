import React from "react";

export const Button = ({
  children,
  onClick,
  disabled,
  variant,
  size /* size = fontSize */,
  ...restProps
}) => {
  return (
    <button onClick={onClick} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

// variant and size will added in hw 12
