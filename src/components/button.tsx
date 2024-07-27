import React, { createContext, useContext } from "react";
import clsx from "clsx";

type Variants = "primary" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variants;
  isLoading?: boolean;
};

const ThemeContext = createContext<{ variant?: Variants }>({});

function Button({
  variant,
  isLoading,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "h-11 w-80 flex-row items-center justify-center rounded-lg gap-2 px-2",
        {
          "bg-cyan-700": variant === "primary",
          "bg-cyan-900": variant === "secondary",
        }
      )}
      disabled={isLoading}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? (
          <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            {/* ... */}
          </svg>
        ) : (
          children
        )}
      </ThemeContext.Provider>
    </button>
  );
}

function Title({ children }: any) {
  const { variant } = useContext(ThemeContext);

  return (
    <span
      className={clsx("text-base font-semibold", {
        "text-zinc-100": variant === "primary",
        "text-zinc-500": variant === "secondary",
      })}
    >
      {children}
    </span>
  );
}

Button.Title = Title;

export { Button };
