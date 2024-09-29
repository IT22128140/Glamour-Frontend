import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitButton from '../../components/button/SubmitButton';
import { enqueueSnackbar } from "notistack";
import Navbar from "../../components/navbar/CustomerNavbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import BackButton from '../../components/button/BackButton.jsx';

const EditMeasurement = () => {
    const [UniqueName, setUniqueName] = useState('');
    const [Gender, setGender] = useState('');
    const [Bust, setBust] = useState('');
    const [UnderBust, setUnderBust] = useState('');
    const [NeckBase, setNeckBase] = useState('');
    const [Waist, setWaist] = useState('');
    const [Hip, setHip] = useState('');
    const [ShoulderWidth, setShoulderWidth] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:3000/measurements/${id}`)
            .then((response) => {
                setUniqueName(response.data.UniqueName);
                setGender(response.data.Gender);
                setBust(response.data.Bust);
                setUnderBust(response.data.UnderBust);
                setNeckBase(response.data.NeckBase);
                setWaist(response.data.Waist);
                setHip(response.data.Hip);
                setShoulderWidth(response.data.ShoulderWidth);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                enqueueSnackbar("An error happened", { variant: "error" });
                console.log(error);
            })
    }, [])

    const handleEditMeasurement = () => {
        const data = {
            UniqueName,
            Gender,
            Bust,
            UnderBust,
            NeckBase,
            Waist,
            Hip,
            ShoulderWidth,
        }
        setLoading(true);
        axios.put(`http://localhost:3000/measurements/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar("Measurement updated", { variant: "success" });
                navigate('/cusProfile');
            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar("Error updating measurement", { variant: "error" });
                console.log(error);
            })
    };

    return(
        <div className='w-full h-full bg-fixed bg-no-repeat' style={{ backgroundPosition: 'top right', backgroundSize: 'cover' }}>
          <Navbar/>
          <BackButton/>
      {loading ? <Spinner /> : ''}

       <div className="bg-secondary  rounded-xl w-[600px] p-8 mx-auto mt-20 font-BreeSerif">
       <h1 className='text-3xl text-center my-4 font-BreeSerif'>Edit Measurement Details</h1>

       <div className="flex w-[80%] justify-between mb-2">
        <label className='text-ternary'>Measurement Name</label>
       </div>
       <div> 
          <input
            type='text'
            placeholder='Enter Unique name for your model'
            name='UniqueName'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={UniqueName}
            onChange={(e) => setUniqueName(e.target.value)}
            validation={{ required: 'Unique Name is required' }}
            // readOnly
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
        <label className='text-ternary'>Gender</label>
       </div>
       <div> 
          <input
            type='text'
            placeholder='Enter your Gender'
            name='Gender'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            validation={{ required: 'Gender is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
           <label className='text-ternary'>Bust Size</label>
          </div>
          <div>
          <input
            type='text'
            placeholder='Enter Bust Size'
            name='Bust'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Bust}
            onChange={(e) => setBust(e.target.value)}
            validation={{ required: 'Bust Size is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Under Bust Size</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Under Bust Size'
            name='UnderBust'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={UnderBust}
            onChange={(e) => setUnderBust(e.target.value)}
            validation={{ required: 'Under Bust Size is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Neck Base Size</label>
          </div>
          <div>  
          <input
            type='text'
            placeholder='Enter Neck Base Size'
            name='NeckBase'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={NeckBase}
            onChange={(e) => setNeckBase(e.target.value)}
            validation={{ required: 'Neck Base is required' }}
          />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Waist Size</label>
          </div>
          <div>
           <input
            type='text'
            placeholder='Enter Waist Size'
            name='Waist'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Waist}
            onChange={(e) => setWaist(e.target.value)}
            validation={{ required: 'Waist Size is required' }}
           />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
            <label className='text-ternary'>Hip Size</label>
          </div>
          <div>
           <input
            type='text'
            placeholder='Enter Hip Size'
            name='Hip'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={Hip}
            onChange={(e) => setHip(e.target.value)}
            validation={{ required: 'Hip Size is required' }}
           />
          </div>

          <div className="flex w-[80%] justify-between mb-2">
             <label className='text-ternary'>Shoulder Width Size</label>
          </div>
          <div>   
          <input
            type='text'
            placeholder='Enter Shoulder Width SIze'
            name='ShoulderWidth'
            className='h-11 w-[80%] p-2 border-gray-200 rounded-md border-2'
            value={ShoulderWidth}
            onChange={(e) => setShoulderWidth(e.target.value)}
            validation={{ required: 'Shoulder Width Size is required' }}
          />
          </div>
        
          <center className="mt-3" onClick={handleEditMeasurement}><SubmitButton/></center>
          </div>
          <Footer/>
          </div>
    )
}

export default EditMeasurement;