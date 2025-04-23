'use client'

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from "next/image";
import {check} from "../../../public/check.png"

// Явно указываем тип для ratingLabels с индексом типа number
const ratingLabels: { [key: number]: string } = {
    1: 'Очень плохо',
    2: 'Плохо',
    3: 'Нормально',
    4: 'Хорошо',
    5: 'Отлично',
};

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState<number | null>(null); // Устанавливаем тип как number или null
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div className="green relative h-screen">
            <div className="rounded-tl-4xl rounded-tr-4xl bg-white h-full">
                <div className="container mx-auto">
                    <div className="pt-44 flex flex-col items-center">
                        <div className="text-center font-bold text-4xl mb-4">
                            Оцените качества обслуживания Авиаагента
                        </div>
                        <div className="text-center max-w-2/3">
                            Help us improve our tool to best suit your needs by rating us here! Help us improve our tool
                            to best suit your needs by rating us here!
                        </div>
                        <div className="flex space-x-1 pt-10">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <div key={star} className="flex flex-col items-center">
                                    <FaStar
                                        size={150}
                                        className={`cursor-pointer transition-colors ${
                                            (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                                        }`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                    <span className="text-lg mt-1 font-bolder">
                                        {ratingLabels[star]}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-10">
                            <button
                                className="green px-10 py-2 rounded-4xl text-white font-bolder text-xl"
                                onClick={() => {
                                    if (rating > 0) setIsSubmitted(true);
                                }}
                            >
                                Оценить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isSubmitted && (
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: "rgba(0,0,0,.4)" }}>
                    <div className="flex flex-col items-center py-10 px-5 bg-white rounded-xl w-75 -mt-60">
                        <Image src={check} alt="check" width={100} height={100} />
                        <div className="text-green text-2xl text-center mt-4">
                            Спасибо, ваша оценка принята!
                        </div>
                        <button
                            className="mt-4 green px-10 py-2 rounded-4xl text-white font-bolder text-sm"
                            onClick={() => setIsSubmitted(false)}
                        >
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Rating;
