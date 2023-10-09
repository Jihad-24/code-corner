/* eslint-disable no-unused-vars */
import { Link, useLocation, useParams } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Swal from "sweetalert2";
import React from "react";

const Card = () => {

    const [cardData, setCardData] = React.useState();
    const { id } = useParams();

    React.useEffect(() => {
        fetch("/cards.json")
            .then(res => res.json())
            .then(data => {
                setCardData(data.find((item) => item._id == id));
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [setCardData, id]);


    const handlApply = () => {
        // success alert
        Swal.fire({
            icon: 'success',
            title: 'Applying Successfull'
        })
    }

    console.log(cardData)
    return (
        <div>
            <NavBar></NavBar>
            <div className="mx-auto text-center mb-32">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={cardData?.image} alt="Shoes" className="rounded-xl w-1/2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl">{cardData?.title}</h2>
                        <p className="px-16 leading-8 font-medium">{cardData?.details}</p>
                        <div className="">
                            <button className="btn text-xl">Course Price : ${cardData?.price}</button>
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