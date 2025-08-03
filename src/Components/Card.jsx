import { StarIcon } from "@heroicons/react/24/solid"

const Card = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 outline-2 outline-gray-200 dark:outline-none w-full">
      <img className="p-3 w-full h-45 object-cover object-top" src="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <h1 className="text-gray-800 dark:text-white text-md sm:text-xl font-bold mt-1">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h1>
      <div className="flex gap-3 w-full my-4">
        <div className="flex items-center gap-1"><StarIcon className="size-5 text-yellow-300"/><StarIcon className="size-5 text-yellow-300"/><StarIcon className="size-5 text-yellow-300"/><StarIcon className="size-5 text-yellow-300"/><StarIcon className="size-5 text-gray-200 dark:text-gray-600" /></div>
        <button className="bg-blue-200 text-blue-800 font-bold text-sm px-3 py-0.25 rounded">4.0</button>
      </div>
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">$599</h1>
        <button className="cursor-pointer hover:bg-blue-700 transition ease-in-out duration-200 font-bold bg-blue-600 text-white text-sm py-2 px-3 rounded-md">Add to cart</button>
      </div>
    </div>
  )
}

export default Card
