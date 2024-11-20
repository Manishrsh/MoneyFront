import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import axios from 'axios'


const Moneyadd = () => {
  const { register, handleSubmit, watch, formState: { errors } , reset} = useForm();
  const onSubmit = async data =>{

    try {
      await axios.post('https://api.manishmoneymanage.tech/addmoney', data);
      reset();
    } catch (error) {
      alert("something wrong")
    }
    
  };
  return (
    <div id='flexbox'>
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
