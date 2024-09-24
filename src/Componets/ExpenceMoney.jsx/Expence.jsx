import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import axios from 'axios'

const Expence = () => {
  const { register, handleSubmit, watch, formState: { errors } , reset} = useForm();
  const onSubmit = async data =>{
    try {
      await axios.post('https://moneymanagebackend.scalestore.shop/expence', data);
      reset();
    } catch (error) {
      alert("something went wrong")
    }
  };

  return (
    <div className='d-flex align-items-center flex-row justify-content-center'>
    <form onSubmit={handleSubmit(onSubmit)} >
      <input id='amount'{...register("amount", { required: true })} placeholder='Amount' />
      <input id='though' {...register("though", { required: true })} placeholder='ExpenceDetails' />
      {errors.example && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </div>
  );
}

export default Expence;
