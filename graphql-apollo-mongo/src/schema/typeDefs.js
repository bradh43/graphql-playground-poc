import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Query {
        activities: [Activity!]!
        users: [User!]!
        teams: [Team!]!
        posts: [Post!]!
        distances: [Distance!]!
        listEquipment: [Equipment!]!
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
    input DistanceInput {
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
        createdAt: String!
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
        owner: User!
        createdAt: String!
        adminList: [User!]!
        memberList: [User!]!
    }
    type User {
        id: ID!
        first: String!
        last: String!
        email: String!
        username: String!
        profilePictureURL: String!
        birthdate: String!
        bio: String!
        private: Boolean!
        createdAt: String!
        teamList: [Team!]!
        equipment: [Equipment!]!
    } 

    type Comment {
        id: ID!
        note: String!
        author: User!
        createdAt: String!
        updatedAt: String!
        likeList: [User!]!
    }

    type Post {
        id: ID!
        title: String!
        note: String!
        author: User!
        createdAt: String!
        updateAt: String!
        activityList: [Activity!]!
        likeList: [User!]!
        commentList: [Comment!]!
    }

    type Mutation {
        createDistance(value: Float!, unit: AllowedUnit!): Distance!
        createEquipment(name: String, type: AllowedEquipment!, usage: DistanceInput!, limit: DistanceInput!, active: Boolean!): Equipment!
        //TODO createPost createUser deleteUser editUser likePost createPost deletePost editPost editCommentPost deleteCommentPost likeCommentPost 
    }
`;