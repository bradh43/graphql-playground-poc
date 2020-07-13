import { Activity } from "../models/Activity";
import { User } from "../models/User";
import { Team } from "../models/Team";
import { Post } from "../models/Post";
import { Distance } from "../models/Distance";
import { Equipment } from "../models/Equipment";



export const resolvers = {
    Query: {
        activities: () => Activity.find(),
        users: () => User.find(),
        teams: () => Team.find(),
        posts: () => Post.find(),
        listEquipment: () => Equipment.find(),
    },
    Mutation: {
        createDistance: async (_,{ value, unit }) => {
            const distance = new Distance({ value, unit });
            await distance.save();
            return distance;
        },

        createEquipment: async (_,{ name, type, usage, limit, active }) => {
            const equipment = new Equipment({ name, type, usage, limit, active });
            await equipment.save();
            return equipment;
        }

        // createUser: async (_, { first, last, email, username, profilePictureUrl, birthdate, bio, private, createdAt }) => {
        //     const user = new User({ first, last, email, username, profilePictureURL, birthdate, bio, private, createdAt });
        //     await user.save();
        //     return user;
        // }
    }
};