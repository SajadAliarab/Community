"use client";

import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function NavBarMain() {
  return (
<div className="bg-primary-800 dark:bg-secondary-500">
  <div className=" flex justify-between  p-4">
    
    <Link href="/" >
      <Image src="/svg/toolstation.svg" alt="Toolstation logo" width={200} height={200} className="logo" />
    </Link>
   
    <SearchBar />
  
    <div className="flex items-center space-x-4">
      <Link href="/login">
        <Image className="rounded-full" src="/images/profile.jpg" alt="user photo" width={40} height={40} />
      </Link>
      <ThemeSwitcher />
    </div>
  </div>
</div>
  
  );
}