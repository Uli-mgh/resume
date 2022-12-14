import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const project = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0F1645]/80">
        {/* Project */}
        {projects?.map((p, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={p._id}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(p.image).url()}
              alt=""
              className="rounded-xl border border-gray-500 lg:w-2/4 lg:h-4/5 md:w-auto md:h-auto cursor-pointer"
            />
            <div className="flex items-center space-x-2 justify-center">
              {p?.technologies.map((tec) => (
                // eslint-disable-next-line @next/next/no-img-element

                <img
                  key={tec._id}
                  src={urlFor(tec.image).url()}
                  alt=""
                  className="h-10 w-10 rounded-full "
                />
              ))}
            </div>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <Link
                  href={p?.linkToBuild}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="underline decoration-[#0F1630]/50 cursor-pointer">
                    {p.title}
                  </span>
                </Link>
              </h4>

              <p className="text-lg text-center md:text-left">{p.summary}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-gray-600 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
