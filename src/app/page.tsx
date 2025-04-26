'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import logo from "../../public/Logo.svg"

const LottiePlayer = dynamic(
    () => import('@/Components/LottiePlayer'),
    {
        ssr: false,
        loading: () => <div className="size-96 bg-gray-100 rounded-lg animate-pulse" />
    }
);

const Home = () => {
    const router = useRouter();

    const [cardId, setCardId] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/rating`);
    };

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Левая часть - форма входа */}
            <div className="w-full lg:w-1/2 bg-green-600 flex justify-center items-center p-6">
                <div className="max-w-md w-full">
                    <div className="flex justify-center mb-8">
                        <Image src={logo} alt="logo" width={300} height={100} />
                    </div>

                    <h1 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
                        Приложите карту для безопасной авторизации
                    </h1>

                    <p className="text-white text-center mb-8">
                        Если не удалось авторизоваться с помощью карты, войдите с логином и паролем
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="ID карты"
                            className="w-full p-3 input border-0 rounded-full outline-none"
                            value={cardId}
                            onChange={(e) => setCardId(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            className="w-full p-3 input border-0 rounded-full outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-white text-green-600 font-bold py-3 px-4 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            Авторизироваться
                        </button>
                    </form>
                </div>
            </div>

            {/* Правая часть - Lottie анимация */}
            <div className="hidden lg:flex w-full lg:w-1/2 bg-white flex-col justify-center items-center p-8">
                <Suspense fallback={<div className="size-96 bg-gray-100 rounded-lg animate-pulse" />}>
                    <LottiePlayer />
                </Suspense>
                <h2 className="text-2xl font-bold mt-8 text-center">
                    Приложите карту к считывателю
                </h2>
            </div>
        </div>
    );
}

export default Home;