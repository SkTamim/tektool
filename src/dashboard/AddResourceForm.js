import React, { useState, useRef, useEffect } from "react";
import { Button, MenuItem, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";

import { getResourceData } from "./AddResourceBackend";
import { LoadingButton } from "@mui/lab";

import CustomUploadField from "../components/form/CustomFileUpload";
import toast from "react-hot-toast";



// Alert box for success of failure START ===================
const notify = (isOk) =>
    toast(
        isOk ? (
            <div style={{ textAlign: "center" }}>
                <CheckCircleIcon sx={{ color: "#00C897" }} />
                <h3>Congratulation!!</h3>
                <p>Your resource is successfully submitted.</p>
                <p>
                    <strong>Thank you</strong> for contributing.
                </p>
            </div>
        ) : (
            <div style={{ textAlign: "center" }}>
                <CancelIcon sx={{ color: "#EF0F4F" }} />
                <p>Unfortunately, your resouce is not submitted.</p>
                <p>
                    Please <strong>re-submit.</strong>
                </p>
            </div>
        ),
        {
            position: "top-center",
        }
    );
// Alert box for success of failure END =====================

// Send Button Style  
const useStyles = makeStyles((theme) => ({
    sendButton: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.text,
        "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
}));



const AddResourceForm = () => {
    const classes = useStyles();

    // For custom file input field ======================
    const [image, setImage] = useState(null);
    const [resetImage, setResetImage] = useState(false);

    const getFile = (file) => {
        setImage(file);
    };
    // End ==============================================

    const initialValues = {
        category: "",
        name: "",
        url: "",
        description: "",
    };

    const [formValues, setFormValues] = useState(initialValues);
    const [error, setError] = useState({
        category: false,
        name: false,
        url: false,
    });

    const inputChangeHandler = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
        setError({
            ...error,
            [event.target.name]: false,
        });
    };

    const scrollToError = () => {
        window.scrollTo(-200, 0);
    };

    const [success, setSuccess] = useState(false)
    const formSubmitHandler = (event) => {
        event.preventDefault();

        const categoryErr = formValues.category.trim().length <= 0;
        const nameErr = formValues.name.trim().length <= 0;
        const urlErr = formValues.url.trim().length <= 0;

        if (categoryErr || nameErr || urlErr) {
            scrollToError();
            setError({
                category: categoryErr,
                name: nameErr,
                url: urlErr,
            });
        } else {
            setSuccess(true)
            const finalFormValues = image
                ? {
                    ...formValues,
                    resourceImage: image,
                }
                : formValues;

            setResetImage(false)
            const isSuccess = (isSubmitted) => {
                setSuccess(!isSubmitted)
                resourceSubmitted(isSubmitted);
            }

            getResourceData(finalFormValues, isSuccess)
        }
    };

    // Submit feedback function
    const resourceSubmitted = (isSendSuccess) => {
        setFormValues(initialValues);
        notify(isSendSuccess);
        setImage(null);
        setResetImage(true);
    };
    return (
        <form onSubmit={formSubmitHandler}>
            <TextField
                id='category-select'
                name='category'
                select
                label='Select resource category*'
                value={formValues.category}
                fullWidth
                onChange={inputChangeHandler}
                variant='outlined'
                sx={{ mb: 2, mt: 3 }}
                helperText={error.category && "Please choose a category"}
                error={error.category && true}
            >
                <MenuItem value=''>None</MenuItem>
                <MenuItem value='Free images and videos'>
                    Free images and videos
                </MenuItem>
                <MenuItem value='Free icons'>Free icons</MenuItem>
                <MenuItem value='Free vector graphics'>Free vector graphics</MenuItem>

                {/*
                 Add New category button 
                <div>
                    <Button sx={{ width: "100%" }}>Add a new category</Button>
                </div> */}

            </TextField>
            <TextField
                id='resource-name'
                name='name'
                label='Enter resource name*'
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
                onChange={inputChangeHandler}
                value={formValues.name}
                helperText={error.name && "Please enter the resource name"}
                error={error.name && true}
            />
            <TextField
                id='resource-url'
                name='url'
                label='Enter resource url*'
                variant='outlined'
                fullWidth
                sx={{ mb: 2 }}
                onChange={inputChangeHandler}
                value={formValues.url}
                helperText={error.url && "Please enter the resource url"}
                error={error.url && true}
            />

            <CustomUploadField
                name='resourceImage'
                id='resource-image'
                label='Choose resource image'
                variant='outlined'
                accept='image/*'
                fullWidth
                getFile={getFile}
                resetValue={resetImage}
            />

            <TextField
                id='resource-description'
                name='description'
                label='Enter resource description'
                variant='outlined'
                multiline
                fullWidth
                rows={6}
                sx={{ mb: 2 }}
                onChange={inputChangeHandler}
                value={formValues.description}
            />

            <Stack alignItems='flex-end'>
                <LoadingButton
                    className={classes.sendButton}
                    loadingPosition='end'
                    variant='contained'
                    loading={success}
                    endIcon={<SendIcon />}
                    type='submit'
                    sx={{
                        py: 1,
                        px: 3,
                        fontSize: {
                            sm: "16px",
                            md: "18px",
                        },
                        width: {
                            sm: "max-content",
                            xs: "100%",
                        },
                    }}
                >
                    Submit
                </LoadingButton>
            </Stack>
        </form>
    )
}

export default AddResourceForm