const algorithm =require("./algorithm/sidebar");
const browser =require("./browser/sidebar");
const design=require('./design-model/sidebar')
module.exports=[
    {
        title:'介绍',
        path:'/in-depth-learning/',
        collapsable: true
    },
    ...browser,
    ...algorithm,
    ...design
]