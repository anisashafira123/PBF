import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function RecentPosts() {
    return (
        <Section2 isFancy = {true}>
            <Heading>Posting Terbaru</Heading>
            <Post
                title="Nama"
                body="Anisa Shafira"
            />
            <Post
                title="NIM"
                body="2341727005"
            />
        </Section2>
    );
}