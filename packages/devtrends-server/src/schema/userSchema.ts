import { Type } from '@sinclair/typebox'

export const UserSchema = Type.Object({
  id: Type.String(),
  username: Type.String(),
}).examples([
  {
    id: 1,
    username: 'velopert',
  },
])