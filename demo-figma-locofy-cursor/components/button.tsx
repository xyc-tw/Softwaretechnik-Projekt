import type { NextPage } from "next";

export type ButtonType = {
  className?: string;
};

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-[100px] h-[32px] py-2 bg-[#4CAF50] text-white rounded-md hover:bg-[#45a049] transition-colors"
    >
      {label}
    </button>
  );
};

export default Button;
