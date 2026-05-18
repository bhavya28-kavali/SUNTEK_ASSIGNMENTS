1.Generate package.json
    npm init -y
Install express
   npm install express
2.create server.js
### Create Mongodb database

RestAPI  ---->mongodb native driver   ----->MongoDBserver
RestAPI  ---->mongodb ODM tool(mongoose)----->MongoDBserver

a.Install  mongoose and connect to mongodb server
b.Create Schema of Resource
c.Create Model of that Schema
d.Perform Db operations on that model

Error Handling middleware:--
function errorHandler(err,req,res,next{
    res.json({message:"error",reason:err.message})
})
app.use(errorHandler)
Or it can be Written like:
app.use((err,req,res,next)=>{
    res.status(500).json({message:" .... "})
})