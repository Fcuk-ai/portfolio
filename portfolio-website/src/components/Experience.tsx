"use client";
import { Briefcase, GraduationCap } from "phosphor-react";

const experience = [
  {
    role: "Technical Assistant – Innovation Lab (AI & IoT)",
    company: "Geetanjali Institute of Technical Studies, Udaipur",
    date: "Jan 2024 – Present",
    icon: "Briefcase",
  },
  {
    role: "R&D Engineer / ML Intern",
    company: "SG Looming Technologies Pvt. Ltd.",
    date: "Sept 2023 – Dec 2024",
    icon: "Briefcase",
  },
  {
    role: "B.Tech – Computer Science & Engineering",
    company: "Rajasthan Technical University, Kota",
    date: "2020 – 2024",
    icon: "GraduationCap",
  },
];

const Icon = ({ icon }: { icon: string }) => {
  if (icon === "Briefcase") {
    return <Briefcase size={24} />;
  }
  return <GraduationCap size={24} />;
};

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-primary tracking-light text-[32px] font-bold leading-tight">Experience Timeline</p>
          <p className="text-secondary text-sm font-normal leading-normal">Explore my journey through key milestones in data science, MLOps, and AI system development.</p>
        </div>
      </div>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
        {experience.map((item, index) => (
          <>
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="text-primary">
                <Icon icon={item.icon} />
              </div>
              <div className="w-[1.5px] bg-[#324467] h-full grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-primary text-base font-medium leading-normal">{item.role}</p>
              <p className="text-secondary text-base font-normal leading-normal">{item.company}</p>
              <p className="text-secondary text-sm font-normal leading-normal">{item.date}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Experience;