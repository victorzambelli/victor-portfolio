
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/32c4532b5e.js';
        script.crossOrigin = 'anonymous';
        document.body.appendChild(script);

        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const deviconLink = document.createElement('link');
        deviconLink.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
        deviconLink.rel = 'stylesheet';
        document.head.appendChild(deviconLink);

        return () => {
        document.body.removeChild(script);
        document.head.removeChild(link);
        document.head.removeChild(deviconLink);
        };
    }, []);

    return (
        <div className="min-h-screen">
        <Header />
        <main>
            <Hero />
            <About />
            <Projects />
            <Technologies />
        </main>
        <Footer />
        </div>
    );
};

export default Index;
