const resolvers = {
  Query: {
    allUsers: async(parent, args, { User }) => {
      const users = await User.find();
      const uniqueUser = users.find(user=>{
        if(user.email == 'bob1@gmail.com')
        return user.email
      });
      console.log(uniqueUser.email);
      return users.map(user=> {
        user._id = user._id.toString();
        return user;
      })
    }
  },
  Mutation: {
    createUser: async(parent, args, { User }) => {
      // const users = await User.find();
      // const uniqueUser = users.find(user=>{
      //   if(user.email == args.id){
      //     console.log('user already exists')
      //     console.log(user)
      //   }else{
          const user = await new User(args).save();
          user._id = user._id.toString();
          return user;
        // }
      // })
    }
   }
  }

module.exports = resolvers;

// // Imports: Axios
// import axios from 'axios';
// // GraphQL: Resolvers
//   const RESOLVERS = {
//     Query: {
//     test_query: (parent, args) => {
//       return axios.get(`www.apiurl.com/people`)
//       .then((response) => response.data)
//       .catch((error) => console.log(error))
//     }
//   }
// };
// // Exports
// export default RESOLVERS;
