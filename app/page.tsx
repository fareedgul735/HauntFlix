"use client"

import Image from 'next/image';
import { useEffect, useState } from 'react';


const HomePage = () => {

  const [index, setIndex] = useState(0)

  const images = [
    { src: "/conjuring.jpg", title: "The Conjuring" },
    { src: "/anabelle.jpg", title: "The Anabelli" },
    { src: "/nun.webp", title: "The Nun" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(timer)
  })

  return (
    <>
      <div>
        <div className="hero">
          <div className="overlay" />
          <h1>Welcome to HauntFlix</h1>
          <p>Stream the Scariest Movies and Series... If You Dare.</p>
          <button className="explore-btn">Explore Now</button>
        </div>

        <section className="featured">
          <h2>Featured Terrors</h2>
          {images[index] && <div className="carousel-container">
            <div className="carousel-slide fade">
              <div className="card-img">
                <Image
                  src={images[index].src}
                  alt={images[index].title}
                  width={1250}
                  height={550}
                  className="carousel-img"
                />
              </div>
              <p>{images[index].title}</p>
            </div>
          </div>}
        </section>

        <section className="quote">
          <p>"Do you like scary movies?"</p>
        </section>
      </div>
    </>
  );
};

export default HomePage
