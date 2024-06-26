export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Visual.Exp",
  description: "Make learning easier with AI Animations",
  navItems: [
    {
      label: "Create",
      href: "/create",
    },
    {
      label: "Your Videos",
      href: "/videos",
    },
    {
      label: "Roadmap",
      href: "/roadmap",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Learner Profile",
      href: "/profile",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    create:"/create",
    github: "https://github.com/NileshArnaiya/Visual.ly",
    twitter: "https://twitter.com/NileshArnaiya",
    linkedin: "https://linkedin.com/in/NileshArnaiya",
    instagram: "https://instagram.com/notsohuman.ai",
    sponsor: "https://buymeacoffee.com/aiforeveryone",
  },
};
