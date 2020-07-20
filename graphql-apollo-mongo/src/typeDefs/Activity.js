import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    activity(id: ID!): Activity
    activityList: [Activity!]!
    activityListByPostId(postId: ID!): [Activity!]!
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

  input AdditionalInfoInput {
    averageHeartRate: Int
    elevationGain: Int
    calories: Int
  }

  input CreateActivityInput {
    type: AllowedActivity!
    duration: Int
    distance: DistanceInput
    equipmentId: ID
    additionalInfo: AdditionalInfoInput
  }

  input UpdateActivityInput {
    activityId: ID!
    type: AllowedActivity
    duration: Int
    distance: DistanceInput
    equipmentId: ID
    additionalInfo: AdditionalInfoInput
  }

  extend type Mutation {
    createActivity(input: CreateActivityInput!): Activity!

    # TODO
    updatedActivity(input: UpdateActivityInput!): Activity!
    deleteActivity(activityId: ID!): Activity!
  }
  
  type AdditionalInfo {
    averageHeartRate: Int
    elevationGain: Int
    calories: Int
  }
  type Activity {
    id: ID!
    type: AllowedActivity!
    duration: Int
    distance: Distance
    equipment: Equipment
    additionalInfo: AdditionalInfo
  }
`
