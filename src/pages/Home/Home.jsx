import { useLoaderData } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import ServiceCard from "./ServiceCard";
import Banner from "./Banner";

const Home = () => {

    const cards = useLoaderData();

    return (
        <div>
            <NavBar></NavBar>
            <div className="mb-32 ">
                <Banner></Banner>
            </div>
            <h1 className="text-4xl font-semibold pb-10  text-center">Our Survices</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
                {
                    cards.map(card => <ServiceCard key={card._id} card={card}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Home;