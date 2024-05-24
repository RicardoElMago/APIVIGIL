// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const productosRoutes = require('./routes/productosRoutes');
const clienteRoutes = require('./routes/clienteRoutes');
app.use(express.json());
// Agregar las rutas de usuarios al middleware de la aplicación
app.use('/api', userRoutes,productosRoutes,clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
process.env.NODE_ENV = 'development';