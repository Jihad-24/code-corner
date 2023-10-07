/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const ServiceCard = ({ card }) => {

    const { title, description, _id, image, price , details} = card;

    return (
        <div>
            <div className="card h-96 card-compact bg-base-100 shadow-xl">
                <figure><img className="w-full p-4" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-neutral">
                            <Link to={`/card/${encodeURIComponent(_id)}/${encodeURIComponent(title)}/${encodeURIComponent(description)}/${encodeURIComponent(image)}/${encodeURIComponent(price)}/${encodeURIComponent(details)}`} className="text-blue-500 font-semibold">See Details</Link>

                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;