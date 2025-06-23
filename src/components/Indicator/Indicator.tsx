import React from 'react';

export interface IndicatorProps {
    id: string | number;
    value: number;
}

const shadeStyles: Record<number, string> = {
    100: 'bg-blue-900 text-white',
    90: 'bg-blue-800 text-white',
    80: 'bg-blue-700 text-white',
    70: 'bg-blue-600 text-white',
    60: 'bg-blue-500 text-white',
    50: 'bg-blue-400 text-white',
    40: 'bg-blue-300 text-blue-900',
    30: 'bg-blue-200 text-blue-900',
    20: 'bg-blue-100 text-blue-900',
    10: 'bg-blue-50 text-blue-900',
    0: 'bg-blue-50 text-blue-900',
};

const LotteryBall: React.FC<IndicatorProps> = ({ id, value }) => {
    const shade = Math.round(value / 10) * 10;

    return (
        <div
            id={`lottery-ball-${id}`}
            data-testid={`lottery-ball-${id}`}
            className={`w-[35px] h-[35px] rounded-full inline-grid place-content-center ${shadeStyles[shade]}`}
        >
            <p className="font-medium text-type-reg leading-[19px]">{Math.round(value)}</p>
        </div>
    );
};

export default LotteryBall;
