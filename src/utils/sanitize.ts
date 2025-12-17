/**
 * Security utilities for sanitizing user input
 */

/**
 * Sanitizes a string by removing potentially dangerous characters
 * @param input - The string to sanitize
 * @returns Sanitized string
 */
export const sanitizeString = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .slice(0, 10000); // Limit length
};

/**
 * Sanitizes email address
 * @param email - Email to sanitize
 * @returns Sanitized email or empty string
 */
export const sanitizeEmail = (email: string): string => {
  if (typeof email !== 'string') return '';
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = email.trim().toLowerCase().slice(0, 254);
  
  return emailRegex.test(sanitized) ? sanitized : '';
};

/**
 * Sanitizes phone number
 * @param phone - Phone number to sanitize
 * @returns Sanitized phone number
 */
export const sanitizePhone = (phone: string): string => {
  if (typeof phone !== 'string') return '';
  
  // Remove all non-digit characters except +, spaces, and hyphens
  return phone
    .replace(/[^\d+\s-]/g, '')
    .trim()
    .slice(0, 20);
};

/**
 * Validates and sanitizes form data
 */
export interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: any;
}

export const sanitizeFormData = (data: FormData): FormData => {
  const sanitized: FormData = {};
  
  if (data.name) {
    sanitized.name = sanitizeString(data.name);
  }
  
  if (data.email) {
    sanitized.email = sanitizeEmail(data.email);
  }
  
  if (data.phone) {
    sanitized.phone = sanitizePhone(data.phone);
  }
  
  if (data.message) {
    sanitized.message = sanitizeString(data.message);
  }
  
  // Sanitize other string fields
  Object.keys(data).forEach(key => {
    if (!['name', 'email', 'phone', 'message'].includes(key) && typeof data[key] === 'string') {
      sanitized[key] = sanitizeString(data[key]);
    } else if (!['name', 'email', 'phone', 'message'].includes(key)) {
      sanitized[key] = data[key];
    }
  });
  
  return sanitized;
};

