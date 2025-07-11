"use client"
import React, { useState } from "react"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"
import { horrorMovies } from "../constant/Constant"

const HorrorVideos = () => {
    const [selectedMovie, setSelectedMovie] = useState<string | null>(null)

    return (
        <div className="horror-videos-section">
            <h2 className="horror-title">Horror Videos Trailers</h2>
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

export default HorrorVideos

