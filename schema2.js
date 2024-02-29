export var schema2 = 
`
type Location {
  id: ID!

  """The name of the location"""
  name: String!

  """A short description about the location"""
  description: String!

  """The location's main photo as a URL"""
  photo: String!
}

input LocationReviewInput {
  """Written text"""
  comment: String!

  """A number from 1 - 5 with 1 being lowest and 5 being highest"""
  rating: Int!

  """Location Id"""
  locationId: String!
}

`;