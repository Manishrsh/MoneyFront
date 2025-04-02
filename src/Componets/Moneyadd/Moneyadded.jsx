import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import axios from 'axios'
import { Toast } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';


const Moneyadd = () => {
  const { register, handleSubmit, watch, formState: { errors } , reset} = useForm();
  const onSubmit = async data =>{

    try {
      await axios.get('https://manishmoneymanage.tech/addmoney', data);
      toast.success('Successfully Added!')
      reset();
    } catch (error) {
      alert("something wrong")
    }
    
  };


 
  return (
    <div id='flexbox'>
      <div><Toaster
  position="top-center"
  reverseOrder={false}
/></div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input id='amount'{...register("amount", { required: true })} placeholder='Amount' />
      <input id='though' {...register("though", { required: true })} placeholder='Though' />
      {errors.example && <span>This field is required</span>}

     
      <input type="submit" />
    </form>
    </div>
  );
}

export default Moneyadd;
