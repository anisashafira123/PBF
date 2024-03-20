// import About from "./about/page"
// import Profile from "./about/profile"
// import ProductList from "./products/page"
import Link from "next/link";

export default function Home() {
    return (
    <div>
        <h1>Welcome to Home</h1>
        <Link href='/profile'><h2>Profile</h2></Link>
        <Link href='/about'><h2>About</h2></Link>
        <Link href='/blogs'><h2>Blogs</h2></Link>
        <Link href='/products'><h2>Products</h2></Link>
    </div>
    
    )
}