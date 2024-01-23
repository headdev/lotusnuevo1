/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFraccion = /* GraphQL */ `
  subscription OnCreateFraccion($filter: ModelSubscriptionFraccionFilterInput) {
    onCreateFraccion(filter: $filter) {
      id
      Titulo
      Valor
      dimensionfraccion
      vendido
      preciopormetro
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateFraccion = /* GraphQL */ `
  subscription OnUpdateFraccion($filter: ModelSubscriptionFraccionFilterInput) {
    onUpdateFraccion(filter: $filter) {
      id
      Titulo
      Valor
      dimensionfraccion
      vendido
      preciopormetro
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteFraccion = /* GraphQL */ `
  subscription OnDeleteFraccion($filter: ModelSubscriptionFraccionFilterInput) {
    onDeleteFraccion(filter: $filter) {
      id
      Titulo
      Valor
      dimensionfraccion
      vendido
      preciopormetro
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateApartament = /* GraphQL */ `
  subscription OnCreateApartament(
    $filter: ModelSubscriptionApartamentFilterInput
  ) {
    onCreateApartament(filter: $filter) {
      id
      Propiedads {
        nextToken
        startedAt
        __typename
      }
      m2
      valor
      fracciones
      Compradors {
        nextToken
        startedAt
        __typename
      }
      Agentes {
        id
        nombre
        email
        telefono
        direccion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      torres {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      apartamentAgentesId
      __typename
    }
  }
`;
export const onUpdateApartament = /* GraphQL */ `
  subscription OnUpdateApartament(
    $filter: ModelSubscriptionApartamentFilterInput
  ) {
    onUpdateApartament(filter: $filter) {
      id
      Propiedads {
        nextToken
        startedAt
        __typename
      }
      m2
      valor
      fracciones
      Compradors {
        nextToken
        startedAt
        __typename
      }
      Agentes {
        id
        nombre
        email
        telefono
        direccion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      torres {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      apartamentAgentesId
      __typename
    }
  }
`;
export const onDeleteApartament = /* GraphQL */ `
  subscription OnDeleteApartament(
    $filter: ModelSubscriptionApartamentFilterInput
  ) {
    onDeleteApartament(filter: $filter) {
      id
      Propiedads {
        nextToken
        startedAt
        __typename
      }
      m2
      valor
      fracciones
      Compradors {
        nextToken
        startedAt
        __typename
      }
      Agentes {
        id
        nombre
        email
        telefono
        direccion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      torres {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      apartamentAgentesId
      __typename
    }
  }
`;
export const onCreateTorre = /* GraphQL */ `
  subscription OnCreateTorre($filter: ModelSubscriptionTorreFilterInput) {
    onCreateTorre(filter: $filter) {
      id
      Apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      Propiedad {
        id
        untitledfield
        titulo
        Descripcioncorta
        Descripcionlarga
        Preciototal
        Precioporfraccion
        Imagendestacada
        imagenessecundarias
        agentesID
        apartamentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propiedadCompradorId
        __typename
      }
      titulodelatorre
      numero
      Apartaments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      torreApartamentId
      torrePropiedadId
      __typename
    }
  }
`;
export const onUpdateTorre = /* GraphQL */ `
  subscription OnUpdateTorre($filter: ModelSubscriptionTorreFilterInput) {
    onUpdateTorre(filter: $filter) {
      id
      Apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      Propiedad {
        id
        untitledfield
        titulo
        Descripcioncorta
        Descripcionlarga
        Preciototal
        Precioporfraccion
        Imagendestacada
        imagenessecundarias
        agentesID
        apartamentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propiedadCompradorId
        __typename
      }
      titulodelatorre
      numero
      Apartaments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      torreApartamentId
      torrePropiedadId
      __typename
    }
  }
`;
export const onDeleteTorre = /* GraphQL */ `
  subscription OnDeleteTorre($filter: ModelSubscriptionTorreFilterInput) {
    onDeleteTorre(filter: $filter) {
      id
      Apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      Propiedad {
        id
        untitledfield
        titulo
        Descripcioncorta
        Descripcionlarga
        Preciototal
        Precioporfraccion
        Imagendestacada
        imagenessecundarias
        agentesID
        apartamentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propiedadCompradorId
        __typename
      }
      titulodelatorre
      numero
      Apartaments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      torreApartamentId
      torrePropiedadId
      __typename
    }
  }
`;
export const onCreateAgentes = /* GraphQL */ `
  subscription OnCreateAgentes($filter: ModelSubscriptionAgentesFilterInput) {
    onCreateAgentes(filter: $filter) {
      id
      nombre
      email
      telefono
      direccion
      identificacion {
        Cedula
        Pasaporte
        Licencia
        DNi
        __typename
      }
      Propiedads {
        nextToken
        startedAt
        __typename
      }
      Compradors {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAgentes = /* GraphQL */ `
  subscription OnUpdateAgentes($filter: ModelSubscriptionAgentesFilterInput) {
    onUpdateAgentes(filter: $filter) {
      id
      nombre
      email
      telefono
      direccion
      identificacion {
        Cedula
        Pasaporte
        Licencia
        DNi
        __typename
      }
      Propiedads {
        nextToken
        startedAt
        __typename
      }
      Compradors {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAgentes = /* GraphQL */ `
  subscription OnDeleteAgentes($filter: ModelSubscriptionAgentesFilterInput) {
    onDeleteAgentes(filter: $filter) {
      id
      nombre
      email
      telefono
      direccion
      identificacion {
        Cedula
        Pasaporte
        Licencia
        DNi
        __typename
      }
      Propiedads {
        nextToken
        startedAt
        __typename
      }
      Compradors {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePropiedad = /* GraphQL */ `
  subscription OnCreatePropiedad(
    $filter: ModelSubscriptionPropiedadFilterInput
  ) {
    onCreatePropiedad(filter: $filter) {
      id
      untitledfield
      Comprador {
        id
        Nombre
        fotoperfil
        apellido
        numeroidentificacion
        ciudad
        Estado
        Pais
        agentesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compradorPropiedadId
        __typename
      }
      titulo
      Descripcioncorta
      Descripcionlarga
      Preciototal
      Precioporfraccion
      Imagendestacada
      imagenessecundarias
      agentesID
      apartamentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      propiedadCompradorId
      __typename
    }
  }
`;
export const onUpdatePropiedad = /* GraphQL */ `
  subscription OnUpdatePropiedad(
    $filter: ModelSubscriptionPropiedadFilterInput
  ) {
    onUpdatePropiedad(filter: $filter) {
      id
      untitledfield
      Comprador {
        id
        Nombre
        fotoperfil
        apellido
        numeroidentificacion
        ciudad
        Estado
        Pais
        agentesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compradorPropiedadId
        __typename
      }
      titulo
      Descripcioncorta
      Descripcionlarga
      Preciototal
      Precioporfraccion
      Imagendestacada
      imagenessecundarias
      agentesID
      apartamentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      propiedadCompradorId
      __typename
    }
  }
`;
export const onDeletePropiedad = /* GraphQL */ `
  subscription OnDeletePropiedad(
    $filter: ModelSubscriptionPropiedadFilterInput
  ) {
    onDeletePropiedad(filter: $filter) {
      id
      untitledfield
      Comprador {
        id
        Nombre
        fotoperfil
        apellido
        numeroidentificacion
        ciudad
        Estado
        Pais
        agentesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compradorPropiedadId
        __typename
      }
      titulo
      Descripcioncorta
      Descripcionlarga
      Preciototal
      Precioporfraccion
      Imagendestacada
      imagenessecundarias
      agentesID
      apartamentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      propiedadCompradorId
      __typename
    }
  }
`;
export const onCreateComprador = /* GraphQL */ `
  subscription OnCreateComprador(
    $filter: ModelSubscriptionCompradorFilterInput
  ) {
    onCreateComprador(filter: $filter) {
      id
      Nombre
      fotoperfil
      apellido
      Tipoidentificacion {
        Cedula
        Pasaporte
        Licencia
        DNi
        __typename
      }
      numeroidentificacion
      ciudad
      Estado
      Pais
      Propiedad {
        id
        untitledfield
        titulo
        Descripcioncorta
        Descripcionlarga
        Preciototal
        Precioporfraccion
        Imagendestacada
        imagenessecundarias
        agentesID
        apartamentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propiedadCompradorId
        __typename
      }
      agentesID
      Vendedor {
        id
        nombre
        email
        telefono
        direccion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      apartaments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compradorPropiedadId
      __typename
    }
  }
`;
export const onUpdateComprador = /* GraphQL */ `
  subscription OnUpdateComprador(
    $filter: ModelSubscriptionCompradorFilterInput
  ) {
    onUpdateComprador(filter: $filter) {
      id
      Nombre
      fotoperfil
      apellido
      Tipoidentificacion {
        Cedula
        Pasaporte
        Licencia
        DNi
        __typename
      }
      numeroidentificacion
      ciudad
      Estado
      Pais
      Propiedad {
        id
        untitledfield
        titulo
        Descripcioncorta
        Descripcionlarga
        Preciototal
        Precioporfraccion
        Imagendestacada
        imagenessecundarias
        agentesID
        apartamentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propiedadCompradorId
        __typename
      }
      agentesID
      Vendedor {
        id
        nombre
        email
        telefono
        direccion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      apartaments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compradorPropiedadId
      __typename
    }
  }
`;
export const onDeleteComprador = /* GraphQL */ `
  subscription OnDeleteComprador(
    $filter: ModelSubscriptionCompradorFilterInput
  ) {
    onDeleteComprador(filter: $filter) {
      id
      Nombre
      fotoperfil
      apellido
      Tipoidentificacion {
        Cedula
        Pasaporte
        Licencia
        DNi
        __typename
      }
      numeroidentificacion
      ciudad
      Estado
      Pais
      Propiedad {
        id
        untitledfield
        titulo
        Descripcioncorta
        Descripcionlarga
        Preciototal
        Precioporfraccion
        Imagendestacada
        imagenessecundarias
        agentesID
        apartamentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        propiedadCompradorId
        __typename
      }
      agentesID
      Vendedor {
        id
        nombre
        email
        telefono
        direccion
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      apartaments {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compradorPropiedadId
      __typename
    }
  }
`;
export const onCreateApartamentComprador = /* GraphQL */ `
  subscription OnCreateApartamentComprador(
    $filter: ModelSubscriptionApartamentCompradorFilterInput
  ) {
    onCreateApartamentComprador(filter: $filter) {
      id
      apartamentId
      compradorId
      apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      comprador {
        id
        Nombre
        fotoperfil
        apellido
        numeroidentificacion
        ciudad
        Estado
        Pais
        agentesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compradorPropiedadId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateApartamentComprador = /* GraphQL */ `
  subscription OnUpdateApartamentComprador(
    $filter: ModelSubscriptionApartamentCompradorFilterInput
  ) {
    onUpdateApartamentComprador(filter: $filter) {
      id
      apartamentId
      compradorId
      apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      comprador {
        id
        Nombre
        fotoperfil
        apellido
        numeroidentificacion
        ciudad
        Estado
        Pais
        agentesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compradorPropiedadId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteApartamentComprador = /* GraphQL */ `
  subscription OnDeleteApartamentComprador(
    $filter: ModelSubscriptionApartamentCompradorFilterInput
  ) {
    onDeleteApartamentComprador(filter: $filter) {
      id
      apartamentId
      compradorId
      apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      comprador {
        id
        Nombre
        fotoperfil
        apellido
        numeroidentificacion
        ciudad
        Estado
        Pais
        agentesID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compradorPropiedadId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateTorreApartament = /* GraphQL */ `
  subscription OnCreateTorreApartament(
    $filter: ModelSubscriptionTorreApartamentFilterInput
  ) {
    onCreateTorreApartament(filter: $filter) {
      id
      apartamentId
      torreId
      apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      torre {
        id
        titulodelatorre
        numero
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        torreApartamentId
        torrePropiedadId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateTorreApartament = /* GraphQL */ `
  subscription OnUpdateTorreApartament(
    $filter: ModelSubscriptionTorreApartamentFilterInput
  ) {
    onUpdateTorreApartament(filter: $filter) {
      id
      apartamentId
      torreId
      apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      torre {
        id
        titulodelatorre
        numero
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        torreApartamentId
        torrePropiedadId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteTorreApartament = /* GraphQL */ `
  subscription OnDeleteTorreApartament(
    $filter: ModelSubscriptionTorreApartamentFilterInput
  ) {
    onDeleteTorreApartament(filter: $filter) {
      id
      apartamentId
      torreId
      apartament {
        id
        m2
        valor
        fracciones
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        apartamentAgentesId
        __typename
      }
      torre {
        id
        titulodelatorre
        numero
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        torreApartamentId
        torrePropiedadId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
