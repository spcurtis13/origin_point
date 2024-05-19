
// Create a type for the roles
export type Roles = "admin" | "student" | "mentor";
 
declare global {
  interface CustomJwtSessionClaims {
    metadata: {
      role?: Roles
    };
  }
}