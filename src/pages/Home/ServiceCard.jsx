/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceCard = ({ card }) => {

    const { title, description, _id, image } = card;


    return (
        <div>
            <div className="card card-compact h-[432px] bg-base-100 shadow-xl">
                <figure><img className="w-full p-4" data-aos="zoom-out-down" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title" data-aos="fade-down-right">{title}</h2>
                    <p data-aos="fade-right">{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/card/${_id}`} className="text-blue-500 font-semibold"
                        > <button className="btn btn-neutral" data-aos="fade-up-left">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;