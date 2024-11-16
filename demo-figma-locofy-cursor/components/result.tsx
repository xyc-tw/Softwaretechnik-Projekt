import type { NextPage } from "next";

export type ResultType = {
  className?: string;
};

interface ResultProps {
  message: string;
  isValid: boolean;
}

const Result = ({ message, isValid }: ResultProps) => {
  if (!message) return null;
  
  return (
    <div className={`text-left ${isValid ? 'text-green-600' : 'text-red-600'}`}>
      {message}
    </div>
  );
};

export default Result;
