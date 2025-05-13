/**
 * 主题切换组件
 * 提供明暗主题模式的切换功能，保存用户主题偏好
 */
import React, { useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ThemeSwitch = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  React.useEffect(() => {
    const isDarkMode = isDark;
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("vitepress-theme", isDarkMode ? "dark" : "light");
  }, [isDark]);

  React.useEffect(() => {
    const handleThemeChange = () => {
      const storedTheme = localStorage.getItem("vitepress-theme");
      if (storedTheme === "dark") {
        setIsDark(true);
        document.documentElement.classList.add("dark");
      } else if (storedTheme === "light") {
        setIsDark(false);
        document.documentElement.classList.remove("dark");
      } else {
        // Check system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDark(prefersDark);
        document.documentElement.classList.toggle("dark", prefersDark);
      }
    };

    handleThemeChange();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!localStorage.getItem("vitepress-theme")) {
        setIsDark(mediaQuery.matches);
        document.documentElement.classList.toggle("dark", mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="text-default-700 dark:text-default-400"
    >
      {isDark ? (
        <Icon icon="lucide:sun" width={20} height={20} />
      ) : (
        <Icon icon="lucide:moon" width={20} height={20} />
      )}
    </Button>
  );
};