import { Type } from '@sinclair/typebox'
import { ItemParamsSchema } from '../schema'
import { RoutesType, createRouteSchema } from '../../../../lib/routeSchema'
import { Nullable } from '../../../../lib/typebox'

const CreateCommentBodySchema = Type.Object({
  text: Type.String(),
  parentCommentId: Nullable(Type.Integer()),
})

const CommentParamsSchema = Type.Object({
  id: Type.Integer(),
  commentId: Type.Integer(),
})

const UpdateCommentBodySchema = Type.Object({
  text: Type.String(),
})

export const CommentsRouteSchema = createRouteSchema({
  GetComments: {
    params: ItemParamsSchema,
  },
  GetSubcomments: {
    params: CommentParamsSchema,
  },
  CreateComment: {
    params: ItemParamsSchema,
    body: CreateCommentBodySchema,
  },
  LikeComment: {
    params: CommentParamsSchema,
  },
  UnlikeComment: {
    params: CommentParamsSchema,
  },
  DeleteComment: {
    params: CommentParamsSchema,
  },
  UpdateComment: {
    params: CommentParamsSchema,
    body: UpdateCommentBodySchema,
  },
})

export type CommentsRoute = RoutesType<typeof CommentsRouteSchema>
