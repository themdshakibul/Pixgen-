import { getTopGeneration } from "@/data/data";
import PhotCard from "../Shared/PhotCard";

const TopGeneration = async () => {
  const photos = await getTopGeneration();
  const topPhotos = photos.slice(0, 8);

  return (
    <section>
      <div className="container mx-auto px-2">
        <h2 className="text-4xl font-bold mb-5">Top Generation</h2>
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
