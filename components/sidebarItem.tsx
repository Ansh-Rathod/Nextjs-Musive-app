import React from "react";
import classnames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProps {
  name: string;
  label: string;
}

const SidebarItem = ({ name, label }: IProps) => {
  const router = useRouter();

  const isActive = () => {
    if (router.pathname === "/" && name === "home") {
      return true;
    } else {
      return router.pathname === `/${name.toLowerCase()}`;
    }
  };
  const iconName = () => {
    if (!isActive()) {
      return `icon-${name.toLowerCase()}`;
    } else {
      return `icon-${name.toLowerCase()}-filled`;
    }
  };
  return (
    <Link href={name === "home" ? "/" : `/${name.toLowerCase()}`}>
      <div className="cursor-pointer mt-5 flex flex-row items-center">
        <i
          className={classnames(
            iconName(),
            {
              "opacity-70": !isActive(),
            },
            "mr-4"
          )}
        ></i>
        <p
          className={classnames(
            {
              "opacity-70": !isActive(),
            },
            { "font-ProximaBold": isActive() }
          )}
        >
          {label}
        </p>
      </div>
    </Link>
  );
};

export default SidebarItem;
