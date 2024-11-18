import img from '../assets/&.jpg'
import img1 from '../assets/save10.webp'
import img2 from '../assets/&.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full p-6 ">
                <div id="item1" className="carousel-item w-[500px] ">
                    <img
                        src={img}
                        className="w-[500px] " />
                </div>
                <div id="item2" className="carousel-item w-[500px]">
                    <img
                        src={img1}
                        className="w-[500px]" />
                </div>
                <div id="item3" className="carousel-item w-[500px]">
                    <img
                        src={img2}
                        className="w-[500px]" />
                </div>
                <div id="item4" className="carousel-itemw-[500px]">
                    <img
                        src={img}
                        className="w-[500px]" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>
        </div>
    );
};

export default Banner;