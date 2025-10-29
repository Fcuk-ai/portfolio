"use client";
import { EnvelopeOpen, GithubLogo, LinkedinLogo, MapPin } from "phosphor-react";

const contactDetails = [
  {
    platform: "Email",
    value: "teligjn12@gmail.com",
    icon: "EnvelopeOpen",
  },
  {
    platform: "GitHub",
    value: "AI-Gajendra",
    icon: "GithubLogo",
  },
  {
    platform: "LinkedIn",
    value: "/in/gajendra-teli/",
    icon: "LinkedinLogo",
  },
  {
    platform: "Location",
    value: "Udaipur, India",
    icon: "MapPin",
  },
];

const Icon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "EnvelopeOpen":
      return <EnvelopeOpen size={24} />;
    case "GithubLogo":
      return <GithubLogo size={24} />;
    case "LinkedinLogo":
      return <LinkedinLogo size={24} />;
    case "MapPin":
      return <MapPin size={24} />;
    default:
      return null;
  }
};

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-primary tracking-light text-[28px] font-bold leading-tight text-center pb-3 pt-5">Get in Touch</h2>
        <p className="text-secondary text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
          I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!
        </p>
        <div className="w-full max-w-[512px]">
          {contactDetails.map((detail) => (
            <div key={detail.platform} className="flex items-center gap-4 bg-background px-4 min-h-14 justify-between">
              <div className="flex items-center gap-4">
                <div className="text-primary flex items-center justify-center rounded-lg bg-button-bg shrink-0 size-10">
                  <Icon icon={detail.icon} />
                </div>
                <p className="text-primary text-base font-normal leading-normal flex-1 truncate">{detail.platform}</p>
              </div>
              <div className="shrink-0"><p className="text-primary text-base font-normal leading-normal">{detail.value}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;