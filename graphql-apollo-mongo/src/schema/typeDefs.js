import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        hello: String!
        cats: [Cat!]!
        activities: [Activity!]!
        users: [User!]!
        teams: [Team!]!
        posts: [Post!]!
        distances: [Distance!]!
        remove_distance: Distance
    } 
    type Cat {
        id: ID!
        name: String!
    }
    enum AllowedUnit {
        KM
        YDS
        MI
        M
    }
    type Distance {
        value: Float!
        unit: AllowedUnit!
    }
    enum AllowedEquipment {
        SHOE
        BIKE
    }
    type Equipment {
        id: ID!
        type: AllowedEquipment!
        name: String!
        creation_date: String!
        usage: Distance!
        limit: Distance!
        active: Boolean!
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
    type Activity {
        id: ID!
        type: AllowedActivity!
        duration: Int!
        distance: Distance!
        equipment: Equipment
    }
    type Team {
        id: ID!
        name: String!
        description: String!
        creator: User!
        creation_date: String!
        admin_list: [User!]!
        member_list: [User!]!
    }
    type User {
        id: ID!
        first: String!
        last: String!
        email: String!
        display_name: String!
        profile_picture_url: String!
        birthdate: String!
        bio: String!
        private: Boolean!
        creation_date: String!
        team_list: [Team!]!
        equipment: [Equipment!]!
    } 

    type Comment {
        id: ID!
        note: String!
        author: User!
        creation_date: String!
        last_updated_timestamp: String!
        like_list: [User!]!
    }

    type Post {
        id: ID!
        title: String!
        note: String!
        author: User!
        creation_date: String!
        last_updated_timestamp: String!
        activity_list: [Activity!]!
        like_list: [User!]!
        comment_list: [Comment!]!
    }
    type Mutation {
        createCat(name: String!): Cat!
        createDistance(value: Float!, unit: AllowedUnit!): Distance!
        # createEquipment(type: AllowedEquipment!, name: String!, creation_date: String!, usage: Distance!, limit: Distance!, active: Boolean!): Equipment!

    }
`;