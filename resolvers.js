const resolvers = {
  Query: {
    allUsers: async(parent, args, { User }) => {
      const users = await User.find();
      return users.map(user=> {
        user._id = user._id.toString();
        return user;
      })
    }
  },
  Mutation: {
    createUser: async(parent, args, { User }) => {
      const user = await new User(args).save();
      user._id = user._id.toString();
        return user;
      }
    }
  }

module.exports = resolvers;