import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerTipoid = {
  readonly Cedula?: string | null;
  readonly Pasaporte?: string | null;
  readonly Licencia?: string | null;
  readonly DNi?: string | null;
}

type LazyTipoid = {
  readonly Cedula?: string | null;
  readonly Pasaporte?: string | null;
  readonly Licencia?: string | null;
  readonly DNi?: string | null;
}

export declare type Tipoid = LazyLoading extends LazyLoadingDisabled ? EagerTipoid : LazyTipoid

export declare const Tipoid: (new (init: ModelInit<Tipoid>) => Tipoid)

type EagerFraccion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fraccion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Titulo?: string | null;
  readonly Valor?: number | null;
  readonly dimensionfraccion?: number | null;
  readonly vendido?: boolean | null;
  readonly preciopormetro?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFraccion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Fraccion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Titulo?: string | null;
  readonly Valor?: number | null;
  readonly dimensionfraccion?: number | null;
  readonly vendido?: boolean | null;
  readonly preciopormetro?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Fraccion = LazyLoading extends LazyLoadingDisabled ? EagerFraccion : LazyFraccion

export declare const Fraccion: (new (init: ModelInit<Fraccion>) => Fraccion) & {
  copyOf(source: Fraccion, mutator: (draft: MutableModel<Fraccion>) => MutableModel<Fraccion> | void): Fraccion;
}

type EagerApartament = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Apartament, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Propiedads?: (Propiedad | null)[] | null;
  readonly m2?: string | null;
  readonly valor?: number | null;
  readonly fracciones?: string | null;
  readonly Compradors?: (ApartamentComprador | null)[] | null;
  readonly Agentes?: Agentes | null;
  readonly torres?: (TorreApartament | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly apartamentAgentesId?: string | null;
}

type LazyApartament = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Apartament, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Propiedads: AsyncCollection<Propiedad>;
  readonly m2?: string | null;
  readonly valor?: number | null;
  readonly fracciones?: string | null;
  readonly Compradors: AsyncCollection<ApartamentComprador>;
  readonly Agentes: AsyncItem<Agentes | undefined>;
  readonly torres: AsyncCollection<TorreApartament>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly apartamentAgentesId?: string | null;
}

export declare type Apartament = LazyLoading extends LazyLoadingDisabled ? EagerApartament : LazyApartament

export declare const Apartament: (new (init: ModelInit<Apartament>) => Apartament) & {
  copyOf(source: Apartament, mutator: (draft: MutableModel<Apartament>) => MutableModel<Apartament> | void): Apartament;
}

type EagerTorre = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Torre, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Apartament?: Apartament | null;
  readonly Propiedad?: Propiedad | null;
  readonly titulodelatorre?: string | null;
  readonly numero?: string | null;
  readonly Apartaments?: (TorreApartament | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly torreApartamentId?: string | null;
  readonly torrePropiedadId?: string | null;
}

type LazyTorre = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Torre, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Apartament: AsyncItem<Apartament | undefined>;
  readonly Propiedad: AsyncItem<Propiedad | undefined>;
  readonly titulodelatorre?: string | null;
  readonly numero?: string | null;
  readonly Apartaments: AsyncCollection<TorreApartament>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly torreApartamentId?: string | null;
  readonly torrePropiedadId?: string | null;
}

export declare type Torre = LazyLoading extends LazyLoadingDisabled ? EagerTorre : LazyTorre

export declare const Torre: (new (init: ModelInit<Torre>) => Torre) & {
  copyOf(source: Torre, mutator: (draft: MutableModel<Torre>) => MutableModel<Torre> | void): Torre;
}

type EagerAgentes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Agentes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly email?: string | null;
  readonly telefono?: string | null;
  readonly direccion?: string | null;
  readonly identificacion?: Tipoid | null;
  readonly Propiedads?: (Propiedad | null)[] | null;
  readonly Compradors?: (Comprador | null)[] | null;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAgentes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Agentes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nombre?: string | null;
  readonly email?: string | null;
  readonly telefono?: string | null;
  readonly direccion?: string | null;
  readonly identificacion?: Tipoid | null;
  readonly Propiedads: AsyncCollection<Propiedad>;
  readonly Compradors: AsyncCollection<Comprador>;
  readonly password?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Agentes = LazyLoading extends LazyLoadingDisabled ? EagerAgentes : LazyAgentes

export declare const Agentes: (new (init: ModelInit<Agentes>) => Agentes) & {
  copyOf(source: Agentes, mutator: (draft: MutableModel<Agentes>) => MutableModel<Agentes> | void): Agentes;
}

type EagerPropiedad = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Propiedad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly Comprador?: Comprador | null;
  readonly titulo?: string | null;
  readonly Descripcioncorta?: string | null;
  readonly Descripcionlarga?: string | null;
  readonly Preciototal?: number | null;
  readonly Precioporfraccion?: number | null;
  readonly Imagendestacada?: string | null;
  readonly imagenessecundarias?: (string | null)[] | null;
  readonly agentesID: string;
  readonly apartamentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly propiedadCompradorId?: string | null;
}

type LazyPropiedad = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Propiedad, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly untitledfield?: string | null;
  readonly Comprador: AsyncItem<Comprador | undefined>;
  readonly titulo?: string | null;
  readonly Descripcioncorta?: string | null;
  readonly Descripcionlarga?: string | null;
  readonly Preciototal?: number | null;
  readonly Precioporfraccion?: number | null;
  readonly Imagendestacada?: string | null;
  readonly imagenessecundarias?: (string | null)[] | null;
  readonly agentesID: string;
  readonly apartamentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly propiedadCompradorId?: string | null;
}

export declare type Propiedad = LazyLoading extends LazyLoadingDisabled ? EagerPropiedad : LazyPropiedad

export declare const Propiedad: (new (init: ModelInit<Propiedad>) => Propiedad) & {
  copyOf(source: Propiedad, mutator: (draft: MutableModel<Propiedad>) => MutableModel<Propiedad> | void): Propiedad;
}

type EagerComprador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comprador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre: string;
  readonly fotoperfil?: string | null;
  readonly apellido?: string | null;
  readonly Tipoidentificacion?: Tipoid | null;
  readonly numeroidentificacion?: string | null;
  readonly ciudad?: string | null;
  readonly Estado?: string | null;
  readonly Pais?: string | null;
  readonly Propiedad?: Propiedad | null;
  readonly agentesID: string;
  readonly Vendedor?: Agentes | null;
  readonly apartaments?: (ApartamentComprador | null)[] | null;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compradorPropiedadId?: string | null;
}

type LazyComprador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comprador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre: string;
  readonly fotoperfil?: string | null;
  readonly apellido?: string | null;
  readonly Tipoidentificacion?: Tipoid | null;
  readonly numeroidentificacion?: string | null;
  readonly ciudad?: string | null;
  readonly Estado?: string | null;
  readonly Pais?: string | null;
  readonly Propiedad: AsyncItem<Propiedad | undefined>;
  readonly agentesID: string;
  readonly Vendedor: AsyncItem<Agentes | undefined>;
  readonly apartaments: AsyncCollection<ApartamentComprador>;
  readonly password: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compradorPropiedadId?: string | null;
}

export declare type Comprador = LazyLoading extends LazyLoadingDisabled ? EagerComprador : LazyComprador

export declare const Comprador: (new (init: ModelInit<Comprador>) => Comprador) & {
  copyOf(source: Comprador, mutator: (draft: MutableModel<Comprador>) => MutableModel<Comprador> | void): Comprador;
}

type EagerApartamentComprador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ApartamentComprador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly apartamentId?: string | null;
  readonly compradorId?: string | null;
  readonly apartament: Apartament;
  readonly comprador: Comprador;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyApartamentComprador = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ApartamentComprador, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly apartamentId?: string | null;
  readonly compradorId?: string | null;
  readonly apartament: AsyncItem<Apartament>;
  readonly comprador: AsyncItem<Comprador>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ApartamentComprador = LazyLoading extends LazyLoadingDisabled ? EagerApartamentComprador : LazyApartamentComprador

export declare const ApartamentComprador: (new (init: ModelInit<ApartamentComprador>) => ApartamentComprador) & {
  copyOf(source: ApartamentComprador, mutator: (draft: MutableModel<ApartamentComprador>) => MutableModel<ApartamentComprador> | void): ApartamentComprador;
}

type EagerTorreApartament = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TorreApartament, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly apartamentId?: string | null;
  readonly torreId?: string | null;
  readonly apartament: Apartament;
  readonly torre: Torre;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTorreApartament = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TorreApartament, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly apartamentId?: string | null;
  readonly torreId?: string | null;
  readonly apartament: AsyncItem<Apartament>;
  readonly torre: AsyncItem<Torre>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TorreApartament = LazyLoading extends LazyLoadingDisabled ? EagerTorreApartament : LazyTorreApartament

export declare const TorreApartament: (new (init: ModelInit<TorreApartament>) => TorreApartament) & {
  copyOf(source: TorreApartament, mutator: (draft: MutableModel<TorreApartament>) => MutableModel<TorreApartament> | void): TorreApartament;
}