import React from "react";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import "./styles.css";

function Validation() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  console.log(watch("email"));

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        name="email"
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {
        errors.email && <p>This emalil filed is required</p>
      }
      <label>Name</label>
      <input
        name="name"
        type="text"
        {...register("name", { required: true, maxLength: 10 })}
      />
      {errors.name && errors.name.type === "required" && <p>This fiield is required</p>}
      {errors.name && errors.name.type === "maxLength" && <p>Your input execeed maxLength</p>}
      <label>Password</label>
      <input
        name="password"
        type="password"
        {...register("password", { required: true, minLength: 8 })}
      />
      {errors.password && errors.password.type === "required" && <p>This fiield is required</p>}
      {errors.password && errors.password.type === "minLength" && <p>Your input execeed minLength</p>}
      <label>Password confirm</label>
      <input
        name="password_confirm"
        type="password"
        {...register("password_confirm", {
          required: true, validate: (value) => value === password.current })}
      />
      {
        errors.password_confirm && errors.password_confirm.type === "required" && <p>This fiield is required</p>
      }
      {errors.password_confirm && errors.password_confirm.type === "validate" && <p>The passwords do not macth</p>}
      <input type="submit" value="SUBMIT" />
    </form>
  );
}

export default Validation;