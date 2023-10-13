"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

function DocumentPage() {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const handleCreate = () => {
    const promise = create({ title: "Без назви" });

    toast.promise(promise, {
      loading: "Створення документу...",
      success: "Новий документ створений!",
      error: "Помилка при створенні документу!",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        alt="empty"
        height={300}
        width={300}
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        alt="empty"
        height={300}
        width={300}
        className="dark:block hidden"
      />
      <h2 className="text-lg font-medium">
        Вітаємо в {user?.firstName} Planner
      </h2>
      <Button onClick={handleCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Створити документ
      </Button>
    </div>
  );
}

export default DocumentPage;
