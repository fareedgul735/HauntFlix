"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
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
          <div className="cards">
            <div className="card">
              <div className="card-img">
                <Image src="/conjuring.jpeg" alt="conjuring" width={250} height={350} />
              </div>
              <p>The Conjuring</p>
            </div>
            <div className="card">
              <div className="card-img">
                <Image src="/anabelle.jpg" alt="annabelle" width={250} height={350} />
              </div>
              <p>Annabelle</p>
            </div>
            <div className="card">
              <div className="card-img">
                <Image src="/nuning.jpg" alt="nun" width={250} height={350} />
              </div>
              <p>The Nun</p>
            </div>
          </div>
        </section>

        <section className="quote">
          <p>"Do you like scary movies?"</p>
        </section>
      </div>
    </>
  );
};

export default HomePage
