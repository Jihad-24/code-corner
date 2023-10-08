/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const ServiceCard = ({ card }) => {
    const { user } = useContext(AuthContext);

    const { title, description, _id, image, price, details } = card;


    return (
        <div>
            <div className="card card-compact h-[432px] bg-base-100 shadow-xl">
                <figure><img className="w-full p-4" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/card/${_id}`} className="text-blue-500 font-semibold"
                            state={{ title, description, _id, image, price, details }}
                        > <button className="btn btn-neutral">
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