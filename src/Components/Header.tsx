'use client'
import { useState } from 'react'
import Image from 'next/image'
import logo from "../../public/Logo.svg";

const languages = [
    { code: 'tk', label: 'Türkmen', flag: '/tk.png' },
    { code: 'en', label: 'English', flag: '/en.png' },
    { code: 'ru', label: 'Русский', flag: '/ru.png' },
]

const Header = () => {
    const [activeLang, setActiveLang] = useState('tk')

    return (
        <div className="flex max-w-3/2 items-center justify-between green p-6 px-8 container">
            <div>
                <Image src={logo} alt="logo" width={300} height={100} />
            </div>

            <div className="relative flex bg-white rounded-4xl p-2">
                <div className="relative flex space-x-4">
                    {/* Green moving background */}
                    <div
                        className="absolute top-0 left-0 h-full rounded-4xl green z-0"
                        style={{
                            width: `${100 / languages.length}%`, // Вычисляем ширину фона для каждого языка
                            transform: `translateX(${(languages.findIndex(l => l.code === activeLang) * 300) / languages.length}%)`, // Правильный сдвиг для каждого языка
                            transition: 'transform 0.3s ease', // Плавное движение фона
                        }}
                    />
                    {/* Language buttons */}
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => setActiveLang(lang.code)}
                            className={`flex items-center z-10 p-2 rounded-4xl transition-all ${
                                activeLang === lang.code ? 'text-white' : 'text-black'
                            }`}
                        >
                            <Image src={lang.flag} alt={lang.label} width={21} height={21} />
                            <span className="ml-2 text-sm">{lang.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div>
                    <Image src="/Avatar.png" alt="avatar" width={44} height={44} />
                </div>
                <div className="ml-2">
                    <p className="leading-none font-bold">Имя Фамилия</p>
                    <p className="leading-none text-white">Служба перевозки</p>
                </div>
            </div>
        </div>
    )
}

export default Header
