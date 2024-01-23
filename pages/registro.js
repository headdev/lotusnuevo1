import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Amplify, { Auth, } from 'aws-amplify';
import { API, graphqlOperation } from 'aws-amplify';
import { createComprador } from '../src/graphql/mutations';
Amplify.configure(awsexports);

function Registro() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState(null);
    const router = useRouter();
    const { signUp } = useAuth();
  
    const onSubmit = async (data) => {
      try {
        const newUser = await Auth.signUp({
          username: data.email,
          password: data.password,
          attributes: {
            email: data.email,
            // any other attributes
          },
        });
        
        // If you need to create a Comprador record after sign up
        await API.graphql(graphqlOperation(createComprador, { input: { ...data } }));
  
        // Sign up successful
        router.push('/someRouteAfterSuccess'); // Replace with your success route
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <div>
        <h1>Registro</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="email" type="email" ref={register({ required: true })} />
          {errors.email && <p>El correo electrónico es requerido</p>}
          
          <input name="password" type="password" ref={register({ required: true })} />
          {errors.password && <p>La contraseña es requerida</p>}
          
          <button type="submit">Registrarse</button>
        </form>
      </div>
    );
  }
  
  export default Registro;