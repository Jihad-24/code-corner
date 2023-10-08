/* eslint-disable no-unused-vars */
import { Link, useLocation, useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Swal from "sweetalert2";

const Card = () => {

    const { id } = useParams();

    const location = useLocation();
    const { title, image, price, details } = location.state || {};
    
    console.log(title, price,);
    console.log(location);

    const handlApply = () => {
        // success alert
        Swal.fire({
            icon: 'success',
            title: 'Applying Successfull'
        })
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="mx-auto text-center mb-32">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{title}</h2>
                        <p className="px-16 leading-8 font-medium">{ details}</p>
                        <div className="">
                            <button className="btn text-xl">Course Price : ${ price}</button>
                        </div>
                        <div className="card-actions mt-8 flex">
                            <button onClick={handlApply} className="btn btn-primary">Apply Course</button>
                            <Link to={"/"}><button className="btn btn-primary">Go Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;