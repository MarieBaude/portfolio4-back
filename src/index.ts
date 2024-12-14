import fastify from 'fastify'

const server = fastify()

server.get('/', async (request, reply) => {
  return { hello: 'world' }
})

const start = async () => {
  try {
    await server.listen({ port: 8080 })
    console.log(`Server listening on http://localhost:8080`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
