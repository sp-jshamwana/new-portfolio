import React from 'react';
import usePodcasts from "../hooks/usePodcasts";
import PodcastCard from "../components/PodcastCard";

const InfoDiet = () => {
  const { podcasts, loading, error } = usePodcasts('technology'); // Replace 'technology' with your preferred search term

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading podcasts: {error.message}</p>;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Info Diet</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {podcasts.map(podcast => (
          <PodcastCard key={podcast.collectionId} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default InfoDiet;
