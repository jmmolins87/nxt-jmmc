

"use client";

import { useEffect } from "react";


export default function SlidingTitle({ text }: { text: string }) {

    useEffect(() => {
        let pos = 0;
        const interval: NodeJS.Timeout = setInterval(scrollTitle, 200);
        const original = text + "   "; 
        let running = true;

        function scrollTitle() {
            if (!running) return;
            document.title = original.slice(pos) + original.slice(0, pos);
            pos = (pos + 1) % original.length;
        }

        return () => {
            running = false;
            clearInterval(interval);
        };
    }, [text]);

    return null;
}