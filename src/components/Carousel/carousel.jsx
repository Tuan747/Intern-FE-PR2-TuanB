import React from 'react';

function Carousel() {
    return (
        <div id="carouselNav" className="carousel slide mt-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselNav" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselNav" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselNav" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselNav" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselNav" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://cinestar.com.vn/pictures/hssv.jpg" className="d-block w-100" alt="carousel" />
                </div>
                <div className="carousel-item">
                    <img src="https://cinestar.com.vn/pictures/capture.png" className="d-block w-100" alt="carousel" />
                </div>
                <div className="carousel-item">
                    <img src="https://cinestar.com.vn/pictures/capture.png" className="d-block w-100" alt="carousel" />
                </div>
                <div className="carousel-item">
                    <img src="https://cinestar.com.vn/pictures/c'member.jpg" className="d-block w-100" alt="carousel" />
                </div>
                <div className="carousel-item">
                    <img src="https://cinestar.com.vn/pictures/c'ten.jpg" className="d-block w-100" alt="carousel" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselNav" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselNav" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
