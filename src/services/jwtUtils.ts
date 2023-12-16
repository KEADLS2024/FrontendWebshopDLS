import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'?: string;
  // Add other relevant fields from your token's payload
}

export const getUserRoleFromToken = (token: string): string | null => {
  try {
    const decodedToken: DecodedToken = jwtDecode(token);
    return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
};