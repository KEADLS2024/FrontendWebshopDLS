import { jwtDecode } from 'jwt-decode';

// Definerer et interface 'DecodedToken' for at beskrive strukturen af et dekodet JWT-token.
// Dette interface indeholder en valgfri 'role'-eigenskab baseret på tokenets payload.
interface DecodedToken {
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'?: string;
  // Yderligere relevante felter fra tokenets payload kan tilføjes her.
}

// Eksporterer funktionen 'getUserRoleFromToken' som tager en JWT-token som input 
// og returnerer brugerens rolle som en streng, eller null hvis der sker en fejl under dekodningen.
export const getUserRoleFromToken = (token: string): string | null => {
  try {
    // Dekoder JWT-token ved hjælp af jwtDecode funktionen og gemmer det i 'decodedToken'.
    const decodedToken: DecodedToken = jwtDecode(token);
    // Returnerer brugerens rolle fra tokenet, eller null hvis det ikke findes.
    return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || null;
  } catch (error) {
    // Logger en fejlbesked til konsollen hvis dekodningen fejler.
    console.error('Failed to decode JWT token:', error);
    return null;
  }
};