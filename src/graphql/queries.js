/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFraccion = /* GraphQL */ `
  query GetFraccion($id: ID!) {
    getFraccion(id: $id) {
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
export const listFraccions = /* GraphQL */ `
  query ListFraccions(
    $filter: ModelFraccionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFraccions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFraccions = /* GraphQL */ `
  query SyncFraccions(
    $filter: ModelFraccionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFraccions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getApartament = /* GraphQL */ `
  query GetApartament($id: ID!) {
    getApartament(id: $id) {
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
export const listApartaments = /* GraphQL */ `
  query ListApartaments(
    $filter: ModelApartamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApartaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncApartaments = /* GraphQL */ `
  query SyncApartaments(
    $filter: ModelApartamentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncApartaments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTorre = /* GraphQL */ `
  query GetTorre($id: ID!) {
    getTorre(id: $id) {
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
export const listTorres = /* GraphQL */ `
  query ListTorres(
    $filter: ModelTorreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTorres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTorres = /* GraphQL */ `
  query SyncTorres(
    $filter: ModelTorreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTorres(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getAgentes = /* GraphQL */ `
  query GetAgentes($id: ID!) {
    getAgentes(id: $id) {
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
export const listAgentes = /* GraphQL */ `
  query ListAgentes(
    $filter: ModelAgentesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgentes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAgentes = /* GraphQL */ `
  query SyncAgentes(
    $filter: ModelAgentesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAgentes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getPropiedad = /* GraphQL */ `
  query GetPropiedad($id: ID!) {
    getPropiedad(id: $id) {
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
export const listPropiedads = /* GraphQL */ `
  query ListPropiedads(
    $filter: ModelPropiedadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPropiedads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPropiedads = /* GraphQL */ `
  query SyncPropiedads(
    $filter: ModelPropiedadFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPropiedads(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const propiedadsByAgentesID = /* GraphQL */ `
  query PropiedadsByAgentesID(
    $agentesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPropiedadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propiedadsByAgentesID(
      agentesID: $agentesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const propiedadsByApartamentID = /* GraphQL */ `
  query PropiedadsByApartamentID(
    $apartamentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPropiedadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propiedadsByApartamentID(
      apartamentID: $apartamentID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getComprador = /* GraphQL */ `
  query GetComprador($id: ID!) {
    getComprador(id: $id) {
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
export const listCompradors = /* GraphQL */ `
  query ListCompradors(
    $filter: ModelCompradorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompradors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCompradors = /* GraphQL */ `
  query SyncCompradors(
    $filter: ModelCompradorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompradors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const compradorsByAgentesID = /* GraphQL */ `
  query CompradorsByAgentesID(
    $agentesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCompradorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    compradorsByAgentesID(
      agentesID: $agentesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getApartamentComprador = /* GraphQL */ `
  query GetApartamentComprador($id: ID!) {
    getApartamentComprador(id: $id) {
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
export const listApartamentCompradors = /* GraphQL */ `
  query ListApartamentCompradors(
    $filter: ModelApartamentCompradorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listApartamentCompradors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apartamentId
        compradorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncApartamentCompradors = /* GraphQL */ `
  query SyncApartamentCompradors(
    $filter: ModelApartamentCompradorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncApartamentCompradors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        apartamentId
        compradorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const apartamentCompradorsByApartamentId = /* GraphQL */ `
  query ApartamentCompradorsByApartamentId(
    $apartamentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApartamentCompradorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apartamentCompradorsByApartamentId(
      apartamentId: $apartamentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apartamentId
        compradorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const apartamentCompradorsByCompradorId = /* GraphQL */ `
  query ApartamentCompradorsByCompradorId(
    $compradorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelApartamentCompradorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    apartamentCompradorsByCompradorId(
      compradorId: $compradorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apartamentId
        compradorId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTorreApartament = /* GraphQL */ `
  query GetTorreApartament($id: ID!) {
    getTorreApartament(id: $id) {
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
export const listTorreApartaments = /* GraphQL */ `
  query ListTorreApartaments(
    $filter: ModelTorreApartamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTorreApartaments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apartamentId
        torreId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTorreApartaments = /* GraphQL */ `
  query SyncTorreApartaments(
    $filter: ModelTorreApartamentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTorreApartaments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        apartamentId
        torreId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const torreApartamentsByApartamentId = /* GraphQL */ `
  query TorreApartamentsByApartamentId(
    $apartamentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTorreApartamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    torreApartamentsByApartamentId(
      apartamentId: $apartamentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apartamentId
        torreId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const torreApartamentsByTorreId = /* GraphQL */ `
  query TorreApartamentsByTorreId(
    $torreId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTorreApartamentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    torreApartamentsByTorreId(
      torreId: $torreId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        apartamentId
        torreId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
