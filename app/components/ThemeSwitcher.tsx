"use client";


import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import {MoonIcon} from "../icons/MoonIcon"
import {SunIcon} from "../icons/SunIcon"
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isSelected, setIsSelected] = useState((theme === "light") ? true : false);

  useEffect(() => {
    setMounted(true)
  }, [])


  if(!mounted) return null

  return (
    <button onClick={() => {
      setTheme((theme === "light") ? "dark" : "light")
      setIsSelected((theme === "light") ? false : true)
    }} className="flex items-center justify-center w-auto  rounded-full bg-gray-200 dark:bg-gray-800">
      {isSelected ? <MoonIcon className=" w-5 h-5 text-gray-800 dark:text-gray-200" /> : <SunIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />}
    </button>
   
  )
};