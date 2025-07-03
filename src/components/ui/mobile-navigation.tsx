import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconHome,
  IconUsers,
  IconBriefcase,
  IconBuilding,
  IconPhone,
  IconInfoCircle,
} from "@tabler/icons-react";

export const MobileNavigation = (): JSX.Element => {
  const navigationItems = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    {
      title: "About",
      icon: (
        <IconInfoCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Services",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Partners",
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#partners",
    },
    {
      title: "Company",
      icon: (
        <IconBuilding className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#company",
    },
    {
      title: "Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];

  return (
    <FloatingDock
      items={navigationItems}
      mobileClassName=""
    />
  );
}; 