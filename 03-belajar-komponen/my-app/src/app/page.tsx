import Image from "next/image";
import Profile from "../components/profile";
import { Gallery } from "@/components/gallery";
import TodoList from "@/components/todolist";

export default function Home() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
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
