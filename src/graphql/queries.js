/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listProperties = /* GraphQL */ `
  query ListProperties {
    listProperties {
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
export const getPropertyById = /* GraphQL */ `
  query GetPropertyById($id: ID!) {
    getPropertyById(id: $id) {
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
export const searchProperties = /* GraphQL */ `
  query SearchProperties($filter: PropertySearchFilter) {
    searchProperties(filter: $filter) {
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
export const listAgents = /* GraphQL */ `
  query ListAgents {
    listAgents {
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
export const getAgentById = /* GraphQL */ `
  query GetAgentById($id: ID!) {
    getAgentById(id: $id) {
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
export const listBuyers = /* GraphQL */ `
  query ListBuyers {
    listBuyers {
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
export const getBuyerById = /* GraphQL */ `
  query GetBuyerById($id: ID!) {
    getBuyerById(id: $id) {
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
