import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
export default function SearchBar() {

    return(
        <form className="max-w-md mx-auto">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>
        <input type="search" id="default-search" className="block w-auto p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-secondary-800 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arrticle,Question,..." required />
    </div>
</form>
    )
}