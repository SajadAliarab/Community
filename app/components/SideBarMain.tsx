
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/20/solid"
import { ListBulletIcon } from "@heroicons/react/16/solid"
import { CalendarDaysIcon } from "@heroicons/react/16/solid"
import { MegaphoneIcon } from "@heroicons/react/16/solid"
import { UserGroupIcon } from "@heroicons/react/16/solid"
import { ChatBubbleLeftRightIcon } from "@heroicons/react/16/solid"
import { BeakerIcon } from "@heroicons/react/16/solid"
import { WrenchScrewdriverIcon } from "@heroicons/react/16/solid"
import { ReceiptPercentIcon } from "@heroicons/react/16/solid"
import { RocketLaunchIcon } from "@heroicons/react/16/solid"
export default function SideBarMain() {

    return(
        <aside id="default-sidebar" className="z-40 w-auto h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-primary-900">
           <ul className="space-y-2 font-medium">
              <li>
                 <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <HomeIcon className="size-6" />
                    <span className="ms-3">Home</span>
                 </Link>
              </li>
              <li>
                 <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <ListBulletIcon className="size-6" />
                    <span className="ms-3">Feed</span>
                 </Link>
              </li>
              <li>
               <h3 className="px-2 mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">From Toolstation</h3>
              </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <CalendarDaysIcon className="size-6" />
                     <span className="ms-3">Events</span>
                   </Link>
               </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <MegaphoneIcon className="size-6" />
                     <span className="ms-3">Announcements</span>
                   </Link>
               </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <BeakerIcon className="size-6" />
                     <span className="ms-3">Knowledge Base</span>
                   </Link>
               </li>
               <li>
                  <h3 className="px-2 mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">Community</h3>
               </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <UserGroupIcon className="size-6" />
                     <span className="ms-3">Intro & Networking</span>
                   </Link>
               </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <ChatBubbleLeftRightIcon className="size-6" />
                     <span className="ms-3">Ask the Community</span>
                   </Link>
               </li>
               <li>
                  <h3 className="px-2 mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase dark:text-gray-400">Products</h3>
               </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <WrenchScrewdriverIcon className="size-6" />
                     <span className="ms-3">New Products</span>
                   </Link>
               </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <ReceiptPercentIcon className="size-6" />
                     <span className="ms-3">Special Offers</span>
                   </Link>
               </li>
               <li>
                   <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                     <RocketLaunchIcon className="size-6" />
                     <span className="ms-3">Coming soon Products</span>
                   </Link>
               </li>

               

           </ul>
        </div>
     </aside>
    )
}