import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import Footer from "../Footer/Footer";

const OrderForm = (props) => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure, you want to order this?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post("http://localhost:5000/orders", data).then((response) => {
          console.log(response);
          if (response.data.insertedId) {
            Swal.fire(
              "Completed",
              "Your purchase has been Completed Successfully!",
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
      }
    });
  };

  return (



    <div className="container ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          value={props.foodId || " "}
          {...register("foodID", { required: true })}
        />

        <input
          hidden
          value={props.foodImage || " "}
          {...register("foodImage", { required: true })}
        />

        <input
          hidden
          value={props.name || " "}
          {...register("name", { required: true })}
        />

        <input
          hidden
          value={props.price || " "}
          {...register("price", { required: true })}
        />

        <input
          hidden
          value="Pending"
          {...register("status", { required: true })}
        />

        <input
          hidden
          value={user.uid || " "}
          {...register("userId", { required: true })}
        />

        <label>Full Name</label>
        <input
          readOnly
          value={user.displayName || " "}
          className="form-control mb-3"
          placeholder="Enter your Full Name"
          {...register("FullName", { required: true })}
        />
        <label>Email Address</label>
        <input
          readOnly
          type="email"
          value={user.email || " "}
          className="form-control mb-3"
          placeholder="Enter your Email Address"
          {...register("email", { required: true })}
        />
        <label>Phone</label>
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter your Phone Number"
          {...register("phone", { required: true })}
        />
        <div className="row mb-3">
          <div className="col">
            <label>Payment Type</label>
            <select className="form-control" {...register("paymentType")}>
              <option value="Gateway">Gateway</option>
              <option value="Cash">Cash</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label>Order Date</label>
            <input
              type="date"
              className="form-control mb-3"
              {...register("OrderDate", { required: true })}
            />
            {errors.DepDate && (
              <span className="text-danger">This field is required!</span>
            )}
          </div>
        </div>
        <textarea
          className="form-control mb-3 w-100"
          placeholder="Message..."
          {...register("message")}
        />

        <input
          className="btn btn-danger  mb-5 w-100"
          type="submit"
          value="Confirm Order"
        />
      </form>
    </div>

  );
};

export default OrderForm;
