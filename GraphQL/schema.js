import Db from './db'
import user from './user'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} from 'graphql'

const User = new GraphQLObjectType({
    name: 'User',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(user) {
                    return user.id
                }
            },
            firstName: {
                type: GraphQLString,
                resolve(user) {
                    return user.firstName
                }
            }
        }
    }
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
       return {
           user: {
               type: new GraphQLList(User),
               args: {
                   id: {
                       type: GraphQLInt
                   }
               },
               resolve(root, args) {
                   console.log(args);
                   return Db.models.user.findAll({where: args})
               }
           }
       }
    }
})

const Schema = new GraphQLSchema({
    query: Query
})

export default Schema
