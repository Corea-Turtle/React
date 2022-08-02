import React from "react";
import { useRef } from "react";
import ReactDOM from "react-dom";
import { appendErrors, useForm } from "react-hook-form";

import "./styles.css";

function Validation() {

  const {register,watch, handleSubmit,formState:{errors}} = useForm();
  console.log(watch("email"))

  const onSubmit = (data) => {
    console.log(data);
  };

const password = useRef();
password.current = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        name="email"
        type="email"
        {...register('email',{required:true,pattern:/^\S+@\S+$/i})}
      />
      {errors.email &&<p>This email field is required</p>}
      <label>Name</label>
      <input
        name="name"
        type="text"
        {...register('name',{required:true,maxLength:10})}
      />
      {errors.name && errors.name.type === "required" && <p>This field is required</p>}
      
      {errors.name && errors.name.type === "maxlength" && <p>Your Input exceeds field's maxLength : 10</p>}
      <label>Password</label>
      <input
        name="password"
        type="password"
        {...register('password',{required:true,minLength:8})}
      />
      {errors.name && errors.name.type === "required" && <p>This field is required</p>}
      {errors.name && errors.name.type === "minLength" && <p>Your Input required field's minLength : 8</p>}
      <label>Password confirm</label>
      <input
        name="password_confirm"
        type="password"
        {...register('password',{required:true,pattern:/^\S+@\S+$/i})}
      />
      <input type="submit" value="submit"/>
    </form>
  );
}
export default Validation;
