import { jwtDecode } from 'jwt-decode';

export const getUserRoleFromToken = (token: string): string | null => {
  try {
    const decodedToken: any = jwtDecode(token); // Use 'any' type temporarily
    // Extract and return the user's role from the decoded token
    return decodedToken?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
};
