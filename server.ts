import DatabaseConfig from './src/config/db';
import app from './app'
import { config } from './src/config/index'

const startServer = async () => {
    try {
        DatabaseConfig.connectDB()

        app.listen(config.port, () => {
            console.log('Server running on port:', config.port)
        })
    } catch (err) {
        console.log('Failed to start server!', err)
    }
}

startServer()
