import { db } from "./server.js";

// insert the values into the users table
// await db.query(
// `INSERT INTO users(id, name, email, password)
// VALUES (1, 'Alice', 'alice@example.com', 'password123');`);


await db.query(
    `INSERT INTO content(user_id, title, description, url, category, upload_date), VALUES(1, 'ઘર બેઠા શીખો સાદો રાસ #Online Garba Ashvin makvana #surat #gujarat', '', 'https://www.youtube.com/watch?v=hVJGXrRs2y8', 'Dance', '2025-11-15'),

    (1, 'Garba Steps For Beginners | Navaratri Garba Dance Songs | Garba Dance Steps Video', 'Dance - Saili & Pooja. Concept, Production & Post Production by: Milind Patwardhan. Visit Pebbles Official Website - http://www.pebbles.in', 'https://www.youtube.com/watch?v=pbdv917Enns&list=PLdGtIFisBHafXGCQIesY-l4AgxAaEQIF1', 'Dance', '2025-11-15'),

    (1, 'Unknown Title', '', 'https://www.youtube.com/watch?v=NJWvOmWRnCo', 'Dance', '2025-11-15'),

    (1, 'Unknown Title', '', 'https://www.youtube.com/watch?v=M2GO52YmBek', 'Dance', '2025-11-15'),

    (1, 'Unknown Title', '', 'https://www.youtube.com/watch?v=U9bkmy-rows', 'Dance', '2025-11-15'),

    (1, 'Unknown Title', '', 'https://www.youtube.com/watch?v=YVofEY13B6M', 'Dance', '2025-11-15')`
);




// `INSERT INTO content (user_id, title, description, url, category, upload_date)
// VALUES (1, 'Basic Garba Dance Steps | Beginners Tutorial | by Girish Prajapati',
// 'This video is for Beginners. Who wants to learn Garba .. with Vakratunda Studio...',
// 'https://www.youtube.com/watch?v=iSzuReTBHjI&list=PLoqEKUQ24Wbaq78p65jS_kKFfeEquaE3a',
// 'Dance', NOW());
// `)