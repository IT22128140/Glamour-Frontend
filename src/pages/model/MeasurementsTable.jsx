import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/Spinner";
import { Link } from "react-router-dom";
import TableView from '../../components/table/TableView';
import EditButton from "../../components/button/EditButton";
import DeleteButton from "../../components/button/DeleteButton";
import ViewButton from "../../components/button/ViewButton";
import AddButton from "../../components/button/AddButton";
import DeleteMeasurement from "./DeleteBodyMeasurement";
import StoreNavbar from "../../components/navbar/staffheader/StoreNavbar";
import StaffFooter from "../../components/footer/stafffooter/StaffFooter";

const MeasurementTable = () => {

    const [measurements, setMeasurements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data1, setdata1] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedMeasurement, setSelectedMeasurement] = useState(null);
    const headers = ['Unique Name', 'Gender', 'Bust Size', 'Under Bust Size', 'Neck Base Size', 'Waist Size', 'Hip Size', 'Shoulder Width Size', 'Top Size', 'Pant Size', 'Operations']

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/measurements')
            .then((response) => {
                setMeasurements(response.data.data);
                const set = response.data.data.map(obj => ({ name: obj.UniqueName, _id: obj._id }));
                setdata1(set);
                setLoading(false);

            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);


    console.log(data1);

    return (
        <div className='w-full h-full bg-fixed bg-no-repeat ' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
            <StoreNavbar />
            <div>
                <h1 className='text-6xl text-center font-Aboreto text-primary font-semibold my-8 alignment-center'>Measurements List</h1>
                {loading ? (
                    <Spinner />
                ) : (

                    <table className='bg-white ml-1 mr-1 font-BreeSerif'>
                        <TableView headers={headers} />
                        <tbody>
                            {measurements.map((measurement, index) => (
                                <tr key={measurement._id} className='h-8'>

                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.UniqueName}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.Gender}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.Bust}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.UnderBust}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.NeckBase}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.Waist}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.Hip}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.ShoulderWidth}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.TopSize}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        {measurement.PantSize}
                                    </td>
                                    <td className='border border-slate-700 rounded-md text-center'>
                                        <div className='flex justify-center gap-x-4 ml-2 mr-2'>
                                            <Link to={`/measurements/view/${measurement._id}`}>
                                                <ViewButton />
                                            </Link>

                                            <DeleteButton
                                                onClick={() => {
                                                    setSelectedMeasurement(measurement);
                                                    setShowDelete(true)
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                )}

                {showDelete && (
                    <DeleteMeasurement
                        id={selectedMeasurement._id}
                        onClose={() => setShowDelete(false)}
                    />
                )}

            </div>
            <div className='h-40'></div>
            <StaffFooter />
        </div>
    );

}

export default MeasurementTable;