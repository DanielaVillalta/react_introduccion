import React from "react";

const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Slide+1" className="d-block w-100" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Slide+2" className="d-block w-100" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img src="https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Slide+3" className="d-block w-100" alt="Third slide" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel