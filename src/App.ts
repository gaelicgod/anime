import * as express from "express"

class App {
    public express

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoute():void {
        const router = express.Router()
        router.get('/', (req, res) => {
            res.json({
                message: "Anime Search!"
            })
        })
        this.express.use('/', router)
    }
}

export default new App().express