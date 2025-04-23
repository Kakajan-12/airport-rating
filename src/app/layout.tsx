'use client' // Указываем, что компонент работает на клиенте

import { ReactNode } from 'react';
import './globals.css';
import Header from "@/Components/Header"; // Убедитесь, что путь правильный
import { usePathname } from 'next/navigation'; // Хук для получения текущего пути

interface LocaleLayoutProps {
    children: ReactNode;
}

export default function LocaleLayout({ children }: LocaleLayoutProps) {
    const pathname = usePathname(); // Получаем текущий путь

    // Проверяем, если это главная страница (например, /)
    const isHomePage = pathname === '/';

    return (
        <html>
        <body>
        {/* Если это не главная страница, показываем Header */}
        {!isHomePage && <Header />}
        {children}
        </body>
        </html>
    );
}
