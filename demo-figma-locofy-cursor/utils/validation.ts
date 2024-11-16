export const validateInput = (text: string): { isValid: boolean; message: string } => {
  if (!text) {
    return { isValid: false, message: 'empty input!' };
  }

  if (text.length < 8) {
    return { isValid: false, message: 'invalid input! (minimum 8 characters required)' };
  }

  const specialChars = text.match(/[!@#$%^&*(),.?":{}|<>]/g) || [];
  
  if (specialChars.length === 0) {
    return { isValid: false, message: 'invalid input! (at least 1 special character required)' };
  }
  
  if (specialChars.length > 3) {
    return { isValid: false, message: 'invalid input! (maximum 3 special characters allowed)' };
  }

  // Check if special characters follow each other
  for (let i = 0; i < text.length - 1; i++) {
    if (/[!@#$%^&*(),.?":{}|<>]/.test(text[i]) && /[!@#$%^&*(),.?":{}|<>]/.test(text[i + 1])) {
      return { isValid: false, message: 'invalid input! (special characters must not follow each other)' };
    }
  }

  return { isValid: true, message: 'successful input, saved back to database' };
}; 