//Always take the last commit of the .git, if we don`t have a new commit the procces fail
//Puede ignorar el mensaje GitHub token not set en el resultado de la consola. Un token de GitHub solo es necesario si desea utilizar Lighthouse CI con una GitHub Action. Más adelante en este artículo se explica cómo configurar una GitHub Action.

module.exports = {

    ci: {
        collect: {
            url: ['https://www.relevo.com/'],
            numberOfRuns: 1,
            settings: {
                onlyCategories: ['performance']
             }
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: `http://localhost:9001`,
            token: 'b9b4bef3-5bac-4ff0-938a-0938f45ad421',
        },
        server: {
            storage: {
                storageMethod: 'sql',
                sqlDialect: 'sqlite',
                sqlDatabasePath: '/path/to/db.sql',
            },
        },
    },

}