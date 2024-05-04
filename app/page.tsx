import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="py-5">
        <ThemeSwitcher />
      </section>
      <section className="flex flex-col">
        <h1 className="font-bold text-6xl">
          Welcome to my personal domain!
        </h1>
      </section>
    </main>
  );
}
