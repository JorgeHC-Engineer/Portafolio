import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_35%)]" />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <Navbar />
        <Hero />
      </section>

      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}