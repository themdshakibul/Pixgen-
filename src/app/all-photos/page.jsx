import PhotCard from "@/Components/Shared/PhotCard";
import { getTopGeneration } from "@/data/data";

const AllPhotosPages = async () => {
  const allPhotos = await getTopGeneration();

  return (
    <section>
      <div className="container mx-auto px-2 mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {allPhotos.map((photo) => (
          <PhotCard key={photo.id} photo={photo} />
        ))}
      </div>
    </section>
  );
};

export default AllPhotosPages;
