import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="add-service">
            <h2>Add a service</h2>
            {/* copy from react hook form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder='Description' />
                <input type="number" {...register("price")} placeholder="price"/>
                <input {...register("img")} placeholder="img url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;