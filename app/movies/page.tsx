"use client"

import React, { useState } from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

const horrorMovies = [
    {
        title: "The Conjuring",
        img: "/conjuring.jpeg",
        youtubeId: "k10ETZ41q5o",
        desc: "Witness the chilling true story that started it all.",
    },
    {
        title: "Annabelle",
        img: "/anabelle.jpg",
        youtubeId: "paFgQNPGlsg",
        desc: "A possessed doll unleashes terror beyond imagination.",
    },
    {
        title: "The Nun",
        img: "/nuning.jpg",
        youtubeId: "pzD9zGcUNrw",
        desc: "Evil rises in the form of a demonic nun.",
    },
    {
        title: "The Conjuring",
        img: "/conjuring.jpeg",
        youtubeId: "k10ETZ41q5o",
        desc: "Witness the chilling true story that started it all.",
    },
    {
        title: "Annabelle",
        img: "/anabelle.jpg",
        youtubeId: "paFgQNPGlsg",
        desc: "A possessed doll unleashes terror beyond imagination.",
    },
    {
        title: "The Nun",
        img: "/nuning.jpg",
        youtubeId: "pzD9zGcUNrw",
        desc: "Evil rises in the form of a demonic nun.",
    },
    {
        title: "The Conjuring",
        img: "/conjuring.jpeg",
        youtubeId: "k10ETZ41q5o",
        desc: "Witness the chilling true story that started it all.",
    },
    {
        title: "Annabelle",
        img: "/anabelle.jpg",
        youtubeId: "paFgQNPGlsg",
        desc: "A possessed doll unleashes terror beyond imagination.",
    },
    {
        title: "The Nun",
        img: "/nuning.jpg",
        youtubeId: "pzD9zGcUNrw",
        desc: "Evil rises in the form of a demonic nun.",
    },
    {
        title: "The Conjuring",
        img: "/conjuring.jpeg",
        youtubeId: "k10ETZ41q5o",
        desc: "Witness the chilling true story that started it all.",
    },
    {
        title: "Annabelle",
        img: "/anabelle.jpg",
        youtubeId: "paFgQNPGlsg",
        desc: "A possessed doll unleashes terror beyond imagination.",
    },
    {
        title: "The Nun",
        img: "/nuning.jpg",
        youtubeId: "pzD9zGcUNrw",
        desc: "Evil rises in the form of a demonic nun.",
    },
    {
        title: "The Conjuring",
        img: "/conjuring.jpeg",
        youtubeId: "k10ETZ41q5o",
        desc: "Witness the chilling true story that started it all.",
    },
    {
        title: "Annabelle",
        img: "/anabelle.jpg",
        youtubeId: "paFgQNPGlsg",
        desc: "A possessed doll unleashes terror beyond imagination.",
    },
    {
        title: "The Nun",
        img: "/nuning.jpg",
        youtubeId: "pzD9zGcUNrw",
        desc: "Evil rises in the form of a demonic nun.",
    },
]

const HorrorMovies = () => {
    const [selectedMovie, setSelectedMovie] = useState<string | null>(null)

    return (
        <div className="horror-videos-section">
            <h2 className="horror-title">Horror Movie Trailers</h2>
            <div className="horror-card-row">
                {horrorMovies.map((movie, index) => (
                    <div
                        className="horror-card"
                        key={index}
                        onClick={() => setSelectedMovie(movie.youtubeId)}
                    >
                        <div className="horror-thumbnail">
                            <Image
                                src={movie.img}
                                alt={movie.title}
                                fill
                                className="thumbnail-img"
                            />
                            <div className="play-button">
                                <FaPlay />
                            </div>
                        </div>
                        <div className="horror-info">
                            <h3>{movie.title}</h3>
                            <p>{movie.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedMovie && (
                <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${selectedMovie}?autoplay=1`}
                            title="Horror Movie Trailer"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                        <button className="close-btn" onClick={() => setSelectedMovie(null)}>✖</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HorrorMovies
