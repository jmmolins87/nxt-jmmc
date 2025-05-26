



import { Skeleton } from "@/components/ui/skeleton"


export default function LoadingPage() {
    return (
        <div className="max-h-screen overflow-hidden">
            <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
                <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <Skeleton className="h-8 w-16 rounded bg-gray-300 dark:bg-gray-600" />
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <Skeleton className="h-6 w-20 rounded bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-6 w-20 rounded bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-6 w-20 rounded bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-6 w-20 rounded bg-gray-300 dark:bg-gray-600" />
                    </nav>
                    <div className="hidden md:flex items-center gap-3">
                        <Skeleton className="h-6 w-8 rounded bg-gray-300 dark:bg-gray-600" />
                        <Skeleton className="h-6 w-8 rounded bg-gray-300 dark:bg-gray-600" />
                    </div>
                    <div className="block md:hidden items-center gap-3">
                        <Skeleton className="h-6 w-6 rounded bg-gray-300 dark:bg-gray-600" />
                    </div>
                </div>
            </header>
            <section className="py-20 md:py-32 min-h-screen flex flex-col justify-center items-center transition-colors">
                <div className="container mx-auto px-4 md:px-6 md:w-2/3 lg:w-4/6">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="flex-1 space-y-4 w-full">
                            <Skeleton className="h-14 w-2/3 rounded bg-gray-300 dark:bg-gray-600" />
                            <Skeleton className="h-8 w-1/2 rounded bg-gray-300 dark:bg-gray-600" />
                            <Skeleton className="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-600" />
                            <div className="flex flex-wrap gap-4">
                                <Skeleton className="h-10 w-32 rounded bg-gray-300 dark:bg-gray-600" />
                                <Skeleton className="h-10 w-32 rounded bg-gray-300 dark:bg-gray-600" />
                            </div>
                            <div className="flex gap-6">
                                <Skeleton className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
                                <Skeleton className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
                                <Skeleton className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600" />
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center md:justify-end">
                            <Skeleton className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-gray-200 dark:bg-gray-800" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}