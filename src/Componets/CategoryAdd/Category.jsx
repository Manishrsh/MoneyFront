import React from 'react';
import { useForm } from 'react-hook-form';

const Category = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
   
    reset();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg mx-auto" style={{ width: "30rem" }}>
        <div className="card-header text-center bg-primary text-white">
          <h2>Add Category</h2>
        </div>
        <div className="card-body">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column gap-3 align-items-center"
          >
            {/* Category Name Input */}
            <div className="w-75">
              <input
                type="text"
                placeholder="Category Name"
                className={`form-control ${errors.categoryName ? "is-invalid" : ""}`}
                {...register("categoryName", { required: "Category Name is required" })}
              />
              {errors.categoryName && (
                <div className="invalid-feedback">{errors.categoryName.message}</div>
              )}
            </div>

            {/* Category Description Textarea */}
            <div className="w-75">
              <textarea
                placeholder="Category Description"
                className={`form-control ${errors.categoryDescription ? "is-invalid" : ""}`}
                rows="3"
                {...register("categoryDescription", {
                  required: "Category Description is required",
                })}
              ></textarea>
              {errors.categoryDescription && (
                <div className="invalid-feedback">{errors.categoryDescription.message}</div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary px-4 py-2 mt-3">
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;
