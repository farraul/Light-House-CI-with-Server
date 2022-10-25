const { createServer } = require('@lhci/server');
const shell = require('shelljs')



console.log("Inicio index.js")
//console.log("process", process.env);

createServer({
  //port: process.env.PORT,

  port: 9001,

  storage: {
    storageMethod: 'sql',
    sqlDialect: 'sqlite',
    sqlDatabasePath: './db.sql',
  },
}).then(({port}) => {
  
  console.log("port: ", port)

 //shell.exec(`lhci autorun`)
})


console.log("Final index.js")

