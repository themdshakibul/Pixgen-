import { getCategory } from "@/data/data";
import { Button } from "@heroui/react";
import React from "react";

const Category = async () => {
  const categorys = await getCategory();

  return (
    <section>
      <div className="container mx-auto flex items-center justify-center flex-wrap px-2 gap-5">
        {categorys.map((category) => (
          <Button key={category.id}>{category.name}</Button>
        ))}
      </div>
    </section>
  );
};

export default Category;
