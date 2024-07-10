import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import axios from 'axios'

const Expence = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data =>{
    await axios.post('https://moneybackend-figh.onrender.com/expence', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id='amount'{...register("amount", { required: true })} placeholder='Amount' />
      <input id='though' {...register("though", { required: true })} placeholder='ExpenceDetails' />
      {errors.example && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}

export default Expence;
