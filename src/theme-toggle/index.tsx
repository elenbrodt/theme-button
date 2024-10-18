"use client";

import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light"); //here you can use useTheme if next, get from storage or from theme context with react

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null; //this is needed so it loads correctly everytime the page reload
  }
  //probably to use this component you will need to remove the margins, it was added only to work here in sandbox
  return (
    <div className="w-fit flex">
      <Switch
        title={`${theme === "dark" ? "Usar modo claro" : "Usar modo escuro"}`}
        checked={theme === "dark"}
        onChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="group relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-300 transition-colors duration-200
				 ease-in-out focus:outline-none focus:ring-offset-2 data-[checked]:bg-gray-700 "
      >
        <span
          aria-hidden="true"
          className="-ml-5 -mt-2 pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out group-data-[checked]:translate-x-8"
        >
          <div className="w-full h-full flex justify-center items-center text-gray-300">
            {theme === "dark" ? (
              <MoonIcon className=" text-blue-300 " width={20} />
            ) : (
              <SunIcon className="text-orange-300" width={24} />
            )}
          </div>
        </span>
      </Switch>
    </div>
  );
}
