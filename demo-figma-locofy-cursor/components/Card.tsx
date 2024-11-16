import type { NextPage } from "next";
import Result from "./result";
import InputArea from "./input-area";
import Button from "./button";

export type CardType = {
  className?: string;
  onSubmit: (text: string) => void;
  validationResult: { message: string; isValid: boolean; } | null;
};

const Card: NextPage<CardType> = ({ className = "", onSubmit, validationResult }) => {
  return (
    <div
      className={`relative rounded-xl w-[763px] h-[653px] overflow-hidden bg-[url('/image@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-xs text-red font-small-text ${className}`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 w-[502px] h-[352px] rounded-lg" />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[424px]">
        <div className="text-5xl leading-[150%] font-semibold text-black text-center mb-8">
          Text Validator
        </div>

        <div className="w-full text-base text-gray-100 mb-3">
          <InputArea onSubmit={onSubmit} />
        </div>

        {validationResult?.message && (
          <div className="mb-3">
            <Result message={validationResult.message} isValid={validationResult.isValid} />
          </div>
        )}

        <div className="leading-[150%] font-medium text-darkslategray">
          <p className="m-0">Restrictions:</p>
          <ul className="m-0 font-inherit text-inherit pl-4">
            <li className="mb-0">At least 8 characters</li>
            <li className="mb-0">
              At least 1 special character, but no more then 3
            </li>
            <li className="mb-0">
              Special characters must not follow one another (e.g. "abbaa!b!ba" is
              OK, but "abbaa!!ba" is not)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
