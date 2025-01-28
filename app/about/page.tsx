import { TypeAnimation } from "react-type-animation";

export default function About() {
    return (
        <main className="min-h-screen w-full flex flex-col items-center p-6 bg-slate-50 dark:bg-gray-900">
            {/* About Section */}
            <div className="mt-4 flex flex-row max-w-5xl w-full items-center gap-8 border border-gray-400 dark:border-gray-600 rounded-2xl shadow-lg overflow-hidden mb-12">
                <div className="w-1/2">
                    <img
                        src="/images/business_image.jpeg"
                        alt="Business Profile"
                        className="w-full h-full object-cover rounded-none border-r-4 border-indigo-700 dark:border-amber-400"
                    />
                </div>

                {/* Content Section */}
                <div className="w-1/2 p-6">
                    <h1 className="text-3xl italic font-bold text-indigo-700 dark:text-amber-400 mb-4">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                1300, 
                                'Web Developer',
                                1300, 
                                'Mobile Developer',
                                1300, 
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            speed={50}
                            className="inline-block"
                        />
                    </h1>
                    <p className="text-lg leading-relaxed">
                        Results-driven with 3 years of relevant expertise, including almost 2 years of
                        professional experience. I am versatile in both front-end and back-end development. 
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        From API development, testing and client side Integration. Always eager to learn and grow, 
                        I strive to deliver impactful solutions that help business grow and scale.
                    </p>
                </div>
            </div>

            {/* What I can do Section */}
            <div className="max-w-5xl w-full mb-12">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                    What I'm capable of doing
                </h2>
                <div className="flex justify-between gap-8">
                    {/* Web Development */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow w-full sm:w-1/3">
                        <h3 className="text-xl font-semibold text-indigo-700 dark:text-amber-400 mb-2">
                            Web Development
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Building custom web apps with modern frameworks.
                        </p>
                    </div>
                    {/* UI / UX Design */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow w-full sm:w-1/3">
                        <h3 className="text-xl font-semibold text-indigo-700 dark:text-amber-400 mb-2">
                            UI / UX Design
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Designing UI's for web and mobile apps to enhance user experience.
                        </p>
                    </div>
                    {/* Mobile Development */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-300 dark:border-gray-700 hover:shadow-lg transition-shadow w-full sm:w-1/3">
                        <h3 className="text-xl font-semibold text-indigo-700 dark:text-amber-400 mb-2">
                            Mobile Development
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Crafting cross-platform apps for iOS and Android.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
