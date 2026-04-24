import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-950 dark:to-gray-900 px-4">

            <div className="text-center max-w-md w-full">

                {/* 404 Number */}
                <h1 className="text-7xl sm:text-8xl font-extrabold text-gray-800 dark:text-white tracking-tight">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                    News Article Not Found
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                    The page you are looking for doesn’t exist, was removed,
                    or the link might be broken.
                </p>

                {/* Button */}
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition duration-200"
                    >
                        🏠 Back to Home
                    </Link>
                </div>

                {/* Divider */}
                <div className="my-8 border-t border-gray-300 dark:border-gray-700"></div>

                {/* Extra Info */}
                <p className="text-xs text-gray-400 dark:text-gray-500">
                    Tip: Check the URL or go back to homepage for latest news updates.
                </p>

            </div>

        </div>
    );
}