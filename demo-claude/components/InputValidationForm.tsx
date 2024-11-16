'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Send } from "lucide-react";

const InputValidationForm = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('');

  const validateInput = (text) => {
    if (!text) {
      return { isValid: false, message: 'empty input!', type: 'error' };
    }

    if (text.length < 8) {
      return { isValid: false, message: 'unvalid input! (minimum 8 characters required)', type: 'error' };
    }

    const specialChars = text.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g);
    if (!specialChars) {
      return { isValid: false, message: 'unvalid input! (at least 1 special character required)', type: 'error' };
    }

    const totalSpecialChars = specialChars.join('').length;
    if (totalSpecialChars > 3) {
      return { isValid: false, message: 'unvalid input! (maximum 3 special characters allowed)', type: 'error' };
    }

    if (text.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{2,}/)) {
      return { isValid: false, message: 'unvalid input! (special characters must not follow each other)', type: 'error' };
    }

    return { isValid: true, message: 'successful input, saved back to database', type: 'success' };
  };

  const handleSubmit = () => {
    const result = validateInput(input);
    setStatus(result);
    
    if (result.isValid) {
      console.log('Saving to database:', input);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8" style={{ backgroundImage: 'url("/api/placeholder/1920/1080")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-lg mx-auto bg-white/95 p-8 rounded-2xl shadow-sm backdrop-blur-sm">
        <h1 className="text-3xl font-light text-center mb-8 text-gray-800">Text Validator</h1>
        
        <div className="flex gap-3 mb-6">
          <Input
            placeholder="enter..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border-gray-200 focus:ring-green-100 rounded-xl"
          />
          <Button 
            onClick={handleSubmit}
            className="bg-green-700 hover:bg-green-800 rounded-xl px-6"
          >
            Senden
          </Button>
        </div>

        {status && (
          <Alert 
            className={`mb-6 border-0 ${
              status.type === 'error' 
                ? 'bg-red-50/80 text-red-600' 
                : 'bg-green-50/80 text-green-700'
            }`}
          >
            <AlertDescription>
              {status.message}
            </AlertDescription>
          </Alert>
        )}

        <div className="bg-gray-50/80 rounded-xl p-6">
          <h2 className="text-sm font-medium text-gray-600 mb-3">Restrictions:</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• At least 8 characters</li>
            <li>• At least 1 special character, but no more than 3</li>
            <li>• Special characters must not follow one another (e.g. "abbaa!b!ba" is OK, but "abbaa!!ba" is not)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InputValidationForm;
