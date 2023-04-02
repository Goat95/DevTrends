import { FastifyPluginAsync } from 'fastify'
import requireAuthPlugin, {
  createAuthorizedRoute,
} from '../../../plugins/requireAuthPlugin'
import ItemService from '../../../services/ItemService'
import {
  GetItemRoute,
  GetItemSchema,
  GetItemsRoute,
  WriteItemRoute,
  WriteItemSchema,
} from './schema'

export const itemsRoute: FastifyPluginAsync = async (fastify) => {
  const itemService = ItemService.getInstance()

  fastify.register(authorizedItemRoute)
  fastify.get<GetItemRoute>(
    '/:id',
    { schema: GetItemSchema },
    async (request) => {
      const { id } = request.params
      const item = await itemService.getItem(id)
      return item
    },
  )
  fastify.get<GetItemsRoute>('/', async (request) => {
    const { cursor } = request.query
    return itemService.getPublicItems({
      mode: 'recent',
      cursor: cursor ? parseInt(cursor, 10) : null,
    })
  })
}

const authorizedItemRoute = createAuthorizedRoute(async (fastify) => {
  const itemService = ItemService.getInstance()
  fastify.post<WriteItemRoute>(
    '/',
    { schema: WriteItemSchema },
    async (request) => {
      const item = await itemService.createItem(request.user!.id, request.body)
      return item
    },
  )
})
