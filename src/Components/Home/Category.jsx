import { getCategory } from "@/data/data";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Category = async () => {
  const categorys = await getCategory();

  return (
    <section>
      <div className="container mx-auto flex items-center justify-center flex-wrap px-2 gap-5">
        {categorys.map((category) => (
          <Link
            key={category.id}
            href={`?category=${category.name.toLowerCase()}`}
          >
            <Button>{category.name}</Button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
