"use client";

import { useEffect, useState } from 'react';

export default function ThemeSwitchEmoji({ isDark }: { isDark: boolean }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); 
    }, []);

    if (!isClient) {
        return null; 
    }

    return (
        <div className="text-lg">
            {isDark ? (
                <span>🌞</span> 
            ) : (
                <span>🌚</span>
            )}
        </div>
    );
}
