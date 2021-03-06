const 
connection = require('../database/connection'),
crypto     = require('crypto');

module.exports = {
    async index(req,res) {
        const ongs = await connection('ongs').select('*');

        return res.json(ongs);
    },
    async create(req,res) {
        const 
        { name, email, whatsapp, city, uf } = req.body,
        id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        return res.json({ id });
    },
    async delete(request, response) {
        const ong_id     = request.headers.authorization;
    
        await connection('ongs').where('id', ong_id).delete();
    
        response.status(204).send();
    }
}