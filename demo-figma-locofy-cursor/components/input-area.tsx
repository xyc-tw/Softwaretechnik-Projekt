import { useState } from 'react';
import Button from './button';

interface InputAreaProps {
  onSubmit: (text: string) => void;
}

const InputArea = ({ onSubmit }: InputAreaProps) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    onSubmit(inputText);
  };

  return (
    <div className="flex items-center gap-2 h-[34px]">
      <input
        type="text"
        placeholder="enter..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="w-[280px] h-[28px] px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button onClick={handleSubmit} label="Senden" />
    </div>
  );
};

export default InputArea;
