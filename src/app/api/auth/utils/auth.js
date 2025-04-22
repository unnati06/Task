// utils/auth.js
import jwt from 'jsonwebtoken';


export function generateToken(payload) {
    return jwt.sign(payload, "secretkeyforjwt", { expiresIn: '7h' });
  }

export function verifyToken(token) {
  try {
    return jwt.verify(token, "secretkeyforjwt");
  } catch (error) {
    return null;
  }
}