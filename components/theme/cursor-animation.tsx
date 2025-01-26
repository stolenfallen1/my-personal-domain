"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export function CursorAnimation() {
    const { resolvedTheme } = useTheme();
    const [cursorColors, setCursorColors] = useState("255, 255, 255"); 

    useEffect(() => {
        if (resolvedTheme) {
            setCursorColors(resolvedTheme === "dark" ? "255, 255, 255" : "0, 0, 0");
        }
    }, [resolvedTheme]);

    return (
        <AnimatedCursor
            innerSize={16}
            outerSize={16}
            color={cursorColors}
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
        />
    );
}
