
'use client'

import { useState } from "react";

import { useTranslation } from "react-i18next"

const FILE_URL = "/files/cv-Juanma_MC.pdf";
const FILE_NAME = "cv-Juanma_MC.pdf";

export default function DownloadButton() {

    const { t } = useTranslation()

    const [progress, setProgress] = useState(0);
    const [downloading, setDownloading] = useState(false);

    const handleDownload = async () => {
        setDownloading(true);
        setProgress(0);

        const response = await fetch(FILE_URL);
        if (!response.ok) {
            setDownloading(false);
            return;
        }

        const contentLength = response.headers.get("content-length");
        const total = contentLength ? parseInt(contentLength, 10) : 0;
        let loaded = 0;
        const reader = response.body?.getReader();
        const chunks = [];

        while (reader) {
            const { done, value } = await reader.read();
            if (done) break;
            if (value) {
                chunks.push(value);
                loaded += value.length;
                if (total) setProgress(Math.round((loaded / total) * 100));
            }
        }

        const blob = new Blob(chunks);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = FILE_NAME;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);

        setTimeout(() => {
            setDownloading(false);
            setProgress(0);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <button
                onClick={handleDownload}
                disabled={downloading}
                className="
                    flex justify-center items-center relative w-12 h-12 rounded-full bg-primary text-white border border-primary/30 dark:border-white/20 shadow-lg transition hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:text-slate-900 dark:bg-white dark:hover:bg-white/80
                "
                aria-label="Descargar CV"
            >
                {downloading ? (
                    <>
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 36 36">
                            <circle
                                className="stroke-slate-500 dark:stroke-slate-200"
                                strokeWidth="4"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="16"
                            />
                            <circle
                                className="stroke-slate-200 dark:stroke-slate-500"
                                strokeWidth="4"
                                fill="none"
                                cx="18"
                                cy="18"
                                r="16"
                                strokeDasharray={100}
                                strokeDashoffset={100 - progress}
                                style={{ transition: "stroke-dashoffset 0.2s" }}
                            />
                        </svg>
                        <span className="flex flex-col justify-center items-center relative z-10 font-bold text-base select-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                            </svg>
                        </span>
                    </>
                ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user-icon lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M15 18a3 3 0 1 0-6 0" /><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" /><circle cx="12" cy="13" r="2" /></svg>
                )}
                <span className="sr-only">Descargar CV</span>
            </button>
            {downloading && (
                <span className="
                    absolute left-3.5 bottom-[6px] translate-x-[50px] text-xs text-center mt-5
                    bg-zinc-900 dark:bg-white text-white dark:text-primary-foreground
                    px-2 py-1 rounded shadow
                ">
                    {t("download.button")}... {progress}%
                </span>
            )}
        </div>
    );
}