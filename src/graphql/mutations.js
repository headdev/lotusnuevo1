/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty($input: CreatePropertyInput!) {
    createProperty(input: $input) {
      id
      title
      description
      featuredImage {
        id
        url
        description
        isFeatured
        __typename
      }
      images {
        id
        url
        description
        isFeatured
        __typename
      }
      price
      fractionPrice
      fractionsAvailable
      location {
        address
        city
        state
        country
        zip
        latitude
        longitude
        __typename
      }
      amenities
      status
      agent {
        id
        name
        properties {
          id
          title
          description
          featuredImage {
            id
            url
            description
            isFeatured
            __typename
          }
          images {
            id
            url
            description
            isFeatured
            __typename
          }
          price
          fractionPrice
          fractionsAvailable
          location {
            address
            city
            state
            country
            zip
            latitude
            longitude
            __typename
          }
          amenities
          status
          agent {
            id
            name
            properties {
              id
              title
              description
              featuredImage {
                id
                url
                description
                isFeatured
                __typename
              }
              images {
                id
                url
                description
                isFeatured
                __typename
              }
              price
              fractionPrice
              fractionsAvailable
              location {
                address
                city
                state
                country
                zip
                latitude
                longitude
                __typename
              }
              amenities
              status
              agent {
                id
                name
                properties {
                  id
                  title
                  description
                  featuredImage {
                    id
                    url
                    description
                    isFeatured
                    __typename
                  }
                  images {
                    id
                    url
                    description
                    isFeatured
                    __typename
                  }
                  price
                  fractionPrice
                  fractionsAvailable
                  location {
                    address
                    city
                    state
                    country
                    zip
                    latitude
                    longitude
                    __typename
                  }
                  amenities
                  status
                  agent {
                    id
                    name
                    properties {
                      id
                      title
                      description
                      featuredImage {
                        id
                        url
                        description
                        isFeatured
                        __typename
                      }
                      images {
                        id
                        url
                        description
                        isFeatured
                        __typename
                      }
                      price
                      fractionPrice
                      fractionsAvailable
                      location {
                        address
                        city
                        state
                        country
                        zip
                        latitude
                        longitude
                        __typename
                      }
                      amenities
                      status
                      agent {
                        id
                        name
                        email
                        phoneNumber
                        createdAt
                        updatedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      __typename
                    }
                    email
                    phoneNumber
                    createdAt
                    updatedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  __typename
                }
                email
                phoneNumber
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            email
            phoneNumber
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        email
        phoneNumber
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty($id: ID!, $input: UpdatePropertyInput!) {
    updateProperty(id: $id, input: $input) {
      id
      title
      description
      featuredImage {
        id
        url
        description
        isFeatured
        __typename
      }
      images {
        id
        url
        description
        isFeatured
        __typename
      }
      price
      fractionPrice
      fractionsAvailable
      location {
        address
        city
        state
        country
        zip
        latitude
        longitude
        __typename
      }
      amenities
      status
      agent {
        id
        name
        properties {
          id
          title
          description
          featuredImage {
            id
            url
            description
            isFeatured
            __typename
          }
          images {
            id
            url
            description
            isFeatured
            __typename
          }
          price
          fractionPrice
          fractionsAvailable
          location {
            address
            city
            state
            country
            zip
            latitude
            longitude
            __typename
          }
          amenities
          status
          agent {
            id
            name
            properties {
              id
              title
              description
              featuredImage {
                id
                url
                description
                isFeatured
                __typename
              }
              images {
                id
                url
                description
                isFeatured
                __typename
              }
              price
              fractionPrice
              fractionsAvailable
              location {
                address
                city
                state
                country
                zip
                latitude
                longitude
                __typename
              }
              amenities
              status
              agent {
                id
                name
                properties {
                  id
                  title
                  description
                  featuredImage {
                    id
                    url
                    description
                    isFeatured
                    __typename
                  }
                  images {
                    id
                    url
                    description
                    isFeatured
                    __typename
                  }
                  price
                  fractionPrice
                  fractionsAvailable
                  location {
                    address
                    city
                    state
                    country
                    zip
                    latitude
                    longitude
                    __typename
                  }
                  amenities
                  status
                  agent {
                    id
                    name
                    properties {
                      id
                      title
                      description
                      featuredImage {
                        id
                        url
                        description
                        isFeatured
                        __typename
                      }
                      images {
                        id
                        url
                        description
                        isFeatured
                        __typename
                      }
                      price
                      fractionPrice
                      fractionsAvailable
                      location {
                        address
                        city
                        state
                        country
                        zip
                        latitude
                        longitude
                        __typename
                      }
                      amenities
                      status
                      agent {
                        id
                        name
                        email
                        phoneNumber
                        createdAt
                        updatedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      __typename
                    }
                    email
                    phoneNumber
                    createdAt
                    updatedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  __typename
                }
                email
                phoneNumber
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            email
            phoneNumber
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        email
        phoneNumber
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty($id: ID!) {
    deleteProperty(id: $id) {
      id
      title
      description
      featuredImage {
        id
        url
        description
        isFeatured
        __typename
      }
      images {
        id
        url
        description
        isFeatured
        __typename
      }
      price
      fractionPrice
      fractionsAvailable
      location {
        address
        city
        state
        country
        zip
        latitude
        longitude
        __typename
      }
      amenities
      status
      agent {
        id
        name
        properties {
          id
          title
          description
          featuredImage {
            id
            url
            description
            isFeatured
            __typename
          }
          images {
            id
            url
            description
            isFeatured
            __typename
          }
          price
          fractionPrice
          fractionsAvailable
          location {
            address
            city
            state
            country
            zip
            latitude
            longitude
            __typename
          }
          amenities
          status
          agent {
            id
            name
            properties {
              id
              title
              description
              featuredImage {
                id
                url
                description
                isFeatured
                __typename
              }
              images {
                id
                url
                description
                isFeatured
                __typename
              }
              price
              fractionPrice
              fractionsAvailable
              location {
                address
                city
                state
                country
                zip
                latitude
                longitude
                __typename
              }
              amenities
              status
              agent {
                id
                name
                properties {
                  id
                  title
                  description
                  featuredImage {
                    id
                    url
                    description
                    isFeatured
                    __typename
                  }
                  images {
                    id
                    url
                    description
                    isFeatured
                    __typename
                  }
                  price
                  fractionPrice
                  fractionsAvailable
                  location {
                    address
                    city
                    state
                    country
                    zip
                    latitude
                    longitude
                    __typename
                  }
                  amenities
                  status
                  agent {
                    id
                    name
                    properties {
                      id
                      title
                      description
                      featuredImage {
                        id
                        url
                        description
                        isFeatured
                        __typename
                      }
                      images {
                        id
                        url
                        description
                        isFeatured
                        __typename
                      }
                      price
                      fractionPrice
                      fractionsAvailable
                      location {
                        address
                        city
                        state
                        country
                        zip
                        latitude
                        longitude
                        __typename
                      }
                      amenities
                      status
                      agent {
                        id
                        name
                        email
                        phoneNumber
                        createdAt
                        updatedAt
                        __typename
                      }
                      createdAt
                      updatedAt
                      __typename
                    }
                    email
                    phoneNumber
                    createdAt
                    updatedAt
                    __typename
                  }
                  createdAt
                  updatedAt
                  __typename
                }
                email
                phoneNumber
                createdAt
                updatedAt
                __typename
              }
              createdAt
              updatedAt
              __typename
            }
            email
            phoneNumber
            createdAt
            updatedAt
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        email
        phoneNumber
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAgent = /* GraphQL */ `
  mutation CreateAgent($input: CreateAgentInput!) {
    createAgent(input: $input) {
      id
      name
      properties {
        id
        title
        description
        featuredImage {
          id
          url
          description
          isFeatured
          __typename
        }
        images {
          id
          url
          description
          isFeatured
          __typename
        }
        price
        fractionPrice
        fractionsAvailable
        location {
          address
          city
          state
          country
          zip
          latitude
          longitude
          __typename
        }
        amenities
        status
        agent {
          id
          name
          properties {
            id
            title
            description
            featuredImage {
              id
              url
              description
              isFeatured
              __typename
            }
            images {
              id
              url
              description
              isFeatured
              __typename
            }
            price
            fractionPrice
            fractionsAvailable
            location {
              address
              city
              state
              country
              zip
              latitude
              longitude
              __typename
            }
            amenities
            status
            agent {
              id
              name
              properties {
                id
                title
                description
                featuredImage {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                images {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                price
                fractionPrice
                fractionsAvailable
                location {
                  address
                  city
                  state
                  country
                  zip
                  latitude
                  longitude
                  __typename
                }
                amenities
                status
                agent {
                  id
                  name
                  properties {
                    id
                    title
                    description
                    featuredImage {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    images {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    price
                    fractionPrice
                    fractionsAvailable
                    location {
                      address
                      city
                      state
                      country
                      zip
                      latitude
                      longitude
                      __typename
                    }
                    amenities
                    status
                    agent {
                      id
                      name
                      properties {
                        id
                        title
                        description
                        price
                        fractionPrice
                        fractionsAvailable
                        amenities
                        status
                        createdAt
                        updatedAt
                        __typename
                      }
                      email
                      phoneNumber
                      createdAt
                      updatedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    __typename
                  }
                  email
                  phoneNumber
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              email
              phoneNumber
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          email
          phoneNumber
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      email
      phoneNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAgent = /* GraphQL */ `
  mutation UpdateAgent($id: ID!, $input: UpdateAgentInput!) {
    updateAgent(id: $id, input: $input) {
      id
      name
      properties {
        id
        title
        description
        featuredImage {
          id
          url
          description
          isFeatured
          __typename
        }
        images {
          id
          url
          description
          isFeatured
          __typename
        }
        price
        fractionPrice
        fractionsAvailable
        location {
          address
          city
          state
          country
          zip
          latitude
          longitude
          __typename
        }
        amenities
        status
        agent {
          id
          name
          properties {
            id
            title
            description
            featuredImage {
              id
              url
              description
              isFeatured
              __typename
            }
            images {
              id
              url
              description
              isFeatured
              __typename
            }
            price
            fractionPrice
            fractionsAvailable
            location {
              address
              city
              state
              country
              zip
              latitude
              longitude
              __typename
            }
            amenities
            status
            agent {
              id
              name
              properties {
                id
                title
                description
                featuredImage {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                images {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                price
                fractionPrice
                fractionsAvailable
                location {
                  address
                  city
                  state
                  country
                  zip
                  latitude
                  longitude
                  __typename
                }
                amenities
                status
                agent {
                  id
                  name
                  properties {
                    id
                    title
                    description
                    featuredImage {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    images {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    price
                    fractionPrice
                    fractionsAvailable
                    location {
                      address
                      city
                      state
                      country
                      zip
                      latitude
                      longitude
                      __typename
                    }
                    amenities
                    status
                    agent {
                      id
                      name
                      properties {
                        id
                        title
                        description
                        price
                        fractionPrice
                        fractionsAvailable
                        amenities
                        status
                        createdAt
                        updatedAt
                        __typename
                      }
                      email
                      phoneNumber
                      createdAt
                      updatedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    __typename
                  }
                  email
                  phoneNumber
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              email
              phoneNumber
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          email
          phoneNumber
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      email
      phoneNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAgent = /* GraphQL */ `
  mutation DeleteAgent($id: ID!) {
    deleteAgent(id: $id) {
      id
      name
      properties {
        id
        title
        description
        featuredImage {
          id
          url
          description
          isFeatured
          __typename
        }
        images {
          id
          url
          description
          isFeatured
          __typename
        }
        price
        fractionPrice
        fractionsAvailable
        location {
          address
          city
          state
          country
          zip
          latitude
          longitude
          __typename
        }
        amenities
        status
        agent {
          id
          name
          properties {
            id
            title
            description
            featuredImage {
              id
              url
              description
              isFeatured
              __typename
            }
            images {
              id
              url
              description
              isFeatured
              __typename
            }
            price
            fractionPrice
            fractionsAvailable
            location {
              address
              city
              state
              country
              zip
              latitude
              longitude
              __typename
            }
            amenities
            status
            agent {
              id
              name
              properties {
                id
                title
                description
                featuredImage {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                images {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                price
                fractionPrice
                fractionsAvailable
                location {
                  address
                  city
                  state
                  country
                  zip
                  latitude
                  longitude
                  __typename
                }
                amenities
                status
                agent {
                  id
                  name
                  properties {
                    id
                    title
                    description
                    featuredImage {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    images {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    price
                    fractionPrice
                    fractionsAvailable
                    location {
                      address
                      city
                      state
                      country
                      zip
                      latitude
                      longitude
                      __typename
                    }
                    amenities
                    status
                    agent {
                      id
                      name
                      properties {
                        id
                        title
                        description
                        price
                        fractionPrice
                        fractionsAvailable
                        amenities
                        status
                        createdAt
                        updatedAt
                        __typename
                      }
                      email
                      phoneNumber
                      createdAt
                      updatedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    __typename
                  }
                  email
                  phoneNumber
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              email
              phoneNumber
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          email
          phoneNumber
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      email
      phoneNumber
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBuyer = /* GraphQL */ `
  mutation CreateBuyer($input: CreateBuyerInput!) {
    createBuyer(input: $input) {
      id
      name
      email
      phoneNumber
      propertiesInterestedIn {
        id
        title
        description
        featuredImage {
          id
          url
          description
          isFeatured
          __typename
        }
        images {
          id
          url
          description
          isFeatured
          __typename
        }
        price
        fractionPrice
        fractionsAvailable
        location {
          address
          city
          state
          country
          zip
          latitude
          longitude
          __typename
        }
        amenities
        status
        agent {
          id
          name
          properties {
            id
            title
            description
            featuredImage {
              id
              url
              description
              isFeatured
              __typename
            }
            images {
              id
              url
              description
              isFeatured
              __typename
            }
            price
            fractionPrice
            fractionsAvailable
            location {
              address
              city
              state
              country
              zip
              latitude
              longitude
              __typename
            }
            amenities
            status
            agent {
              id
              name
              properties {
                id
                title
                description
                featuredImage {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                images {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                price
                fractionPrice
                fractionsAvailable
                location {
                  address
                  city
                  state
                  country
                  zip
                  latitude
                  longitude
                  __typename
                }
                amenities
                status
                agent {
                  id
                  name
                  properties {
                    id
                    title
                    description
                    featuredImage {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    images {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    price
                    fractionPrice
                    fractionsAvailable
                    location {
                      address
                      city
                      state
                      country
                      zip
                      latitude
                      longitude
                      __typename
                    }
                    amenities
                    status
                    agent {
                      id
                      name
                      properties {
                        id
                        title
                        description
                        price
                        fractionPrice
                        fractionsAvailable
                        amenities
                        status
                        createdAt
                        updatedAt
                        __typename
                      }
                      email
                      phoneNumber
                      createdAt
                      updatedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    __typename
                  }
                  email
                  phoneNumber
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              email
              phoneNumber
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          email
          phoneNumber
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBuyer = /* GraphQL */ `
  mutation UpdateBuyer($id: ID!, $input: UpdateBuyerInput!) {
    updateBuyer(id: $id, input: $input) {
      id
      name
      email
      phoneNumber
      propertiesInterestedIn {
        id
        title
        description
        featuredImage {
          id
          url
          description
          isFeatured
          __typename
        }
        images {
          id
          url
          description
          isFeatured
          __typename
        }
        price
        fractionPrice
        fractionsAvailable
        location {
          address
          city
          state
          country
          zip
          latitude
          longitude
          __typename
        }
        amenities
        status
        agent {
          id
          name
          properties {
            id
            title
            description
            featuredImage {
              id
              url
              description
              isFeatured
              __typename
            }
            images {
              id
              url
              description
              isFeatured
              __typename
            }
            price
            fractionPrice
            fractionsAvailable
            location {
              address
              city
              state
              country
              zip
              latitude
              longitude
              __typename
            }
            amenities
            status
            agent {
              id
              name
              properties {
                id
                title
                description
                featuredImage {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                images {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                price
                fractionPrice
                fractionsAvailable
                location {
                  address
                  city
                  state
                  country
                  zip
                  latitude
                  longitude
                  __typename
                }
                amenities
                status
                agent {
                  id
                  name
                  properties {
                    id
                    title
                    description
                    featuredImage {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    images {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    price
                    fractionPrice
                    fractionsAvailable
                    location {
                      address
                      city
                      state
                      country
                      zip
                      latitude
                      longitude
                      __typename
                    }
                    amenities
                    status
                    agent {
                      id
                      name
                      properties {
                        id
                        title
                        description
                        price
                        fractionPrice
                        fractionsAvailable
                        amenities
                        status
                        createdAt
                        updatedAt
                        __typename
                      }
                      email
                      phoneNumber
                      createdAt
                      updatedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    __typename
                  }
                  email
                  phoneNumber
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              email
              phoneNumber
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          email
          phoneNumber
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBuyer = /* GraphQL */ `
  mutation DeleteBuyer($id: ID!) {
    deleteBuyer(id: $id) {
      id
      name
      email
      phoneNumber
      propertiesInterestedIn {
        id
        title
        description
        featuredImage {
          id
          url
          description
          isFeatured
          __typename
        }
        images {
          id
          url
          description
          isFeatured
          __typename
        }
        price
        fractionPrice
        fractionsAvailable
        location {
          address
          city
          state
          country
          zip
          latitude
          longitude
          __typename
        }
        amenities
        status
        agent {
          id
          name
          properties {
            id
            title
            description
            featuredImage {
              id
              url
              description
              isFeatured
              __typename
            }
            images {
              id
              url
              description
              isFeatured
              __typename
            }
            price
            fractionPrice
            fractionsAvailable
            location {
              address
              city
              state
              country
              zip
              latitude
              longitude
              __typename
            }
            amenities
            status
            agent {
              id
              name
              properties {
                id
                title
                description
                featuredImage {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                images {
                  id
                  url
                  description
                  isFeatured
                  __typename
                }
                price
                fractionPrice
                fractionsAvailable
                location {
                  address
                  city
                  state
                  country
                  zip
                  latitude
                  longitude
                  __typename
                }
                amenities
                status
                agent {
                  id
                  name
                  properties {
                    id
                    title
                    description
                    featuredImage {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    images {
                      id
                      url
                      description
                      isFeatured
                      __typename
                    }
                    price
                    fractionPrice
                    fractionsAvailable
                    location {
                      address
                      city
                      state
                      country
                      zip
                      latitude
                      longitude
                      __typename
                    }
                    amenities
                    status
                    agent {
                      id
                      name
                      properties {
                        id
                        title
                        description
                        price
                        fractionPrice
                        fractionsAvailable
                        amenities
                        status
                        createdAt
                        updatedAt
                        __typename
                      }
                      email
                      phoneNumber
                      createdAt
                      updatedAt
                      __typename
                    }
                    createdAt
                    updatedAt
                    __typename
                  }
                  email
                  phoneNumber
                  createdAt
                  updatedAt
                  __typename
                }
                createdAt
                updatedAt
                __typename
              }
              email
              phoneNumber
              createdAt
              updatedAt
              __typename
            }
            createdAt
            updatedAt
            __typename
          }
          email
          phoneNumber
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const loginUser = /* GraphQL */ `
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const changePassword = /* GraphQL */ `
  mutation ChangePassword($input: ChangePasswordInput!) {
    changePassword(input: $input) {
      token
      user {
        id
        name
        email
        phoneNumber
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
