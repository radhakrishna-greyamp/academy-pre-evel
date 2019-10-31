// Problem statement
//Given problem 5, in the mongodb coding problems, 
//write an hapijs (or express) REST API to return the response. 
//The count and limit for the query must be taken from the query parameters

const Hapi = require('hapi');
const Boom = require('boom');

const launchServer = async function() {
    
    const dbOpts = {
        url: , //FIXME. Your implementation goes here
        settings: {
            poolSize: 10
        },
        decorate: true
    };
    
    const server = Hapi.server();
    
    await server.register({
        plugin: require('hapi-mongodb'),
        options: dbOpts
    });

   server.route( {
        method: 'GET',
        path: '', //FIXME . Your implementation goes here
        async handler(request) {

            const db = //FIXME
            const ObjectID = request.mongo.ObjectID;

            try {
                const result = //FIXME. Your implementation goes here
                return result;
            }
            catch (err) {
                throw Boom.internal('Internal MongoDB error', err);
            }
        }
    });

    await server.start();
    console.log(`Server started at ${server.info.uri}`);
};

launchServer().catch((err) => {
    console.error(err);
    process.exit(1);
});

