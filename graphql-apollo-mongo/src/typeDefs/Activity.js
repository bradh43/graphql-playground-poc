import { gql } from 'apollo-server-express'
// import { DistanceInput } from './Distance'

export default gql`
  extend type Query {
    activity(id: ID!): Activity
    activities: [Activity!]!
    activitiesByPostId(postId: ID!): [Activity!]!
  }

  enum AllowedActivity {
    RUN
    BIKE
    SWIM
    SLEEP
    CLIMB
    ALTERG
    YOGA
    AQUA_JOG
    HIKE
  }

  input CreateActivityInput {
    type: AllowedActivity!
    duration: Int
    # distance: DistanceInput
    equipment: ID
  }

  extend type Mutation {
    createActivity(input: CreateActivityInput!): Activity
  }
  
  type Activity {
    id: ID!
    type: AllowedActivity!
    duration: Int
    # distance: DistanceInput
    equipment: Equipment
    # this doesn't work...
    # additionalInfo: {
    #     averageHeartRate: Int,
    #     elevationGain: Int
    # }
  }
`
