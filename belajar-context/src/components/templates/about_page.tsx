import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";
import AllPosts from "../organisms/allpost";

export default function AboutPage () {
    return (
        <Section2 isFancy={true}>
            <Heading>Tentang saya nich</Heading>
            <Post 
                title="Hello Traveller!"
                body="Tentang kehidupan saya bisa kalian lihat disini"
            />
                <AllPosts/>  
             </Section2>
    );
}