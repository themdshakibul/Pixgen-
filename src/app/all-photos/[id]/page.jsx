import { getTopGeneration } from "@/data/data";
import { Card, Chip } from "@heroui/react";
import Image from "next/image";

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;
  const photoDetails = await getTopGeneration();
  const photos = photoDetails.find((photo) => photo.id == id);

  const { title, prompt } = photos;

  return (
    <section>
      <div>
        <Card className="container mx-auto px-2 border border-gray-300 p-5 mt-10">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="font-semibold">{prompt}</p>
        </Card>
      </div>
    </section>
  );
};

export default PhotoDetailsPage;
