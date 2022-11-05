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
    return router.pathname === `/${name.toLowerCase()}`;
  };
  const iconName = () => {
    if (!isActive()) {
      return `icon-${name.toLowerCase()} mobile:text-[20px]`;
    } else {
      return `icon-${name.toLowerCase()}-filled mobile:text-[20px]`;
    }
  };
  return (
    <Link href={`/${name.toLowerCase()}`}>
      <div
        className="cursor-pointer mt-5 flex flex-row items-center mobile:flex-col tablet:flex-col
       mini-laptop:w-full mini-laptop:mt-6 mobile:mt-0 tablet:mt-0 mobile:mx-8 tablet:mx-10"
      >
        <i
          className={classnames(
            iconName(),
            {
              "opacity-70": !isActive(),
            },
            "mr-4 mobile:mr-0 tablet:mr-0 tablet:mt-1 mobile:mt-1"
          )}
        ></i>
        <p
          className={classnames(
            "mini-laptop:hidden text-white mobile:text-[10px] tablet:text-[10px] mobile:font-ProximaRegular tablet:font-ProximaRegular",
            {
              "opacity-70 ": !isActive(),
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
