import React from 'react';
import people1 from '../assets/people1.jpeg'
import people2 from '../assets/people2.jpeg'
import people3 from '../assets/people3.jpeg'

const ExtraSection = () => {
    return (
        <div>

<section className="py-10 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
    <div id='success' className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: "John Doe",
          quote: "Running this marathon changed my life!",
          photo: people1,
        },
        {
          name: "Jane Smith",
          quote: "Achieved my personal best thanks to this platform!",
          photo: people2,
        },
        {
          name: "Mike Lee",
          quote: "Organizing through this platform was seamless and rewarding!",
          photo: people3
        },
      ].map((story, index) => (
        <div
          key={index}
          className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center"
        >
          <img
            src={story.photo}
            alt={story.name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <p className="italic mb-2">"{story.quote}"</p>
          <p className="font-bold">{story.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>






<section className="py-10 bg-white">
  <div id='Fitness' className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6">Fitness Tips & Resources</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Quick Tips Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Quick Tips</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Stay hydrated before, during, and after your run.</li>
          <li>Include dynamic stretching in your warm-up routine.</li>
          <li>Gradually increase mileage to prevent injuries.</li>
          <li>Rest is as important as training—schedule rest days.</li>
        </ul>
      </div>

      {/* Resources Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Resources</h3>
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Training Plans (PDF)
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎥 Watch: Pre-Marathon Stretches (YouTube)
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Nutrition Tips for Runners (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>



            
        </div>
    );
};

export default ExtraSection;