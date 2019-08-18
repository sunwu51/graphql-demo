const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')
const ResponseType =  new GraphQLObjectType({
	name:'response',
	fields:{
        status:{type:GraphQLInt},
		msg:{type:GraphQLString}
    }
})


module.exports = ResponseType;