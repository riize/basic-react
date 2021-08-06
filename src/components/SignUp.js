import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function Signup() {

    const classes = useStyles();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <TextField
                {...register("firstName", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i
                })}
                label="First Name" variant="outlined" />
            {errors?.firstName?.type === "required" && <p>This field is required</p>}
            {errors?.firstName?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.firstName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            <TextField {...register("lastName", { pattern: /^[A-Za-z]+$/i })} label="Last Name" variant="outlined" />
            {errors?.lastName?.type === "pattern" && (
                <p>Alphabetical characters only</p>
            )}
            <TextField {...register("age", { min: 18, max: 99 })} label="Age" variant="outlined" />
            {errors.age && (
                <p>You Must be older then 18 and younger then 99 years old</p>
            )}
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
}

export default Signup;
