import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bookmark, User, Lock } from "lucide-react";
import UserHeader from "../components/TopNavbar";

const UserDashboard = () => {
  // For demonstration, we use local state with hardcoded data.
  const [mostPopularItems, setMostPopularItems] = useState([]);
  const [newContentItems, setNewContentItems] = useState([]);

  // Simulate fetching data on mount (or later you could fetch from an API)
  useEffect(() => {
    const popularData = [
      {
        id: 1,
        image: "2.png",
        alt: "Seated Crunches Machine",
        title: "Seated Crunches (Machine)",
        description: "Anatomical Analysis"
      },
      {
        id: 2,
        image: "2.png",
        alt: "Seated Crunches Machine",
        title: "Seated Crunches (Machine)",
        description: "Anatomical Analysis"
      },
      {
        id: 3,
        image: "2.png",
        alt: "Seated Crunches Machine",
        title: "Seated Crunches (Machine)",
        description: "Anatomical Analysis"
      },
      {
        id: 4,
        image: "2.png",
        alt: "Seated Crunches Machine",
        title: "Seated Crunches (Machine)",
        description: "Anatomical Analysis"
      },
    ];
    const newContentData = [
      {
        id: 1,
        image: "1.png",
        alt: "New Training Video",
        title: "New Training Video",
        description: "With lock icon"
      },
      {
        id: 2,
        image: "1.png",
        alt: "New Training Video",
        title: "New Training Video",
        description: "With lock icon"
      },
      {
        id: 3,
        image: "1.png",
        alt: "New Training Video",
        title: "New Training Video",
        description: "With lock icon"
      },
      {
        id: 4,
        image: "1.png",
        alt: "New Training Video",
        title: "New Training Video",
        description: "With lock icon"
      },
    ];
    
    setMostPopularItems(popularData);
    setNewContentItems(newContentData);
  }, []);

  return (
    <>
      {/* Internal CSS to hide scrollbar */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>

      <div className="bg-black text-white min-h-screen flex flex-col font-sans">
        <UserHeader />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 space-y-8">
          {/* Most Popular Section */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg md:text-xl">Most Popular</h3>
              <span className="text-sm text-gray-400 cursor-pointer hover:text-yellow-400">
                See all
              </span>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-1">
              {mostPopularItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[250px] md:min-w-[400px] bg-gray-900 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-semibold text-sm md:text-base">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Content Section */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg md:text-xl">New Content</h3>
              <span className="text-sm text-gray-400 cursor-pointer hover:text-yellow-400">
                See all
              </span>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-1">
              {newContentItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[250px] md:min-w-[400px] bg-gray-900 rounded-xl overflow-hidden relative shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-36 object-cover"
                  />
                  <Lock className="absolute top-2 right-2 text-yellow-400 w-5 h-5" />
                  <div className="p-4">
                    <p className="font-semibold text-sm md:text-base">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default UserDashboard;
