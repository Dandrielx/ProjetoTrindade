export default async function (fastify, opts) {
    fastify.post('/register', async (request, reply) => {
        const { nome, email, senha } = request.body;

        try {
            const result = await fastify.pg.query(
                'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id',
                [nome, email, senha] // depois você vai trocar isso por senha com hash
            );

            return reply.code(201).send({ message: 'Usuário criado', userId: result.rows[0].id });
        } catch (err) {
            console.error(err);
            return reply.code(500).send({ error: 'Erro ao cadastrar usuário' });
        }
    });
}
  