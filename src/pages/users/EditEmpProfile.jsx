import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from '../../components/Spinner';
import StoreNavbar from "../../components/navbar/staffheader/StoreNavbar";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

function EditEmpProfile() {
    const [userProfile, setUserProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "" // Password is initially blank and update if only need to 
    });
    const [empID, setempID] = useState("");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); 

    // Fetch empID on component mount
    useEffect(() => {
        const token = localStorage.getItem("emptoken");
        if (token) {
            axios
                .post("http://localhost:3000/empLogin/empAuth", { token })
                .then((response) => {
                    setempID(response.data.empID);
                })
                .catch((err) => {
                    console.error(err);
                    enqueueSnackbar("Error fetching user ID:", { variant: "error" });
                });
        }
    }, []);

    // Fetch user profile based on empID
    useEffect(() => {
        if (empID) {
            axios.get(`http://localhost:3000/empLogin/${empID}`)
                .then((response) => {
                    const { firstName, lastName, email, phoneNumber } = response.data;
                    setUserProfile({ firstName, lastName, email, phoneNumber, password: "" });
                    setLoading(false);
                })
                .catch((error) => {
                    console.error(error);
                    enqueueSnackbar("Error fetching profile information:", { variant: "error" });
                });
        }
    }, [empID]);

    // Handle input change
    const handleInputChange = (e, field) => {
        setUserProfile((prevProfileInfo) => ({
            ...prevProfileInfo,
            [field]: e.target.value,
        }));
    };

    // Handle save profile
    const handleSaveProfile = async () => {
        const { firstName, lastName, email, phoneNumber, password } = userProfile;

        if (!firstName || !lastName || !email || !phoneNumber) {
            enqueueSnackbar("Please fill in all the fields", { variant: "error" });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            enqueueSnackbar("Please enter a valid email address", { variant: "error" });
            return;
        }

        if (!/^\d{10}$/.test(phoneNumber)) {
            enqueueSnackbar("Please enter a valid 10-digit phone number", { variant: "error" });
            return;
        }

        if (password && (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password))) {
            enqueueSnackbar("Password must be at least 8 characters long and contain at least one digit and one special character", { variant: "error" });
            return;
        }

        try {
            const response = await axios.put(`http://localhost:3000/emps/${empID}`, userProfile);
            console.log("Profile information saved:", response.data);
            enqueueSnackbar("Profile updated successfully.", { variant: "success" });
            navigate("/EmpProfile")
        } catch (error) {
            console.error( error);
            enqueueSnackbar("Error saving profile:", { variant: "error" });
            alert("Failed to save profile.");
        }
    };

    // Handle delete profile
    const handleDeleteProfile = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/emps/${empID}`);
            console.log("Profile deleted:", response.data);
            enqueueSnackbar("Profile deleted successfully", { variant: "success" });
            localStorage.removeItem("emptoken");
            navigate("/EmpRegister");
        } catch (error) {
            console.error( error);
            enqueueSnackbar("Error deleting profile:", { variant: "error" });
            alert("Failed to delete profile.");
        }
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            <StoreNavbar />
            <div className="mt-8 w-full max-w-4xl">
                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                        <input type="image" src="emp.png" alt="image" className="object-cover w-full h-full" />
                    </div>
                    <div className="bg-white shadow-lg rounded-lg w-full p-8 mb-8">
                        <h1 className="text-3xl font-Aboreto font-bold text-primary mb-6 text-center">Edit Profil Details</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary text-white p-4 rounded-lg">
                                <p className="font-semibold">First Name</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <input
                                    type="text"
                                    value={userProfile.firstName || ""}
                                    onChange={(e) => handleInputChange(e, 'firstName')}
                                />
                            </div>

                            <div className="bg-primary text-white p-4 rounded-lg">
                                <p className="font-semibold">Last Name</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <input
                                    type="text"
                                    value={userProfile.lastName || ""}
                                    onChange={(e) => handleInputChange(e, 'lastName')}
                                />
                            </div>
                            <div className="bg-primary text-white p-4 rounded-lg">
                                <p className="font-semibold">Email Address</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <input
                                    type="text"
                                    value={userProfile.email || ""}
                                    onChange={(e) => handleInputChange(e, 'email')}
                                />
                            </div>
                            <div className="bg-primary text-white p-4 rounded-lg">
                                <p className="font-semibold">Phone Number</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <input
                                    type="text"
                                    value={userProfile.phoneNumber || ""}
                                    onChange={(e) => handleInputChange(e, 'phoneNumber')}
                                />
                            </div>
                            <div className="bg-primary text-white p-4 rounded-lg">
                                <p className="font-semibold">Password</p>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <input
                                    type="password"
                                    placeholder="••••••••" // Placeholder to show it's a password
                                    value={userProfile.password} // Password field remains empty
                                    onChange={(e) => handleInputChange(e, 'password')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center space-x-4 mt-8">
                <button
                    className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-primary-dark hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-opacity-50"
                    onClick={handleSaveProfile}
                >
                    SAVE
                </button>
                <button
                    className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                    onClick={handleDeleteProfile}
                >
                    DELETE
                </button>
            </div>

            <StaffFooter />
        </div>
    );
}

export default EditEmpProfile;
