"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createdAt = searchParams.get("createdAt");
  const isCompleted = searchParams.get("isCompleted");

  const url = new URLSearchParams(searchParams);

  const changeIsCompleted = (value: string) => {
    if (value) {
      url.set("isCompleted", value);
    } else url.delete("isCompleted");
    router.push(`${pathname}?${url}`);
  };

  const changeOrderOfCreatedAt = (value: string) => {
    if (value) {
      url.set("createdAt", value);
    } else url.delete("createdAt");
    router.push(`${pathname}?${url}`);
  };

  return (
    <div className="flex gap-4">
      <select
        name="isCompleted"
        className="flex-1"
        defaultValue={isCompleted || ""}
        onChange={(e) => changeIsCompleted(e.target.value)}
      >
        <option value="">状態</option>
        <option value="false">未完了</option>
        <option value="true">完了</option>
      </select>
      <select
        name="createdAt"
        className="flex-1"
        defaultValue={createdAt || ""}
        onChange={(e) => changeOrderOfCreatedAt(e.target.value)}
      >
        <option value="">作成日</option>
        <option value="asc">昇順</option>
        <option value="desc">降順</option>
      </select>
    </div>
  );
};
