import PhotCard from "@/Components/Shared/PhotCard";
import { getTopGeneration } from "@/data/data";

const AllPhotosPages = async () => {
  const allPhotos = await getTopGeneration();

  return (
    <section>
      <div className="container mx-auto px-2">
        <h2 className="text-3xl font-bold py-5">All Photos</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allPhotos.map((photo) => (
            <PhotCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllPhotosPages;
