import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const PhotCard = ({ photo }) => {
  return (
    <section>
      <div>
        <Card className="border border-gray-300">
          <div className="relative w-full aspect-square">
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-lg"
            />
            <Chip size="lg" className="absolute top-4 right-4">
              {photo.category}
            </Chip>
          </div>
          <h2>{photo.title}</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FcLike />
              <p>{photo.likes}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaCloudDownloadAlt />
              <p>{photo.downloads}</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PhotCard;
