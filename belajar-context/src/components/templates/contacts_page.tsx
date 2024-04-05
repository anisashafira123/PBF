import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function ContactsPage () {
    return (
        <Section2 isFancy={true}>
            <Heading>Kontak Saya</Heading>
            <Post 
                title="Hello Traveller!"
                body="Ini adalah kontak saya"
            />
                <AllPosts/>  
             </Section2>
    );
}