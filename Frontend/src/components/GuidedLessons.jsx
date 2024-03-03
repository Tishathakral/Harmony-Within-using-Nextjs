"use client";
import { getGuidedLessons } from '@/handlers/homePageApis';
import { useQuery } from '@tanstack/react-query';
import React from 'react';



// New component for guided lesson card
const GuidedLessonCard = ({ title, description, imageURL }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-white rounded-lg p-6 h-full shadow-md hover:shadow-lg transition-shadow">
        <img src={imageURL} alt={title} className="w-full h-48 object-cover mb-4 rounded-md transform hover:scale-105 transition duration-300 ease-in-out" />
        <h2 className="text-2xl font-medium mb-2 text-black">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const GuidedLessons = () => {
  // Example data for guided lessons
  // const [guidedLessonsData, setGuidedLessonsData] = useState([]);
  // const getguidedLessonsData= async () => {
  //   try {
  //     const res = await fetch('http://localhost:3000/guidedLessons');
  //     const data = await res.json();
  //     console.log(data);
  //     setGuidedLessonsData(data);
  //   } catch (error) {
  //     console.error('Error fetching FAQ data:', error);
  //   }
  // };
  // useEffect(() => {
  //   getguidedLessonsData();
  // }, []);
  
  const { data:guidedLessonsData, isLoading } = useQuery({
    queryKey: ["guidedLessons"],
    queryFn: getGuidedLessons,
  });

  console.log(guidedLessonsData);

  if (isLoading) {
    return <div>Loading...</div>;
  }
 

  return (
    <div className="h-full bg-yellow-200 m-4 md:m-8 lg:m-16 rounded-lg" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/06/03/15/26/ginkgo-8037886_1280.jpg")' }}>
      <section className="py-8 md:py-16 w-full backdrop-blur-sm rounded-lg">
        <div className="container mx-auto text-center text-white ">

          <h1 className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 md:mb-6">"Quiet the mind so the soul will speak"</h1>

          {/* Render guided lesson cards side by side */}
          <div className="flex flex-wrap">
            {guidedLessonsData.map((lesson, index) => (
              <GuidedLessonCard
                key={index}
                title={lesson.title}
                description={lesson.description}
                imageURL={lesson.imageURL}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuidedLessons;
