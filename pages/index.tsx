import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

// Components
import About from "../components/About";
import Contact from "../components/Contact";
import ExperienceSection from "../components/ExperienceSection";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

// ICONS
import { CodeBracketIcon } from "@heroicons/react/24/solid";

// Utility functions
import { getPageInfo } from "../utils/getPageInfo";
import { getExperiences } from "../utils/getExperiences";
import { getSkills } from "../utils/getSkills";
import { getProjects } from "../utils/getProjects";
import { getSocials } from "../utils/getSocials";

// TYPES
import { Experience, PageInfo, Project, Skill, Social } from "../typings";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[#0F1624] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0F1645]/80">
      <Head>
        <title>{pageInfo?.name}</title>
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <ExperienceSection experiences={experiences} />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        {/* Projects */}
        <Projects projects={projects} />
      </section>

      {/* Contact */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="h-10 w-10 sticky bottom-5  cursor-pointer">
          <div className="flex items-left ">
            <CodeBracketIcon className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer bg-slate-900" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await getPageInfo();
  const experiences: Experience[] = await getExperiences();
  const skills: Skill[] = await getSkills();
  const projects: Project[] = await getProjects();
  const socials: Social[] = await getSocials();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    // Next.js will attemp to regenerate the page:
    // When a request is made
    // every 1 hours
    revalidate: 20,
  };
};
