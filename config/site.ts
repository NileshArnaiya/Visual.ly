export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Visual.Exp",
  description: "Make learning easier with AI Animations",
  navItems: [
    {
      label: "Learn",
      href: "/create",
    },
    {
      label: "Your Videos",
      href: "/videos",
    },
    {
      label: "Pricing",
      href: "/pricing",
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
    github: "https://github.com/NileshArnaiya",
    twitter: "https://twitter.com/NileshArnaiya",
    discord: "https://discord.gg/invite",
    sponsor: "https://patreon.com/nilesharnaiya",
  },
};
