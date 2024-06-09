"use client";

import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function NavBarMain() {
  return (
<div className="  bg-primary-800 dark:bg-secondary-500">
  <div className=" flex justify-between  p-4">
    
    <Link href="/" >
    <div className="w-32 sm:w-36 md:w-40 lg:w-44 mr-5">
      <Image src="/svg/toolstation.svg" alt="Toolstation logo" width={200} height={200}  />
    </div>
    </Link>
   
    <SearchBar />
  
   
    <div className=" flex w-24 sm:w-32 md:w-36 lg:w-40 items-center space-x-1">
      <Link href="/login">
    
        <Image className="rounded-full  w-" src="/images/profile.jpg" alt="user photo" width={40} height={40} />
      
      </Link>
    
      <ThemeSwitcher />
    
    </div>
  </div>
</div>
  
  );
}