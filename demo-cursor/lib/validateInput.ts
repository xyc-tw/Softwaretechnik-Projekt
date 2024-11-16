export function validateInput(text: string): { isValid: boolean; message: string } {
  if (!text) {
    return { isValid: false, message: 'empty input!' }
  }

  if (text.length < 8) {
    return { isValid: false, message: 'unvalid input! Must be at least 8 characters.' }
  }

  const specialChars = text.match(/[!@#$%^&*(),.?":{}|<>]/g)
  if (!specialChars || specialChars.length === 0) {
    return { isValid: false, message: 'unvalid input! Must contain at least 1 special character.' }
  }

  if (specialChars.length > 3) {
    return { isValid: false, message: 'unvalid input! Cannot contain more than 3 special characters.' }
  }

  const consecutiveSpecialChars = /[!@#$%^&*(),.?":{}|<>]{2,}/
  if (consecutiveSpecialChars.test(text)) {
    return { isValid: false, message: 'unvalid input! Special characters cannot be consecutive.' }
  }

  return { isValid: true, message: 'successful input, saved to database' }
} 