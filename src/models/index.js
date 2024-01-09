// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Fraccion, Apartament, Torre, Agentes, Propiedad, Comprador, ApartamentComprador, TorreApartament, Tipoid } = initSchema(schema);

export {
  Fraccion,
  Apartament,
  Torre,
  Agentes,
  Propiedad,
  Comprador,
  ApartamentComprador,
  TorreApartament,
  Tipoid
};