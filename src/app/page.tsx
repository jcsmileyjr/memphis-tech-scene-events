import Image from "next/image";
import Nav from "@/components/nav/page";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-quicksand)]">
      <Nav />
      <main className="flex flex-col gap-8">Hello World</main>
    </div>
  );
}
