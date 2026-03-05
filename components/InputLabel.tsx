import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
  name: string;
  className?: string;
  required?: boolean;
}

export const InputLabel = ({ type, name, children, className, required = true }: Props) => {
  return (
    <label htmlFor={name} className={`relative flex flex-col ${className}`}>
      <input type={type} name={name} id={name} className="peer pl-4 pb-1.5 pr-10 pt-5 border rounded-xl border-fill-secondary-dark" placeholder="" required={required} />

      <span className="absolute text-base left-4 top-4  text-fill-secondary-dark font-light cursor-text transition peer-focus:text-xs peer-focus:-translate-y-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-2">
        {children}
      </span>
    </label>
  );
};
