import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h2 className="text-4xl font-bold">Coming Soon...</h2>

        <Link href={"/"}>
          <Button size="lg">Back to Home</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
