import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '177547ee6ba0f369c2a186d31e5443ed028f7e01', queries,  });
export default client;
  