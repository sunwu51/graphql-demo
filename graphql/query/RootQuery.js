var personDao = require('../../dao/PersonDao')
var PersonType = require('../type/PersonType')

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')

const RootQuery = new GraphQLObjectType({
    name:'personQuery',
    fields:{
        person:{
            type:PersonType,
            args:{
                id:{type:GraphQLInt},
				name:{type:GraphQLString}
            },
            async resolve(parentValue,args){
				return await personDao.getById(args.id);
            }
        }
    }
})
module.exports=RootQuery