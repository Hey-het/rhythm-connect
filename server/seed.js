import { db } from "./server.js";

// insert the values into the users table
// await db.query(
// `INSERT INTO users(id, name, email, password)
// VALUES (1, 'Alice', 'alice@example.com', 'password123');`);


await db.query(
`INSERT INTO content (user_id, title, description, url, category, upload_date)
VALUES (1, 'Basic Garba Dance Steps | Beginners Tutorial | by Girish Prajapati',
'This video is for Beginners. Who wants to learn Garba .. with Vakratunda Studio...',
'https://www.youtube.com/watch?v=iSzuReTBHjI&list=PLoqEKUQ24Wbaq78p65jS_kKFfeEquaE3a',
'Dance', NOW());
`)