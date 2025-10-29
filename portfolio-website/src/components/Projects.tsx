const projects = [
  {
    title: "Gemini-Powered Hospital Robot (26 languages)",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBONsH_sYz-ZCeI49uP4wgiYicaZr1gWQXYYEDx9UkXowCQX8h6NUlDRFKx5KcpQU9CM5sA_kCS4Lu3bVGlfV3VsAmCCJEIfPSybVmJNDHzUxvrEhkD3VV2OKmZtdS_hus-XVsigJJrI9D_SoN_j5WwIGN8Rk14i04EUjzkySi2EG0iG3LdhjjXnTRO7fEjt_nyEVlEycu9C1t9KHrdDghsyyUIjQFr6KTE2FSD42I5MS27PbNDCUbdzz3yK3lWt3c7i6RTlXNSSIH6",
  },
  {
    title: "Reinforcement Learning Loan Approval System",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9ncLkn7s2ElEWpUx6AtAMux8a2xP9ospwz0EG-MNE-ZjN12DajEms3sHWZ17qZGa7mtLrRoDhOrglznwAWFOYVVmnIV19cdSAXWvWahhM_eDPqxIswpErpKAH6_2TmFNmNB6t7nJwBrlebIh6LDuYAQ2d49BqBQht9lMqEz5_tAkEpd7i6gFZbuKlmO8_sMelHNjfXqinzX5SjeIFlyPrBtthq7EpvKUr6k5Bi4v888YzIc-SYX_Kh7d-v128qI5Dpz7My0T7DhXe",
  },
  {
    title: "Offline Animal Intrusion Detector",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrIQ01FdnA9pvou0Gjr-kH3EEqyNLWfAd4v6k_SdaSk-qkkA6eZuFwQoL4t-fbC1FMnj2dsw37BvQuoQgJt4TV8kv95ePDdKlGMDwQrWojukAhk8tZHMBbJha3a7msDJCeJ0BPv-GdEYnfyDwm85tXETqIJgtyMVehQT-e8L1cDJRMspLgiyucEhywjnn9XQl1pjwV2xUETl-5e0m7aLydyMZsMwl1-IsRNwC0_BN9QWB2ffuL_66ml01FFwnj2TlwwxjBo9kcQme1",
  },
  {
    title: "Automated Sales Bot (LLM + Workflow Automation)",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0MVJH8tI120UKOG-1lh0zrrVx6HdT9W6Rw2IiQX0uEXr1CijicT3NKEaFZ2VxOEK8aBWQNbw5S-AM7o6jn4aTd1ajqLY3F_7ISxEGBk7OkypYb3pCGStpvVwcU_EwUid_gsS-Cl1BKgKLzDDsH7y019rimHXMjUGmJB323aGGN9nqwF1C-BCNtEUIdrf3-entlHNpxj0U8OnRtTObn5GrIHrhETlUBsoQf3E99wGSMhn5nPd44K9TeNPAD4vrrk9ZRK7-_2-fRlVd",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-primary tracking-light text-[32px] font-bold leading-tight">Projects</p>
          <p className="text-secondary text-sm font-normal leading-normal">
            Explore a selection of my key projects, showcasing my expertise in Data Science, MLOps, and AI System Development.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-video"
            style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%, rgba(0, 0, 0, 0.1) 100%, rgba(0, 0, 0, 0) 100%), url("${project.imageUrl}")` }}
          >
            <p className="text-primary text-base font-bold leading-tight w-4/5 line-clamp-2">{project.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;