import { useState, createContext, useEffect, useContext } from 'react';
import { Auth } from 'aws-amplify';
import { Hub } from 'aws-amplify';

// Se crea el contexto con un valor por defecto.
const UserContext = createContext({
  user: null,
  setUser: () => {},
});

// Este es el componente de contexto que proveerá el estado del usuario y la función para establecerlo.
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
        case 'signOut':
          checkUser();
          break;
        default:
          break;
      }
    };

    Hub.listen('auth', listener);
    checkUser(); // Verifica al usuario al montar el componente.

    return () => {
      Hub.remove('auth', listener); // Limpia el listener al desmontar el componente.
    };
  }, []);

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      setUser(amplifyUser);
    } catch (error) {
      console.error('Error al verificar el usuario', error);
      setUser(null);
    }
  }

  // Los valores que queremos proveer en el contexto.
  const contextValue = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Este es el hook personalizado para utilizar nuestro UserContext.
export const useUser = () => useContext(UserContext);

// Se exporta el AuthContextProvider en lugar del componente AuthContext por defecto.
export default AuthContextProvider;