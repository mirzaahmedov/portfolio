"use client";

import { Fragment } from "react";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import useSectionNavigation from "@/hooks/use-section-navigation";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  const { ref: containerRef } = useSectionNavigation({
    id: "experience",
    threshold: 0.4,
  });
  const { ref: timelineRef, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My experience</SectionHeading>
      <div ref={timelineRef}>
        <VerticalTimeline lineColor="">
          {experiencesData.map((experience, index) => (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
                icon={experience.icon}
                date={experience.date}
              >
                <h3 className="font-semibold capitalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.location}</p>
                <p className="font-normal !mt-0 text-gray-700">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
