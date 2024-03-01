import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery"
import MyProfile from "@/components/myprofile";
import MyProfileV2 from "@/components/myprofilev2";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
      <MyGallery/>
      <MyProfile/>
      <MyProfileV2/>
    </section>
  );
}
// export default function Home() {
//   return (
//     <div>
//     <h1 className="text-center font-bold">Ilmuwan yang luar biasa</h1>
//     <div className="grid grid-cols-3 gap-8 justify-center">
//       <Profile></Profile>
//       <Profile></Profile>
//       <Profile></Profile>
//     </div>
//     </div>
//   );
// }


// import Bio from "@/components/bio";

// export default function Home() {
//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-8 justify-center">
//         <Bio />
//       </div>
//     </div>
//   )
// }
