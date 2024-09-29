import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Navbar from "../../components/navbar/CustomerNavbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import BackButton from '../../components/button/BackButton.jsx';

const ViewMeasurement = () => {

    const [measurement, setMeasurement] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3000/measurements/${id}`)
            .then((response) => {
                setMeasurement(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])

    const femaleTops = [
        '/Female/Blouse.webp',
        '/Female/Dress.jpg',
        '/Female/Tshirt.jpeg'
    ];

    const femalePants = [
        '/Female/Pant1.jpg',
        '/Female/Pant2.jpeg',
    ];

    const maleShirts = [
        '/Male/GreenLST.webp',
        '/Male/shirt.jpg',
        '/Male/tshirt.jpeg'
    ];

    const maleTrousers = [
        '/Male/Pant.webp',
        '/Male/GreenShort.jpeg',
    ];

    return (
        <div className='w-full mt-6 h-full bg-fixed bg-no-repeat ' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <Navbar />
            <BackButton />
            <div className="container mx-auto flex flex-row">
                {loading ? (
                    <Spinner />
                ) : (
                    <div className=" border-2 rounded-xl h-fit w-fit p-4 mt-20 mx-auto ml-10">
                        <h1 className='text-3xl text-center text-primary my-4 font-Aboreto'>Body Measurements</h1>
                        <div className='my-6 flex'>
                            <p className='text-xl text-primary font-BreeSerif w-60'>Unique Name</p>
                            <p className='text-xl font-BreeSerif'>{measurement.UniqueName}</p>
                        </div>
                        <div className='my-6 flex'>
                            <p className='text-xl text-primary font-BreeSerif w-60'>Gender</p>
                            <p className='text-xl font-BreeSerif'>{measurement.Gender}</p>
                        </div>
                        <div className='my-6 flex'>
                            <span className='text-xl text-primary font-BreeSerif w-60'>Bust Size</span>
                            <span className='text-xl font-BreeSerif'>{measurement.Bust}</span>
                        </div>
                        <div className='my-6 flex'>
                            <span className='text-xl text-primary font-BreeSerif w-60'>Under Bust Size</span>
                            <span className='text-xl font-BreeSerif'>{measurement.UnderBust}</span>
                        </div>
                        <div className='my-6 flex'>
                            <span className='text-xl text-primary font-BreeSerif w-60'>Neck Base Size</span>
                            <span className='text-xl font-BreeSerif'>{measurement.NeckBase}</span>
                        </div>
                        <div className='my-6 flex'>
                            <span className='text-xl text-primary font-BreeSerif w-60'>Waist Size</span>
                            <span className='text-xl font-BreeSerif'>{measurement.Waist}</span>
                        </div>
                        <div className='my-6 flex'>
                            <span className='text-xl text-primary font-BreeSerif w-60'>Hip Size</span>
                            <span className='text-xl font-BreeSerif'>{measurement.Hip}</span>
                        </div>
                        <div className='my-6 flex'>
                            <span className='text-xl text-primary font-BreeSerif w-60'>Shoulder Width Size</span>
                            <span className='text-xl font-BreeSerif'>{measurement.ShoulderWidth}</span>
                        </div>


                    </div>
                )}

                <div className="w-1/2 flex flex-wrap justify-center items-center mt-10 ml-10">
                    {measurement.Gender === 'Female' && (
                        <>
                            <h2 className="text-2xl w-full text-center mb-4">Your model size for below cloth types : {measurement.TopSize || "N/A"}</h2>
                            {femaleTops.map((image, index) => (
                                <img key={index} src={image} alt="Female Top" className='w-1/3 p-2' />
                            ))}

                            <h2 className="text-2xl w-full text-center mt-10 mb-4">Your model size for below cloth types : {measurement.PantSize || "N/A"}</h2>
                            {femalePants.map((image, index) => (
                                <img key={index} src={image} alt="Female Pants" className={image === '/Female/Pant2.jpeg' ? 'w-1/2 p-2' : 'w-1/3 p-2'} />
                            ))}
                        </>
                    )}

                    {measurement.Gender === 'Male' && (
                        <>
                            <h2 className="text-2xl w-full text-center mt-10 mb-4">Your model size for below cloth types : {measurement.PantSize || "N/A"}</h2>
                            {maleShirts.map((image, index) => (
                                <img key={index} src={image} alt="Male Top" className='w-1/3 p-2' />
                            ))}

                            <h2 className="text-2xl w-full text-center mt-10 mb-4">Your model size for below cloth types : {measurement.TopSize || "N/A"}</h2>
                            {maleTrousers.map((image, index) => (
                                <img key={index} src={image} alt="Male Pants" className={image === '/Male/Pant.webp' ? 'w-1/2 p-2' : 'w-1/3 p-2' }/>
                            ))}
                        </>
                    )}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default ViewMeasurement;