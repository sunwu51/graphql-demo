var express = require('express')
var expressGraphql = require('express-graphql')
var app = express()
var RootQuery =require( './graphql/query/RootQuery')
var mutation = require( './graphql/mutation/Mutation')

const{GraphQLSchema} = require('graphql')

const schema = new GraphQLSchema({
    query: RootQuery,
	mutation: mutation
})

//******** 暴露出graphql接口
app.use('/person',expressGraphql({
    schema:schema,
    graphiql:true

}))

app.listen(4000)