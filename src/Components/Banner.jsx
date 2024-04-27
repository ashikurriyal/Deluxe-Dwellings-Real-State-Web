


const Banner = () => {
    return (
        <div className="carousel w-full rounded-md">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jGxr7Vp/extravagant-pool-party-luxurious-mansion-complete-with-vip-cabanas-dj-booth.jpg" className="w-full lg:h-[754px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/wrtj0G1/max-kukurudziak-xd-Vr-Wx-Jc-Pc0-unsplash.jpg" className="w-full lg:h-[754px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/zbT0NNK/keepers-quarters-puget-sound.jpg" className="w-full lg:h-[754px]" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;