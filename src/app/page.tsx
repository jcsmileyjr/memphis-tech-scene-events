import Image from "next/image";
import Nav from "@/components/nav/page";

export default function Home() {
  return (
    <div className=" min-h-screen pb-20 gap-16 font-[family-name:var(--font-quicksand)]">
      <Nav />
      <main className="flex flex-col px-8 gap-8">Hello World: Testing, the world is full of hope and passion.</main>
    </div>
  );
}
