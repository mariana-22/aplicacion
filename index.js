const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).json({
        estado: "Operativo",
        mensaje: "Api Node.js ejecutando en producción"
    });
});

app.get('/datos', (req, res) => {
    res.status(200).json({ data: ["ADSO", "DevOps", "Seguridad"] });
});

app.get('/api/crash', (req, res) => {
    console.error("[FATAL ERROR] fallo de segmento. El sistema se ha quedado sin memoria");
    // Si quieres forzar que la app se detenga en este endpoint, puedes agregar:
    // process.exit(1);
});

// ¡Importante! Faltaba iniciar el servidor para que escuche peticiones
app.listen(PORT, () => {
    console.log(`[SERVER] API escuchando en el puerto ${PORT}`);
});