import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Contact />
        </>
    );
}