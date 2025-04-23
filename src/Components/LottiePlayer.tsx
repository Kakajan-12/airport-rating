// components/LottiePlayer.tsx
'use client'

import Lottie from 'lottie-react';
import animationData from '../../public/Animation.json';

const LottiePlayer = () => {
    return (
        <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: 384, height: 384 }}
        />
    );
};

export default LottiePlayer;