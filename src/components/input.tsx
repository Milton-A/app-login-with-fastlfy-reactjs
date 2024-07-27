import clsx from "clsx";
import React, { ReactNode } from "react";

type Variants = "primary" | "secondary" | "tertiary";

type InputProps = {
  children: ReactNode;
  variant?: Variants;
};

function Input({ children, variant }: InputProps) {
  return (
    <div
      className={clsx(
        "flex w-80 h-12 flex-row items-center gap-4 bg-zinc-800",
        {
          "px-2 rounded-lg": variant !== "primary",
          "border-2 border-cyan-600": variant === "secondary",
          "border-2 border-red-700": variant === "tertiary",
        }
      )}
    >
      {children}
    </div>
  );
}

function Field({ ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className=" w-full text-zinc-300 bg-zinc-800"
      style={{ height: "44px", outline: "none" }}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
