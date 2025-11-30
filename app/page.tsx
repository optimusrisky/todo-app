import { Suspense } from "react";
import { TaskAddForm } from "./TaskAddForm";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center bg-(--main-bg-color)">
      <main className="py-24 w-4/5 md:w-3/5 flex flex-col gap-7">
        <h1 className="text-5xl font-bold">Todo App</h1>
        <Suspense>
          <TaskAddForm />
        </Suspense>
      </main>
    </div>
  );
}
