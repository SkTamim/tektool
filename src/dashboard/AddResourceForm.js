import React, { useState, useEffect } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, ListSubheader, MenuItem, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";

import { getResourceData } from "./AddResourceBackend";
import { LoadingButton } from "@mui/lab";

import CustomUploadField from "../components/form/CustomFileUpload";
import toast from "react-hot-toast";


import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase/FirebaseConfig";

import ButtonSecondary from "../components/UI/button/ButtonSecondary";



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

    const [success, setSuccess] = useState(false);
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
            setSuccess(true);
            let encodedName = formValues.name.replace(/ [-]|[-] | [—]|[—] /gi, '');

            encodedName = encodedName.replace(/ /g, '-').toLowerCase();
            const finalFormValues = image
                ? {
                    ...formValues,
                    name: encodedName,
                    resourceImage: image,
                }
                : {
                    ...formValues,
                    name: encodedName
                };

            setResetImage(false);
            const isSuccess = (isSubmitted) => {
                setSuccess(!isSubmitted);
                resourceSubmitted(isSubmitted);
            };

            getResourceData(finalFormValues, isSuccess);
        }
    };

    // Submit feedback function
    const resourceSubmitted = (isSendSuccess) => {
        setFormValues(initialValues);
        notify(isSendSuccess);
        setImage(null);
        setResetImage(true);

        // Submit button loading revart 
        turnBtnEnable(isSendSuccess);
    };

    function turnBtnEnable(isTrue) {
        if (isTrue) return;
        setSuccess(false);
    }



    // Getting resource data for Select Box
    const [resourcesData, setReourcesData] = useState([]);

    async function getData() {
        const querySnapshot = await getDocs(collection(database, "resources"));
        let groupsArr = [];
        querySnapshot.forEach((doc) => {
            let group = {};
            group[doc.id] = doc.data().categories;
            groupsArr.push(group);
        });
        setReourcesData(groupsArr);
    }

    useEffect(() => {
        getData();
    }, []);

    // Forming array of list elements for select box
    const [mainResultState, setMainResultState] = useState([]);

    useEffect(() => {
        if (mainResultState.length < 1) {
            updateList(resourcesData);
        }
    }, [resourcesData]);

    const updateList = (listData) => {
        let newData = listData.map((item, index) => {
            const objKey = Object.keys(item)[0];
            let arr = [];
            arr.push(<ListSubheader className="list-category" key={objKey}>
                {objKey.replace(/-/g, ' ')}
            </ListSubheader>);
            item[objKey].forEach((elem) => {
                arr.push(
                    <MenuItem sx={{ textTransform: 'capitalize' }} key={elem} value={`${objKey}/${elem}`}>
                        {elem.replace(/-/g, ' ')}
                    </MenuItem>
                );
            });
            arr.push(<Button key={"add btn of " + objKey} sx={{ width: "100%" }} onClick={() => handleSubCagegoryOpen(index, objKey)}>
                Add a new sub-category</Button>);
            return arr;
        });
        setMainResultState(newData);
    };


    // Add new Sub-Category modal and creation
    const [subCategoryOpen, setSubCategoryOpen] = useState(false);
    const [subCategory, setSubCategory] = useState('');
    const [subCategoryIsValid, setSubCategoryIsValid] = useState(true);

    const [subCategoryIndex, setSubCategoryIndex] = useState();
    const [categoryNameOfNewSubCategory, setCategoryNameOfNewSubCategory] = useState();

    const handleSubCagegoryOpen = (index, objKey) => {
        setSubCategoryOpen(true);
        setSubCategoryIndex(index);
        setCategoryNameOfNewSubCategory(objKey);
    };

    const handleSubCagegoryClose = () => {
        setSubCategoryOpen(false);
    };

    const subCategoryChangeHandler = (e) => {
        setSubCategory(e.target.value);
        if (subCategory.trim().length < 1) {
            setSubCategoryIsValid(false);
        } else {
            setSubCategoryIsValid(true);
        }
    };

    const handleSubCategory = () => {
        if (subCategory.trim().length < 1) {
            setCategoryIsValid(false);
        } else {
            let subCategoryName = subCategory.replace(/ /g, "-").toLocaleLowerCase();

            let listArr = mainResultState[subCategoryIndex];
            listArr.splice(listArr.length - 1, 0,
                <MenuItem sx={{ textTransform: 'capitalize' }} key={subCategoryName} value={`${categoryNameOfNewSubCategory}/${subCategoryName}`}>
                    {subCategoryName.replace(/-/g, ' ')}
                </MenuItem>);

            handleSubCagegoryClose();
        }
    };
    // End Add new Sub-Category and creation ================


    // Add new Category modal and creation
    const [CategoryOpen, setCategoryOpen] = useState(false);
    const [category, setCategory] = useState('');
    const [categoryIsValid, setCategoryIsValid] = useState(true);

    const handleCagegoryOpen = () => {
        setCategoryOpen(true);
    };

    const handleCagegoryClose = () => {
        setCategoryOpen(false);
    };

    const categoryChangeHandler = (e) => {
        setCategory(e.target.value);
        if (category.trim().length < 1) {
            setCategoryIsValid(false);
        } else {
            setCategoryIsValid(true);
        }
    };

    const handleCategory = () => {
        if (category.trim().length < 1) {
            setCategoryIsValid(false);
        } else {
            let categoryName = category.replace(/ /g, "-").toLocaleLowerCase();
            let newCategoryArray = [];
            newCategoryArray.push(
                <ListSubheader className="list-category" key={categoryName}>
                    {categoryName.replace(/-/g, ' ')}
                </ListSubheader>);

            newCategoryArray.push(
                <Button key={"add btn of " + categoryName} sx={{ width: "100%" }} onClick={() => handleSubCagegoryOpen(mainResultState.length, categoryName)}>
                    Add a new sub-category</Button>);

            setMainResultState(prevState => [...prevState, newCategoryArray]);

            handleCagegoryClose();
        }
    };
    // End Add new Category modal and creation ==============

    return (
        <>
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

                    InputProps={{
                        endAdornment: (
                            <React.Fragment>
                                {mainResultState.length < 1 ? <CircularProgress color="inherit" size={20} sx={{ mr: 3 }} /> : null}
                            </React.Fragment>
                        ),
                    }}
                >
                    {mainResultState.length < 1 ? <MenuItem value=''>Loading...</MenuItem> : mainResultState.map(item => item.map(el => el))}

                    {/* Add New category button  */}
                    <div>
                        <ButtonSecondary sx={{ width: "100%", mt: 2 }}
                            onClick={handleCagegoryOpen}>
                            Add a new category
                        </ButtonSecondary>
                    </div>

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
                        {success ? "Submitting..." : "Submit"}
                    </LoadingButton>
                </Stack>
            </form>

            {/* Cagegory Modal */}
            <Dialog open={CategoryOpen} onClose={handleCagegoryClose} fullWidth={true}
            >
                <DialogTitle>Add a new Category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="category"
                        label="Category Name*"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={categoryChangeHandler}
                        helperText={!categoryIsValid && "Please enter a valid category name"}
                        error={!categoryIsValid && true}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCagegoryClose}>Close</Button>
                    <ButtonSecondary onClick={handleCategory}>Create</ButtonSecondary>
                </DialogActions>
            </Dialog>


            {/* Sub Cagegory Modal */}
            <Dialog open={subCategoryOpen} onClose={handleSubCagegoryClose} fullWidth={true}
            >
                <DialogTitle>Add a new Sub-Category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="sub-category"
                        label="Sub-Category Name*"
                        type="text"
                        fullWidth
                        variant="outlined"
                        onChange={subCategoryChangeHandler}
                        helperText={!subCategoryIsValid && "Please enter a valid sub-category name"}
                        error={!subCategoryIsValid && true}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubCagegoryClose}>Close</Button>
                    <ButtonSecondary onClick={handleSubCategory}>Create</ButtonSecondary>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddResourceForm;