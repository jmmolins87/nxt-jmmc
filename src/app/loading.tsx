



import { Skeleton } from "@/components/ui/skeleton"


export default function LoadingPage() {
    return (
        <div className="max-h-screen overflow-hidden">
            <header className="sticky top-0 left-0 right-0 z-50 px-3 pt-3 md:px-6">
                <div className="container mx-auto flex h-16 items-center justify-between rounded-full border border-border/60 bg-background/72 px-4 backdrop-blur-xl md:px-6">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Skeleton className="h-9 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-9 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-9 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-9 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-9 w-20 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </nav>
                    <div className="hidden md:flex items-center gap-3">
                        <Skeleton className="h-11 w-11 rounded-full bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-11 w-11 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </div>
                    <div className="block md:hidden items-center gap-3">
                        <Skeleton className="h-11 w-11 rounded-full bg-gray-300 dark:bg-gray-600" />
                    </div>
                </div>
            </header>
            <section className="section-shell flex min-h-screen items-center transition-colors">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid items-center gap-8 rounded-[32px] border border-border/60 bg-background/55 p-6 backdrop-blur-xl md:grid-cols-2 md:gap-12 md:p-10">
                        <div className="w-full space-y-4">
                            <Skeleton className="h-8 w-36 rounded-full bg-gray-300 dark:bg-gray-600" />
                            <Skeleton className="h-16 w-2/3 rounded-2xl bg-gray-300 dark:bg-gray-600" />
                            <Skeleton className="h-8 w-1/2 rounded-2xl bg-gray-300 dark:bg-gray-600" />
                            <Skeleton className="h-6 w-3/4 rounded-2xl bg-gray-300 dark:bg-gray-600" />
                            <div className="flex flex-wrap gap-4">
                                <Skeleton className="h-11 w-32 rounded-full bg-gray-300 dark:bg-gray-600" />
                                <Skeleton className="h-11 w-32 rounded-full bg-gray-300 dark:bg-gray-600" />
                            </div>
                            <div className="flex gap-3">
                                <Skeleton className="h-11 w-11 rounded-2xl bg-gray-300 dark:bg-gray-600" />
                                <Skeleton className="h-11 w-11 rounded-2xl bg-gray-300 dark:bg-gray-600" />
                                <Skeleton className="h-11 w-11 rounded-2xl bg-gray-300 dark:bg-gray-600" />
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end">
                            <Skeleton className="h-[280px] w-[280px] rounded-[32px] bg-gray-200 dark:bg-gray-800 md:h-[400px] md:w-[400px]" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
