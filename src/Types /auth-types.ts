export interface AuthData {
    username: string;
    email: string;
    // ...otros campos relevantes para los datos de tu usuario
  }
  
  export enum AuthState {
    SignedIn,
    SignedOut,
    // ...otros estados posibles de autenticación
  }