import Nav from "@/components/nav/page";
import Teaser from "@/components/teaser/page";
import Testimonials from "@/components/testimonials/page";

export default function Home() {
  return (
    <div className=" min-h-screen pb-20 gap-16 font-[family-name:var(--font-quicksand)]">
      <Nav />
      <main className="flex flex-col px-4 gap-4">
        <Teaser />
        <Testimonials />
      </main>
    </div>
  );
}
