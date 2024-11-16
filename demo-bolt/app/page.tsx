'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'empty' | 'invalid' | 'success'>('idle');

  const validateInput = (text: string) => {
    if (!text) {
      setStatus('empty');
      return false;
    }

    if (text.length < 8) {
      setStatus('invalid');
      return false;
    }

    // Count special characters
    const specialChars = text.match(/[!@#$%^&*(),.?":{}|<>]/g) || [];
    if (specialChars.length < 1 || specialChars.length > 3) {
      setStatus('invalid');
      return false;
    }

    // Check if special characters follow one another
    for (let i = 0; i < text.length - 1; i++) {
      const current = /[!@#$%^&*(),.?":{}|<>]/.test(text[i]);
      const next = /[!@#$%^&*(),.?":{}|<>]/.test(text[i + 1]);
      if (current && next) {
        setStatus('invalid');
        return false;
      }
    }

    setStatus('success');
    return true;
  };

  const handleSubmit = () => {
    if (validateInput(input)) {
      // Here you would typically save to a database
      console.log('Saving to database:', input);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <Image
        src="/image@3x.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative min-h-screen bg-black/30 backdrop-blur-sm flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-6 bg-white/80 backdrop-blur-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Text Validator</h1>
          
          <div className="space-y-6">
            <div className="flex gap-2">
              <Input
                placeholder="enter..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button 
                onClick={handleSubmit}
                className="bg-[#556B2F] hover:bg-[#3e4f22] text-white px-6"
              >
                Senden
              </Button>
            </div>

            <div className="space-y-2">
              <h2 className="font-semibold text-gray-700">Restrictions:</h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>At least 8 characters</li>
                <li>At least 1 special character, but no more than 3</li>
                <li>Special characters must not follow one another (e.g. "abbaa!b!ba" is OK, but "abbaa!!ba" is not)</li>
              </ul>
            </div>

            {status !== 'idle' && (
              <div className={`flex items-center gap-2 p-3 rounded-md ${
                status === 'success' 
                  ? 'bg-green-100/90 text-green-700'
                  : 'bg-red-100/90 text-red-700'
              }`}>
                {status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Successful input, saved to database!</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5" />
                    <span>{status === 'empty' ? 'Empty input!' : 'Invalid input!'}</span>
                  </>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}