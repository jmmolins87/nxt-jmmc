import React, { useRef, useEffect, useState } from "react";

type TimelineItem = {
    date: string;
    title: string;
    description?: string;
};

type VerticalTimelineProps = {
    items: TimelineItem[];
};

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="relative flex flex-col items-center py-8 md:overflow-y-scroll md:max-h-[calc(100vh-400px)]">
            {/* Línea vertical */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-100 transition-all duration-1000 dark:bg-gray-800" aria-hidden="true" />
            <ul className="w-full max-w-xl space-y-12">
                {items.map((item, idx) => (
                    <li
                        key={idx}
                        className={`relative flex items-center group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} delay-[${idx * 150}ms]`}
                        style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                        {/* Punto animado */}
                        <span
                            className={`z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white border-4 border-gray-300 transition-transform duration-500 group-hover:scale-125 absolute left-1/2 -translate-x-1/2`}
                            style={{ top: 0 }}
                        >
                            <span className="block h-2 w-2 rounded-full bg-gray-400 animate-pulse" />
                        </span>
                        {/* Contenido */}
                        <div className={`md:ml-8 w-full ${idx % 2 === 0 ? "text-left" : "text-right"}`}>
                            <div className="text-gray-300 font-bold text-sm dark:text-gray-600">{item.date}</div>
                            <div className="text-lg font-semibold">{item.title}</div>
                            {item.description && (
                                <div className="text-gray-500 dark:text-gray-400">{item.description}</div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VerticalTimeline;