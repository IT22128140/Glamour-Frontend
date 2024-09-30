import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/CustomerNavbar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Profile = () => {
    const [userProfile, setUserProfile] = useState([]);
    const [userID, setuserID] = useState("");
    const [measurements, setMeasurements] = useState(null);
    const [loadingMeasurements, setLoadingMeasurements] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .post("http://localhost:3000/login/auth", { token: token })
            .then((response) => {
                setuserID(response.data.userID)
                if (response.data.status === false) {
                    window.location.href = "/login";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });

    useEffect(() => {
        if (userID) {
        axios
            .get(`http://localhost:3000/login/${userID}`)
            .then((response) => {
                console.log(response.data);
                setUserProfile(response.data);
            })
            .catch((error) => {
                console.error("Error fetching profile information:", error);
            });
            }
    }, [userID]);

    // Fetch body measurements for the user
    useEffect(() => {
        if (userID) {
            axios
                .get(`http://localhost:3000/measurements/user/${userID}`)
                .then((response) => {
                    console.log(response.data);
                    if (response.data) {
                        setMeasurements(response.data);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching body measurements:", error);
                })
                .finally(() => {
                    setLoadingMeasurements(false);
                });
        }
    }, [userID]);

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
        <div>
            <Navbar />
            <div className="min-h-full flex flex-col items-center">
                <div className="mt-8 w-full max-w-4xl">
                    <div className="flex flex-col items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                            <img
                                src="emp.png"
                                alt="Profile"
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="bg-white shadow-lg rounded-lg w-full p-8 mb-8">
                            <h1 className="text-3xl font-Aboreto font-bold text-primary mb-6 text-center">
                                Profile Details
                            </h1>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-primary text-white p-4 rounded-lg">
                                    <p className="font-semibold">First Name</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p>{userProfile.firstName || "N/A"}</p>
                                </div>
                                <div className="bg-primary text-white p-4 rounded-lg">
                                    <p className="font-semibold">Last Name</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p>{userProfile.lastName || "N/A"}</p>
                                </div>
                                <div className="bg-primary text-white p-4 rounded-lg">
                                    <p className="font-semibold">Email Address</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p>{userProfile.email || "N/A"}</p>
                                </div>
                                <div className="bg-primary text-white p-4 rounded-lg">
                                    <p className="font-semibold">Phone Number</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p>{userProfile.phoneNumber || "N/A"}</p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <Link to="/EditCusProfile">
                                    <button className="bg-bgc text-white font-bold py-2 px-8 rounded">
                                        Edit Profile
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {loadingMeasurements ? (
                    <p className="text-center text-gray-500">Loading measurements...</p>
                ) : measurements ? (
                    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-primary text-center mb-8">
                            Body Measurements
                        </h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-4 p-4 space-x-4">
                                <p className="text-lg font-semibold text-gray-600">
                                    Measurement ID:
                                </p>
                                <p>{measurements.UniqueName}</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 space-x-4">
                                <p className="text-lg font-semibold text-gray-600">Gender:</p>
                                <p>{measurements.Gender}</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 space-x-4">
                                <p className="text-lg font-semibold text-gray-600">
                                    Bust Size:
                                </p>
                                <p>{measurements.Bust}</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 space-x-4">
                                <p className="text-lg font-semibold text-gray-600">
                                    Waist Size:
                                </p>
                                <p>{measurements.Waist}</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 space-x-4">
                                <p className="text-lg font-semibold text-gray-600">Hip Size:</p>
                                <p>{measurements.Hip}</p>
                            </div>
                            <div className="flex items-center gap-4 p-4 space-x-4">
                                <p className="text-lg font-semibold text-gray-600">
                                    Shoulder Width:
                                </p>
                                <p>{measurements.ShoulderWidth}</p>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <Link to={`/measurements/edit/${measurements._id}`}>
                                <button className="bg-bgc text-white font-bold py-2 px-8 rounded">
                                    Edit Measurements
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <Link to="/measurements/create">
                        <button className="bg-primary text-white font-bold py-2 px-8 rounded">
                            Add Measurements
                        </button>
                    </Link>
                )}

                <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                    {measurements?.Gender === "Female" && (
                        <>
                            <h2 className="text-2xl font-bold text-primary w-full text-center mb-4">
                                Your model size for below cloth types:{" "}
                                {measurements.TopSize || "N/A"}
                            </h2>
                            <div className="flex justify-center space-x-4">
                                {femaleTops.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt="Female Top"
                                        className="w-40 rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                            <h2 className="text-2xl font-bold text-primary w-full text-center mt-10 mb-4">
                                Your model size for below cloth types:{" "}
                                {measurements.PantSize || "N/A"}
                            </h2>
                            <div className="flex justify-center space-x-4">
                                {femalePants.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt="Female Pants"
                                        className="w-40 rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {measurements?.Gender === "Male" && (
                        <>
                            <h2 className="text-2xl font-bold text-primary w-full text-center mt-10 mb-4">
                                Your model size for below cloth types:{" "}
                                {measurements.PantSize || "N/A"}
                            </h2>
                            <div className="flex justify-center space-x-4">
                                {maleShirts.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt="Male Shirt"
                                        className="w-40 rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                            <h2 className="text-2xl font-bold text-primary w-full text-center mt-10 mb-4">
                                Your model size for below cloth types:{" "}
                                {measurements.TopSize || "N/A"}
                            </h2>
                            <div className="flex justify-center space-x-4">
                                {maleTrousers.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt="Male Pants"
                                        className="w-40 rounded-lg shadow-md"
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
