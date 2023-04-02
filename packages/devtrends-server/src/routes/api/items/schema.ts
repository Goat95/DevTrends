import { Static, Type } from '@sinclair/typebox'
import { FastifySchema } from 'fastify'
import { Nullable } from '../../../lib/typebox'
import { UserSchema } from '../../../schema/UserSchema'
import { PaginationSchema } from '../../../lib/pagination'

const CreateItemSchema = Type.Object({
  title: Type.String(),
  body: Type.String(),
  link: Type.String(),
  tags: Type.Array(Type.String()),
})

export type CreateItemBodyType = Static<typeof CreateItemSchema>

const ItemSchema = Type.Object({
  id: Type.Integer(),
  title: Type.String(),
  body: Type.String(),
  link: Type.String(),
  thumbnail: Nullable(Type.String()),
  createdAt: Type.String(),
  updatedAt: Type.String(),
  user: UserSchema,
})

ItemSchema.example = {
  id: 1,
  title: 'Hello',
  body: 'hohoohoalal',
  link: 'https://velog.io',
  thumbnail: null,
  createdAt: '2023-03-30T14:42:40.827Z',
  updatedAt: '2023-03-30T14:42:40.827Z',
  user: {
    id: 1,
    username: 'velooo',
  },
}

export const WriteItemSchema: FastifySchema = {
  body: CreateItemSchema,
  response: {
    200: ItemSchema,
  },
  tags: ['item'],
}

export interface WriteItemRoute {
  Body: CreateItemBodyType
}

const ItemParamsSchema = Type.Object({
  id: Type.Integer(),
})

type ItemParamsType = Static<typeof ItemParamsSchema>

const UpdateItemBodySchema = Type.Object({
  title: Type.String(),
  body: Type.String(),
  tags: Type.Array(Type.String()),
})

type UpdateItemBodyType = Static<typeof UpdateItemBodySchema>

export const GetItemSchema: FastifySchema = {
  params: ItemParamsSchema,
  response: {
    200: ItemSchema,
  },
  tags: ['item'],
}

export const GetItemsSchema: FastifySchema = {
  response: {
    200: PaginationSchema(ItemSchema),
  },
}

export const UpdateItemSchema: FastifySchema = {
  params: ItemParamsSchema,
  body: UpdateItemBodySchema,
  response: {
    200: ItemSchema,
  },
}

export const DeleteItemSchema: FastifySchema = {
  params: ItemParamsSchema,
  response: {
    204: Type.Null(),
  },
}

export interface GetItemRoute {
  Params: ItemParamsType
}

export interface GetItemsRoute {
  Querystring: {
    cursor?: string
  }
}

export interface UpdateItemRoute {
  Params: ItemParamsType
  Body: UpdateItemBodyType
}

export interface DeleteItemRoute {
  Params: ItemParamsType
}
