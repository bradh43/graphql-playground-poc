import { gql } from 'apollo-server-express'
import { DistanceInput } from './Distance'

export default gql`
  extend type Query {
    activity(id: ID!): Activity
    activities: [Activity!]!
    activitiesByLogID(logID: ID!): [Activity!]!
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

  # FIX ME: activity
  input CreateActivityInput {
    type: AllowedActivity!
    duration: Int
    distance: DistanceInput 
  }

  extend type Mutation {
    createActivity(input: CreateActivityInput!): Activity
  }
  
  type Activity {
    id: ID!
    type: AllowedActivity!
    duration: Int
    distance: Distance
    equipment: Equipment
    additionalInfo: {
        averageHeartRate: Int,
        elevationGain: Int
    }
  }
`
