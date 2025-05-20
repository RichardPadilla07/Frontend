// Requerir los módulos
import express from 'express' // Para crear el servidor
import dotenv from 'dotenv' // Para manejar variables de entorno
import cors from 'cors'; // Para permitir el acceso a la API desde el frontend

// Inicializaciones
const app = express()
dotenv.config()

// Configuraciones 
app.set('port',process.env.PORT || 3000)
app.use(cors())


// Middlewares 
app.use(express.json())


// Rutas 
app.get('/',(req,res)=>{
    res.send("Server on")
})

// Exportar la instancia de express por medio de app
export default  app