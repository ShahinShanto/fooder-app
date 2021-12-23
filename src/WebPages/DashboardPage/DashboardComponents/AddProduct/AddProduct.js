import React from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/products", data).then((response) => {
      console.log(response);
      if (response.data.insertedId) {
        Swal.fire(
          "Completed",
          "Your Have Added a Car Successfully!",
          "success"
        );
        reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
  };

  return (
    <div className="container">
      <div>
        <h1 className="pt-4 pb-2">Add a new Product</h1>
      </div>
      <div className="card border-0 p-5 border-shadow mb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            hidden
            value="0"
            {...register("review", { required: true })}
          />

          <input hidden value="0" {...register("rating", { required: true })} />

          <label>Enter Food Name</label>
          <input
            className="form-control mb-3"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
            placeholder="Food name"
          />
          {errors.name?.type === "required" && "package name is required"}

          <label>Image URL</label>
          <input
            className="form-control mb-3"
            {...register("img", { required: true })}
            placeholder="image url..."
          />
          {errors.img?.type === "required" && "image url... is required"}

          <label>Price</label>
          <input
            className="form-control mb-3"
            placeholder="price"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && "price is required"}

          <label>Description</label>
          <textarea
            className="form-control w-100 mb-5"
            placeholder="Food Description..."
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" &&
            "Bike description is required"}


          <input
            className="btn bg-danger text-white rounded py-2 px-4 mb-2 fw-bold"
            type="submit"
            value="Add Now"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
