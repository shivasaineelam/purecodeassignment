import React, { useState } from "react";
import { LuAlignJustify, LuSearch } from "react-icons/lu";
import MaximizeScreen from "../MaximizeScreen/MaximizeScreen";
import LanguageDropdown from "./../LanguageDropdown/LanguageDropdown";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import NotificationDropdown from "../NotificationDropdown/NotificationDropdown";
import logoDarkImg from "../../assets/images/navbar/logo-dark.png";
import logoLightImg from "../../assets/images/navbar/logo-light.png";
import notificationsData from "../../mock_data/notificationdata/notificationdata";

const TopbarAdmin = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleLanguageDropdown = () => {
    setLanguageOpen(!languageOpen);
    setNotificationOpen(false); // Close notification dropdown when language dropdown is opened
    setProfileOpen(false); // Close profile dropdown when language dropdown is opened
  };

  const toggleNotificationDropdown = () => {
    setNotificationOpen(!notificationOpen);
    setLanguageOpen(false); // Close language dropdown when notification dropdown is opened
    setProfileOpen(false); // Close profile dropdown when notification dropdown is opened
  };

  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen);
    setLanguageOpen(false); // Close language dropdown when profile dropdown is opened
    setNotificationOpen(false); // Close notification dropdown when profile dropdown is opened
  };

  return (
    <header className="sticky top-0 z-40 flex h-18 w-full border-b border-default-200 bg-white dark:bg-default-50 lg:ps-64 hide-in-print">
      <nav className="flex w-full items-center gap-4 px-6">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-default-500 hover:text-default-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <LuAlignJustify size={24} />
          </button>
        </div>

        <div className="flex lg:hidden">
          <img
            src={logoDarkImg}
            height={40}
            width={130}
            alt="logo"
            className="flex h-10 w-full dark:hidden"
          />
          <img
            src={logoLightImg}
            height={40}
            width={130}
            alt="logo"
            className="hidden h-10 w-full dark:flex"
          />
        </div>

        <div className="hidden lg:flex">
          <div className="relative hidden lg:flex">
            <input
              type="search"
              className="block w-64 rounded-full border-default-200 bg-default-50 py-2.5 pe-4 ps-12 text-sm text-default-600 focus:border-primary focus:ring-primary"
              placeholder="Search for items..."
            />
            <span className="absolute start-4 top-2.5">
              <LuSearch size={20} className="text-default-600" />
            </span>
          </div>
        </div>

        <div className="ms-auto flex items-center gap-10">
          <div className="hidden md:flex">
            <LanguageDropdown
              isOpen={languageOpen}
              toggleDropdown={toggleLanguageDropdown}
            />
          </div>

          <div className="hidden lg:flex">
            <MaximizeScreen />
          </div>

          <div className="hidden md:flex">
            <NotificationDropdown
              notifications={notificationsData}
              isOpen={notificationOpen}
              toggleDropdown={toggleNotificationDropdown}
            />
          </div>

          <div className="flex">
            <ProfileDropdown
              isOpen={profileOpen}
              toggleDropdown={toggleProfileDropdown}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default TopbarAdmin;
