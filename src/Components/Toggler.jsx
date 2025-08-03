import { useContext, useEffect, useState } from 'react'
import ThemeContext from '../Context/ThemeContext'

const Toggler = () => {
    const { theme,setTheme } = useContext(ThemeContext)
    const [isChecked, setIsChecked] = useState(theme === 'black')

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked
        setIsChecked(checked)
        setTheme(checked ? 'dark' : 'light')
    }

    useEffect(()=>{
        document.querySelector('html').classList.remove('dark','light')
        document.querySelector('html').classList.add(theme)
    },[theme])

    return (
        <label className='flex cursor-pointer select-none items-center gap-2'>
            <div className='relative'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className='sr-only'
                />
                <div
                    className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                ></div>
                <div
                    className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''
                        }`}
                ></div>
            </div>
            <h1 className='font-semibold text-lg text-gray-900'>Toggle Theme</h1>
        </label>
    )
}

export default Toggler