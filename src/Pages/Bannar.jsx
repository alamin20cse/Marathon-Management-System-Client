import React from 'react';
import photo1 from '../assets/photo1.webp'
import photo2 from '../assets/photo2.webp'
import photo3 from '../assets/photo3.avif'
import photo4 from '../assets/photo4.jpeg'

const Bannar = () => {
    return (
        <div className="carousel w-full">


  <div id="slide1" className="carousel-item relative w-full">
  <div
  className="hero lg:min-h-screen h-[400px]"
  style={{
    backgroundImage: `url(${photo1})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Marathons</h1>
      <p className="mb-5">
      Marathons are long-distance running events that challenge participants' endurance and determination, often covering a distance of 26.2 miles (42.195 kilometers).
      </p>
      
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>





{/* 2 */}
  <div id="slide2" className="carousel-item relative w-full">
  <div
  className="hero lg:min-h-screen h-[400px]"
  style={{
    backgroundImage: `url(${photo2})`,
  }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Marathons</h1>
      <p className="mb-5">
      These events bring together runners of all levels, from elite athletes to recreational joggers, fostering a sense of community and shared achievement.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>




{/* 3 */}
  <div id="slide3" className="carousel-item relative w-full">
  <div
  className="hero lg:min-h-screen h-[400px]"
  style={{
    backgroundImage: `url(${photo3})`,
  }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello People</h1>
      <p className="mb-5">
      Marathons are held in cities worldwide, often showcasing scenic routes, iconic landmarks, and enthusiastic crowd support.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>




{/* 4 */}
  <div id="slide4" className="carousel-item relative w-full">
  <div
  className="hero lg:min-h-screen h-[400px]"
  style={{
    backgroundImage: `url(${photo4})`,
  }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">HI, Welcome to our website</h1>
      <p className="mb-5">
      Participating in a marathon is not just a physical challenge but also a mental triumph, symbolizing resilience, goal-setting, and personal growth.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>

  
</div>
    );
};

export default Bannar;