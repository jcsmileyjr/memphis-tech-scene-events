import Image from "next/image";
import Nav from "@/components/nav/page";
import Teaser from "@/components/teaser/page";

export default function Home() {
  return (
    <div className=" min-h-screen pb-20 gap-16 font-[family-name:var(--font-quicksand)]">
      <Nav />
      <main className="flex flex-col px-4 gap-8">
        <Teaser />
      </main>
    </div>
  );
}
