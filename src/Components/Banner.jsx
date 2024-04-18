


const Banner = () => {
    return (
        <div className="carousel lg:h-[554px] h-auto bg-[#1313130D] rounded-2xl flex items-center lg:justify-evenly flex-col-reverse lg:flex-row  gap-2 pt-4 lg:pr-0 lg:pt-0 shadow-xl mb-12 bg-no-repeat">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/qpwMqcD/vita-vilcina-Kt-Oid0-FLjq-U-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-base-300">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-base-300">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/kgBGJBx/webaliser-TPTXZd9m-Oo-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-base-300">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-base-300">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/XV3kzds/florian-schmidinger-b-79n-Oqf95-I-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-base-300">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-base-300">❯</a>
                </div>
            </div>
            {/* <div id="slide4" className="carousel-item relative w-full">
                <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;