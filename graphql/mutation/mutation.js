var personDao = require('../../dao/PersonDao')
var ResponseType= require('../type/ResponseType')

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')


const mutation  = new GraphQLObjectType({
	name:"Mutation",
	fields:{
		addPerson:{
			type:ResponseType,
			args:{
				name:{type:GraphQLString}
			},
			async resolve(parenValue,args){
                await personDao.insert(args.name)
				return {status:0,msg:"ok"}
			}
		}
	}
	
})
module.exports=mutation