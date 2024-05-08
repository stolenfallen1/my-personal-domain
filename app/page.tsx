import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="py-5">
        <ThemeSwitcher />
      </section>
      <section className="flex flex-col items-center">
        <div className="mb-4 flex flex-col items-center">
          <h1 className="font-bold text-6xl leading-tight">
            Welcome to my
          </h1>
          <h1 className="font-bold text-6xl leading-tight">
            Domain
          </h1>
        </div>
        <div className="flex flex-col items-center px-8">
          <p className="text-2xl italic font-light">
            Explore a Collection of Innovative Projects that define my journey as a Software Engineer.
          </p>
        </div>
      </section>
    </main>
  );
}
