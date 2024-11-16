'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AlertCircle, CheckCircle2, Send } from 'lucide-react'
import { validateInput } from '@/lib/validateInput'

export default function InputForm() {
  const [input, setInput] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    const result = validateInput(input)
    if (result.isValid) {
      try {
        // Here you would typically make an API call to save to database
        setStatus('success')
        setMessage(result.message)
      } catch (error) {
        setStatus('error')
        setMessage('Failed to save to database')
      }
    } else {
      setStatus('error')
      setMessage(result.message)
    }
  }

  return (
    <div className="space-y-6">
      {/* Input section */}
      <div className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="enter..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSubmit}>
            <Send className="mr-1 h-4 w-4" />
            senden
          </Button>
        </div>
      </div>

      {/* Status message */}
      {status !== 'idle' && (
        <div
          className={`flex items-center space-x-2 rounded-lg p-3 ${
            status === 'error' 
              ? 'bg-red-50 text-red-600' 
              : 'bg-green-50 text-green-600'
          }`}
        >
          {status === 'error' ? (
            <AlertCircle className="h-4 w-4 shrink-0" />
          ) : (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          )}
          <span className="text-sm">{message}</span>
        </div>
      )}

      {/* Restrictions section */}
      <div className="rounded-lg bg-zinc-50 p-4 text-sm">
        <h3 className="font-medium mb-2">Input Requirements:</h3>
        <ul className="list-disc pl-5 space-y-1 text-zinc-600">
          <li>At least 8 characters</li>
          <li>At least 1 special character, but no more than 3</li>
          <li>Special characters must not follow one another (e.g. "abbaa!b!ba" is OK, but "abbaa!!ba" is not)</li>
        </ul>
      </div>
    </div>
  )
} 