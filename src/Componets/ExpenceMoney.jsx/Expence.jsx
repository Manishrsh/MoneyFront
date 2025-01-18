import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';
import axios from 'axios'

const Expence = () => {
  const { register, handleSubmit, watch, formState: { errors } , reset} = useForm();
  const onSubmit = async data =>{
    try {
      console.log(data);
      await axios.post('https://moneyapi.manishmoneymanage.tech/expence', data);
      reset();
    } catch (error) {
      alert("something went wrong")
    }
  };
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get('https://moneyapi.manishmoneymanage.tech/category');
          setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCategory();
  },[]);

  const [category, setCategory] = useState([]);

  return (
    <div className='d-flex align-items-center flex-row justify-content-center'>
    <form onSubmit={handleSubmit(onSubmit)} >
      <input id='amount'{...register("amount", { required: true })} placeholder='Amount' />
      <input id='though' {...register("though", { required: true })} placeholder='ExpenceDetails' />
      {errors.example && <span>This field is required</span>}
      <select id='category' {...register("categoryId", { required: true })} className='form-select mb-3' aria-label='Default select example'>
        {category.map((item, index) => (
          <option key={index} value={item._id}>{item.category}</option>
        ))}
      </select>
      <input type="submit" />
    </form>
    </div>
  );
}

export default Expence;
