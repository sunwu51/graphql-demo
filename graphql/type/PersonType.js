const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql')
const PersonType = new GraphQLObjectType({
	name:'person',
	fields:{
        id:{type:GraphQLInt},
        name:{type:GraphQLString}
    }
})

module.exports = PersonType;