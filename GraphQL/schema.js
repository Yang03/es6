import Db from './db'
import {user, post} from './data'
import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} from 'graphql'

user.hasMany(post)
post.belongsTo(user)

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
            },
            posts: {
                type: new GraphQLList(Post),
                resolve(user) {
                  return user.getPosts()
                }
            }
        }
    }
})
const Post = new GraphQLObjectType({
    name: 'post',
    fields: () => {
        return {
            id: {
                type: GraphQLInt,
                resolve(user) {
                    return user.id
                }
            },
            title: {
                type: GraphQLString,
                resolve(post) {
                    return post.title
                }
            },
            user: {
              type: User,
              resolve(post) {
                  return post.getUser()
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
           },
           post: {
             type: new GraphQLList(Post),
             args: {
               id: {
                 type: GraphQLInt
               }
             },
             resolve(root, args) {
               return Db.models.post.findAll({where: args})
             }
           }
       }
    }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields(){
    return {
      addUser: {
        type: User,
        args: {
          firstName: {
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve(_, args) {
          return Db.models.user.create({
            firstName: args.firstName
          })
        }

      }
    }
  }
})

const Schema = new GraphQLSchema({
    query: Query,
    mutation:Mutation
})

export default Schema
