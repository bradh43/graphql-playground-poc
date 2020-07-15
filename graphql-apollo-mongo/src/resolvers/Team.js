import mongoose from 'mongoose'
import { UserInputError } from 'apollo-server-express'
import { Team } from '../models'

export default {
  Query: {
    teamList: (root, args, context, info) => {
      // TODO: auth, projection, pagination

      return Team.find({})
    },
    team: (root, args, context, info) => {
      const { id } = args
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }

      return Team.findById(id)
    },
    teamListByOwner: (root, args, context, info) => {
      const { owner } = args
      // TODO: auth, projection, sanitization

      if (!mongoose.Types.ObjectId.isValid(owner)) {
        throw new UserInputError('ID is not a valid ObjectID')
      }
      // TODO: This me need fixing
      return Team.find({ owner: owner })
    }
  },
  Mutation: {
    createTeam: async (root, { input: args }, context, info) => {
      const { name, description, ownerId, adminIdList, memberIdList } = args
      // TODO: auth

      // Perform validation
      const team = await Team.create({
        name,
        description,
        owner: ownerId,
        adminList: adminIdList,
        memberList: memberIdList
      })

      return team
    }
  },
  Team: {
    owner: async (team, args, context, info) => {
      await team.populate('owner').execPopulate()
      return team.owner
    },
    adminList: async (team, args, context, info) => {
      await team.populate('adminList').execPopulate()
      return team.adminList
    },
    memberList: async (team, args, context, info) => {
      await team.populate('memberList').execPopulate()
      return team.memberList
    }
  }
}
