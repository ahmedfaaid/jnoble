import { createClient } from 'urql';

export const client = createClient({
  url: 'http://localhost:4040/graphql'
});
