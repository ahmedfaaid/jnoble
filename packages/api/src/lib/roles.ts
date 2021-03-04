import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  ADMIN = 'Admin',
  MAN = 'Man',
  CANDIDATE = 'Candidate',
}

registerEnumType(Role, {
  name: 'Role',
});
