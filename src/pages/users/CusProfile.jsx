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
                <div className="flex justify-center mt-6">
                    {loadingMeasurements ? (
                        <p className="text-center text-gray-500">Loading measurements...</p>
                    ) : measurements ? (
                        <Link to="/measurements/view/:id">
                            <button className="bg-primary text-white font-bold py-2 px-8 rounded">
                                View Model
                            </button>
                        </Link>
                    ) : (
                        <Link to="/measurements/create">
                            <button className="bg-primary text-white font-bold py-2 px-8 rounded">
                                Add Measurements
                            </button>
                        </Link>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
