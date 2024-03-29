/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFraccion = /* GraphQL */ `
  mutation CreateFraccion(
    $input: CreateFraccionInput!
    $condition: ModelFraccionConditionInput
  ) {
    createFraccion(input: $input, condition: $condition) {
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
export const updateFraccion = /* GraphQL */ `
  mutation UpdateFraccion(
    $input: UpdateFraccionInput!
    $condition: ModelFraccionConditionInput
  ) {
    updateFraccion(input: $input, condition: $condition) {
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
export const deleteFraccion = /* GraphQL */ `
  mutation DeleteFraccion(
    $input: DeleteFraccionInput!
    $condition: ModelFraccionConditionInput
  ) {
    deleteFraccion(input: $input, condition: $condition) {
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
export const createApartament = /* GraphQL */ `
  mutation CreateApartament(
    $input: CreateApartamentInput!
    $condition: ModelApartamentConditionInput
  ) {
    createApartament(input: $input, condition: $condition) {
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
export const updateApartament = /* GraphQL */ `
  mutation UpdateApartament(
    $input: UpdateApartamentInput!
    $condition: ModelApartamentConditionInput
  ) {
    updateApartament(input: $input, condition: $condition) {
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
export const deleteApartament = /* GraphQL */ `
  mutation DeleteApartament(
    $input: DeleteApartamentInput!
    $condition: ModelApartamentConditionInput
  ) {
    deleteApartament(input: $input, condition: $condition) {
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
export const createTorre = /* GraphQL */ `
  mutation CreateTorre(
    $input: CreateTorreInput!
    $condition: ModelTorreConditionInput
  ) {
    createTorre(input: $input, condition: $condition) {
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
export const updateTorre = /* GraphQL */ `
  mutation UpdateTorre(
    $input: UpdateTorreInput!
    $condition: ModelTorreConditionInput
  ) {
    updateTorre(input: $input, condition: $condition) {
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
export const deleteTorre = /* GraphQL */ `
  mutation DeleteTorre(
    $input: DeleteTorreInput!
    $condition: ModelTorreConditionInput
  ) {
    deleteTorre(input: $input, condition: $condition) {
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
export const createAgentes = /* GraphQL */ `
  mutation CreateAgentes(
    $input: CreateAgentesInput!
    $condition: ModelAgentesConditionInput
  ) {
    createAgentes(input: $input, condition: $condition) {
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
export const updateAgentes = /* GraphQL */ `
  mutation UpdateAgentes(
    $input: UpdateAgentesInput!
    $condition: ModelAgentesConditionInput
  ) {
    updateAgentes(input: $input, condition: $condition) {
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
export const deleteAgentes = /* GraphQL */ `
  mutation DeleteAgentes(
    $input: DeleteAgentesInput!
    $condition: ModelAgentesConditionInput
  ) {
    deleteAgentes(input: $input, condition: $condition) {
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
export const createPropiedad = /* GraphQL */ `
  mutation CreatePropiedad(
    $input: CreatePropiedadInput!
    $condition: ModelPropiedadConditionInput
  ) {
    createPropiedad(input: $input, condition: $condition) {
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
export const updatePropiedad = /* GraphQL */ `
  mutation UpdatePropiedad(
    $input: UpdatePropiedadInput!
    $condition: ModelPropiedadConditionInput
  ) {
    updatePropiedad(input: $input, condition: $condition) {
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
export const deletePropiedad = /* GraphQL */ `
  mutation DeletePropiedad(
    $input: DeletePropiedadInput!
    $condition: ModelPropiedadConditionInput
  ) {
    deletePropiedad(input: $input, condition: $condition) {
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
export const createComprador = /* GraphQL */ `
  mutation CreateComprador(
    $input: CreateCompradorInput!
    $condition: ModelCompradorConditionInput
  ) {
    createComprador(input: $input, condition: $condition) {
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
export const updateComprador = /* GraphQL */ `
  mutation UpdateComprador(
    $input: UpdateCompradorInput!
    $condition: ModelCompradorConditionInput
  ) {
    updateComprador(input: $input, condition: $condition) {
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
export const deleteComprador = /* GraphQL */ `
  mutation DeleteComprador(
    $input: DeleteCompradorInput!
    $condition: ModelCompradorConditionInput
  ) {
    deleteComprador(input: $input, condition: $condition) {
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
export const createApartamentComprador = /* GraphQL */ `
  mutation CreateApartamentComprador(
    $input: CreateApartamentCompradorInput!
    $condition: ModelApartamentCompradorConditionInput
  ) {
    createApartamentComprador(input: $input, condition: $condition) {
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
export const updateApartamentComprador = /* GraphQL */ `
  mutation UpdateApartamentComprador(
    $input: UpdateApartamentCompradorInput!
    $condition: ModelApartamentCompradorConditionInput
  ) {
    updateApartamentComprador(input: $input, condition: $condition) {
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
export const deleteApartamentComprador = /* GraphQL */ `
  mutation DeleteApartamentComprador(
    $input: DeleteApartamentCompradorInput!
    $condition: ModelApartamentCompradorConditionInput
  ) {
    deleteApartamentComprador(input: $input, condition: $condition) {
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
export const createTorreApartament = /* GraphQL */ `
  mutation CreateTorreApartament(
    $input: CreateTorreApartamentInput!
    $condition: ModelTorreApartamentConditionInput
  ) {
    createTorreApartament(input: $input, condition: $condition) {
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
export const updateTorreApartament = /* GraphQL */ `
  mutation UpdateTorreApartament(
    $input: UpdateTorreApartamentInput!
    $condition: ModelTorreApartamentConditionInput
  ) {
    updateTorreApartament(input: $input, condition: $condition) {
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
export const deleteTorreApartament = /* GraphQL */ `
  mutation DeleteTorreApartament(
    $input: DeleteTorreApartamentInput!
    $condition: ModelTorreApartamentConditionInput
  ) {
    deleteTorreApartament(input: $input, condition: $condition) {
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
