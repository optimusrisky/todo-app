import { SearchForm } from "./SearchForm";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-(--main-bg-color)">
      <main className="py-24 w-1/2 flex flex-col gap-7">
        <h1 className="text-5xl font-bold">Todo App</h1>
        <SearchForm />
      </main>
    </div>
  );
}
