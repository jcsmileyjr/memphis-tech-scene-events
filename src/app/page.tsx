import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <nav className="flex flex-row justify-between">
        <ul className="flex flex-row gap-4">
          <li>Home</li>
          <li>Events</li>
          <li>About</li>
          <li>Sponsors</li>
          <li>Community Partners</li>
          <li>Testimonials</li>
        </ul>
        <h1>Memphis Tech Scene</h1>
      </nav>
      <main className="flex flex-col gap-8">Hello World</main>
    </div>
  );
}
