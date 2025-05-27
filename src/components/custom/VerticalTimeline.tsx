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
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(items.length).fill(false));

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        itemRefs.current.forEach((ref, idx) => {
            if (!ref) return;
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => {
                            const updated = [...prev];
                            updated[idx] = true;
                            return updated;
                        });
                        observer.disconnect();
                    }
                },
                { threshold: 0.3 }
            );
            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach(observer => observer.disconnect());
        };
    }, [items.length]);

    return (
        <div className="relative flex flex-col items-center py-8 md:overflow-y-scroll md:max-h-[calc(100vh-300px)] lg:max-h-[calc(100vh-400px)]">
            <div className="relative w-full max-w-xl">
                {/* Línea vertical */}
                <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-200 transition-all duration-1000 dark:bg-gray-700" aria-hidden="true" />
                <ul className="w-full space-y-12">
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            ref={el => { itemRefs.current[idx] = el; }}
                            className={`relative flex items-center group transition-all duration-700 ${visibleItems[idx] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                            style={{ transitionDelay: `${idx * 120}ms` }}
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
                                <div className="text-gray-400 font-bold text-sm dark:text-gray-500">{item.date}</div>
                                <div className="text-lg font-semibold">{item.title}</div>
                                {item.description && (
                                    <div className="text-gray-500 dark:text-gray-400">{item.description}</div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default VerticalTimeline;