import { Cat } from "../models/Cat"
import { Activity } from "../models/Activity";
import { User } from "../models/User";
import { Team } from "../models/Team";
import { Post } from "../models/Post";
import { Distance } from "../models/Distance";
import { Equipment } from "../models/Equipment";



export const resolvers = {
    Query: {
        hello: () => "Hi GraphQL",
        cats: () => Cat.find(),
        activities: () => Activity.find(),
        users: () => User.find(),
        teams: () => Team.find(),
        posts: () => Post.find(),
        distances: () => Distance.find(),
        remove_distance: () => Distance.find().remove()
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const cat = new Cat({ name });
            await cat.save();
            return cat;
        },
        createDistance: async (_,{ value, unit }) => {
            const distance = new Distance({ value, unit });
            await distance.save();
            return distance;
        }
        // createEquipment: async (_,{ value, unit }) => {
        //     const distance = new Equipment({ value, unit });
        //     await distance.save();
        //     return distance;
        // }

        // createUser: async (_, { first, last, email, display_name, profile_picture_url, birthdate, bio, private, creation_date }) => {
        //     const user = new User({ first, last, email, display_name, profile_picture_url, birthdate, bio, private, creation_date });
        //     await user.save();
        //     return user;
        // }
    }
};