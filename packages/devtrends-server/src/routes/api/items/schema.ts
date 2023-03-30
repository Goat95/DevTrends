import { Static, Type } from '@sinclair/typebox'
import { FastifySchema } from 'fastify'
import { Nullable } from '../../../lib/typebox'

const CreateItemBody = Type.Object({
  title: Type.String(),
  body: Type.String(),
  link: Type.String(),
  tags: Type.Array(Type.String()),
})

export type CreateItemBodyType = Static<typeof CreateItemBody>

const CreateItemResult = Type.Object({
  id: Type.Integer(),
  title: Type.String(),
  body: Type.String(),
  link: Type.String(),
  thumbnail: Nullable(Type.String()),
  createdAt: Type.String(),
  updatedAt: Type.String(),
})

CreateItemResult.example = {
  id: 1,
  title: 'Hello',
  body: 'hohoohoalal',
  link: 'https://velog.io',
  thumbnail: null,
  createdAt: '2023-03-30T14:42:40.827Z',
  updatedAt: '2023-03-30T14:42:40.827Z',
}

export const writeItemSchema: FastifySchema = {
  body: CreateItemBody,
  response: {
    200: CreateItemResult,
  },
  tags: ['item'],
}

export interface WriteItemRoute {
  Body: CreateItemBodyType
}
