import { useState } from 'react';
import Card from '../components/Card';
import { validateInput } from '../utils/validation';

export default function Home() {
  const [validationResult, setValidationResult] = useState<{
    message: string;
    isValid: boolean;
  } | null>(null);

  const handleSubmit = (text: string) => {
    const result = validateInput(text);
    setValidationResult(result);
    
    if (result.isValid) {
      console.log('Saving to database:', text);
    }
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center">
      <Card 
        onSubmit={handleSubmit}
        validationResult={validationResult}
      />
    </main>
  );
}
