'use client'

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Image from "next/image";
import check  from "../../../public/check.png";

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
    const [showModal, setShowModal] = useState(false);
    const [additionalRating, setAdditionalRating] = useState<string | null>(null); // Стейт для дополнительного выбора

    // Логика для отображения активного класса
    const handleAdditionalRatingClick = (rating: string) => {
        setAdditionalRating(rating);
    };

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

                        {/* Кнопка "Оценить", которая появляется после выбора рейтинга */}
                        {rating > 0 && (
                            <div className="pt-10">
                                <button
                                    className="green px-10 py-2 rounded-4xl text-white font-bolder text-xl"
                                    onClick={() => setShowModal(true)} // Открытие модалки
                                >
                                    Оценить
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Модальное окно для выбора дополнительной оценки */}
            {showModal && (
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: "rgba(0,0,0,.4)" }}>
                    <div className="flex flex-col items-center py-10 px-5 bg-white rounded-xl -mt-60">
                        <div className="text-xl font-bold mb-4">Дополнительная оценка</div>

                        {/* Вертикальный список вариантов дополнительной оценки */}
                        <div className="flex flex-col space-y-4 mb-4">
                            {['Очень довольны, со мной хорошо общались и обслужили', 'Довольны', 'Не совсем довольны', 'Свой вариант'].map((option, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer px-4 py-2 rounded-lg text-center border ${
                                        additionalRating === option ? 'border-green-500 bg-green-100' : 'border-gray-300'
                                    }`}
                                    onClick={() => handleAdditionalRatingClick(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        {/* Если выбран "Свой вариант", показываем input */}
                        {additionalRating === 'Свой вариант' && (
                            <textarea
                                placeholder="Введите ваш вариант"
                                className="px-4 py-2 mb-4 border border-gray-300 rounded-lg w-full"
                            ></textarea>
                        )}

                        <button
                            className="mt-4 green px-10 py-2 rounded-4xl text-white font-bolder text-sm"
                            onClick={() => {
                                setShowModal(false); // Закрытие модалки
                                setIsSubmitted(true); // Отображение сообщения о принятии оценки
                            }}
                        >
                            Оценить
                        </button>
                    </div>
                </div>
            )}

            {/* Модальное окно с сообщением о принятии оценки */}
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
