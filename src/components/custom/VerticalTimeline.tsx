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
        <div className="relative flex flex-col items-center overflow-visible py-8 pr-0 md:overflow-y-auto md:pr-2 [scrollbar-gutter:stable] sm:max-h-[calc(100vh-400px)] md:max-h-[calc(100vh-0px)] lg:max-h-[calc(100vh-200px)] xl:h-full">
            <div className="relative w-full">
                <div
                    className="absolute left-3 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0 transition-all duration-1000 md:left-1/2 md:-translate-x-1/2"
                    aria-hidden="true"
                />
                <ul className="w-full space-y-12">
                    {items.map((item, idx) => (
                        <li
                            key={idx}
                            ref={el => { itemRefs.current[idx] = el; }}
                            className={`group relative flex items-center transition-all duration-700 ${visibleItems[idx] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                            style={{ transitionDelay: `${idx * 120}ms` }}
                        >
                            <span
                                className="absolute left-3 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_25px_rgba(14,165,233,0.35)] transition-transform duration-500 group-hover:scale-125 md:left-1/2"
                                style={{ top: 0 }}
                            >
                                <span className="block h-2.5 w-2.5 rounded-full bg-primary animate-pulse" />
                            </span>
                            <div
                                className={`w-full pl-10 pr-5 text-left md:pl-0 md:pr-0 ${
                                    idx % 2 === 0 ? "md:pr-14 md:text-left" : "md:pl-14 md:pr-6 md:text-right"
                                }`}
                            >
                                <div className="text-sm font-bold uppercase tracking-[0.2em] text-primary/80">{item.date}</div>
                                <div className="text-lg font-semibold">{item.title}</div>
                                {item.description && (
                                    <div className="max-w-full text-muted-foreground">{item.description}</div>
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
