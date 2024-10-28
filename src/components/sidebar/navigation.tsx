import { SettingsIcon, UsersIcon } from "lucide-react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    active: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    active: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    active: UsersIcon,
  },
];

export const Navigation = () => {
  return (
    <div>
      {routes.map((route) => (
        <div key={route.label}>{route.label}</div>
      ))}
    </div>
  );
};
