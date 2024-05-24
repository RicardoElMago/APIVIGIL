const Cliente = require('../models/cliente');

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener clientes' });
    }
};

// Obtener un cliente por su ID
exports.getClienteById = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const cliente = await Cliente.findByPk(clienteId);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener cliente' });
    }
};

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
    try {
        const { dni, nombre, apellidos, direccion, edad } = req.body;
        const newCliente = await Cliente.create({ dni, nombre, apellidos, direccion, edad });
        res.status(201).json(newCliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear cliente' });
    }
};

// Actualizar un cliente existente
exports.updateCliente = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const { dni, nombre, apellidos, direccion, edad } = req.body;
        const cliente = await Cliente.findByPk(clienteId);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        cliente.dni = dni;
        cliente.nombre = nombre;
        cliente.apellidos = apellidos;
        cliente.direccion = direccion;
        cliente.edad = edad;
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar cliente' });
    }
};

// Eliminar un cliente
exports.deleteCliente = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const cliente = await Cliente.findByPk(clienteId);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        await cliente.destroy();
        res.json({ message: 'Cliente eliminado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar cliente' });
    }
};

// Obtener fecha de nacimiento de un cliente
exports.getClienteNacimiento = async (req, res) => {
    try {
        const clienteId = req.params.id;
        const cliente = await Cliente.findByPk(clienteId);

        if (!cliente) {
            return res.status(404).json({ message: 'Cliente no encontrado' });
        }
        
        const currentYear = new Date().getFullYear();
        const birthYear = currentYear - cliente.edad;
        

        res.json({
            'el cliente con dni' : cliente.dni , ' nacio en el año ':  birthYear
            
        });
    } catch (error) {
        res.status(500).json({ message: 'Error del servidor', error });
    }
};
