import UploadPage from "@/Components/UploadPage";
import { db } from "@/utils/dbConnection";

export default function Content() {
    async function postContent(formData) {
        "use server";

        const title = formData.get("title");
        const description = formData.get("description");
        const url = formData.get("url");
        const category = formData.get("category");

        await db.query(
            `INSERT INTO content(title, description, url, category)
             VALUES($1, $2, $3, $4)`,
            [title, description, url, category]
        );

        console.log("Content saved:", title);
    }

    return <UploadPage action={postContent} />;
}
