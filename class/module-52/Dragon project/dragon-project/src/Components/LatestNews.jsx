import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div>
            <div className="flex bg-slate-200">
                <p className="bg-red-800 px-4 flex rounded-lg ">Latest News</p>
              
                    <Marquee pauseOnHover={true}speed ={100}className="gap-10 po">
                    <Link to='./news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos necessitatibus itaque dignissimos earum odit iste eaque alias, aspernatur ullam molestiae corrupti ad sequi ut fugit nisi amet ducimus quis.</Link>
                              
               
                    <Link to='./news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos necessitatibus itaque dignissimos earum odit iste eaque alias, aspernatur ullam molestiae corrupti ad sequi ut fugit nisi amet ducimus quis.</Link>
                                

                    <Link to='./news'> Lorem ipsum dolor sit amet consectetur adipisicing elit. In eos necessitatibus itaque dignissimos earum odit iste eaque alias, aspernatur ullam molestiae corrupti ad sequi ut fugit nisi amet ducimus quis.</Link>
                    </Marquee>              

            </div>
        </div>
    );
};

export default LatestNews;