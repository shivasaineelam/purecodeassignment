import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { LuHome, LuLogOut, LuNewspaper, LuUser } from "react-icons/lu";
import cn from "../../helper/verticalmenuhelper/cn";
import avatar1Img from "../../assets/images/avatars/avatar1.png";

const profileDropdownItems = [
  {
    icon: LuUser,
    name: "My Profile",
    link: "/admin/profile",
  },
  {
    icon: LuNewspaper,
    name: "Landing",
    link: "/",
  },
  {
    icon: LuHome,
    name: "Home",
    link: "/home",
  },
  {
    icon: LuLogOut,
    name: "Log Out",
    link: "/auth/logout",
  },
];

const ProfileDropdown = ({ isOpen, toggleDropdown }) => {
  return (
    <div className="relative inline-block ">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center h-10 w- bg-default-100 rounded-full text-default-700 hover:text-primary focus:outline-none"
      >
        <img
          className="inline-block h-8 w-8 rounded-full"
          alt="avatar"
          src={avatar1Img}
        />
        <div className="hidden text-start lg:block ml-2">
          <p className="text-sm font-medium text-default-700">Kaiya Botosh</p>
          <p className="mt-1 text-xs text-default-500">Admin</p>
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-48 bg-white border border-default-200 rounded-md shadow-lg right-8">
          {profileDropdownItems.map((item, idx) => {
            const Icon = item.icon;
            const lastItem = profileDropdownItems.length - 1 === idx;
            return (
              <Fragment key={item.link + item.name}>
                {lastItem && <hr className="my-1 border-default-200" />}
                <Link
                  to={item.link}
                  className={cn(
                    "block px-4 py-2 text-sm text-default-800 hover:bg-default-100",
                    lastItem && "text-red-500 hover:bg-red-400/10"
                  )}
                >
                  <Icon size={16} className="inline-block mr-2" />
                  {item.name}
                </Link>
              </Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
