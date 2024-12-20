import { JSONFilePreset } from "lowdb/node";

// Read or create db.json
interface Post {
  posts: {
    id: string;
    title: string;
    content: string;
  }[];
}
const defaultData: Post = { posts: [] };

const db = await JSONFilePreset("db.json", defaultData);

// console.log('123214124');

export default db;
