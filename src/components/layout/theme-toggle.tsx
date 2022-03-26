import React, { useEffect, useState } from "react";
import tw from "twin.macro";

const Button = tw.button`
  w-10
  h-10
  rounded-lg
  place-self-center
  bg-gray-100/0
  hover:bg-gray-900/5
  dark:bg-gray-900/0
  dark:hover:bg-gray-100/5
  `;

const Icon = tw.i`
  w-auto
  h-auto
  place-self-center
`;

const ThemeToggle: React.FC = () => {
  const key = "theme";
  const [theme, setTheme] = useState(() => {
    try {
      // https://usehooks.com/useLocalStorage/
      const item = window.localStorage.getItem(key);
      console.log("key is", item);
      if (item === null) {
        if (
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
          window.localStorage.setItem(key, "dark");
          return "dark";
        } else {
          window.localStorage.setItem(key, "light");
          return "light";
        }
      }
      return item ? item : "light";
    } catch (error) {
      console.log(error);
      return "light";
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      window.localStorage.setItem(key, "dark");
      document.documentElement.classList.add("dark");
    } else {
      window.localStorage.setItem(key, "light");
      document.documentElement.classList.remove("dark");
    }
  });

  if (theme === "dark")
    return (
      <Button
        className="bg-slate-200/80"
        onClick={(e) => {
          setTheme("light");
          // error in develop: window.gtag is not a function - because gtag is not available in develop
          if (typeof window.gtag !== "undefined") {
            window.gtag("event", "changeTheme", { theme: "light" });
          }
        }}
      >
        <Icon
          className="fa fa-moon-o fa-2x scale-75 text-neutral-200"
          aria-hidden="true"
        ></Icon>
      </Button>
    );
  else
    return (
      <Button
        onClick={(e) => {
          setTheme("dark");
          if (typeof window.gtag !== "undefined") {
            window.gtag("event", "changeTheme", { theme: "dark" });
          }
        }}
      >
        <Icon
          className="fa fa-sun-o fa-2x scale-75 text-amber-500"
          aria-hidden="true"
        ></Icon>
      </Button>
    );
};

export default ThemeToggle;
