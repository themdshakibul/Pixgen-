import { getTopGeneration } from "@/data/data";
import PhotCard from "../Shared/PhotCard";
import Category from "./Category";

const TopGeneration = async () => {
  const photos = await getTopGeneration();
  const topPhotos = photos.slice(0, 8);

  return (
    <section>
      <div className="container mx-auto px-2">
        <div className="space-y-2 mb-10">
          <h2 className="text-4xl font-bold">Top Generation</h2>
          <Category />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {topPhotos.map((photo) => (
            <div key={photo.id}>
              <PhotCard photo={photo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGeneration;
