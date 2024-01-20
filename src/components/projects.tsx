"use client";

import { Fragment } from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import useSectionNavigation from "@/hooks/use-section-navigation";
import { projectsData } from "@/lib/data";

function Projects() {
  const { ref: containerRef } = useSectionNavigation({
    id: "projects",
    threshold: 0.5,
  });

  return (
    <section ref={containerRef} id="projects" className="mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project project={project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
