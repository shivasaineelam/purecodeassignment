import React from "react";
import { LuBell } from "react-icons/lu";
import SimplebarReactClient from "../SimplebarReactClient/SimplebarReactClient";

const NotificationDropdown = ({ notifications, isOpen, toggleDropdown }) => {
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center h-10 w-10 bg-default-100 rounded-full text-default-700 hover:text-primary focus:outline-none"
      >
        <LuBell size={24} />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 py-2 w-80 bg-white border border-default-200 rounded-md shadow-lg right-7 ">
          <div className="px-4 py-2 border-b border-default-200 flex justify-between items-center">
            <h6 className="text-sm font-medium">Notifications</h6>
            <a href="/" className="text-default-500">
              <small>Clear All</small>
            </a>
          </div>
          <SimplebarReactClient className="h-60 px-2 overflow-y-auto example">
            {notifications.map((notification, idx) => (
              <a
                key={idx}
                href="/"
                className="block px-4 py-3 border-b border-default-200 hover:bg-default-100"
              >
                <div className="flex items-start">
                  <img
                    src={notification.avatar}
                    alt="avatar"
                    className="h-10 w-10 rounded-full mr-3"
                  />
                  <div className="flex-grow">
                    <h5 className="text-sm font-medium text-default-800">
                      {notification.name}
                    </h5>
                    <p className="text-sm text-default-400">
                      {notification.subText}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </SimplebarReactClient>
          <a
            href="/"
            className="block px-4 py-2 text-center text-sm font-medium text-primary"
          >
            View All
          </a>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
