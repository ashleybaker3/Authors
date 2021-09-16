import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const NewAuthor = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
    const newAuthor = {
        name
    };

    axios
        .post("http://localhost:8000/api/authors", newAuthor)
        .then((res) => {
            console.log(res.data);
            history.push(`/authors`);
        })
        .catch((err) => {
            setErrors(err.response.data.errors);
        });
    };

    return (
        <div className="d-flex flex-column">
            <div className="row m-3">
                <h1>Favorite Authors</h1>
            </div>
            <div className="row mb-3 mx-3">
                <Link to={`/authors`}>
                    <h3>Home</h3>
                </Link>
            </div>
            <div className="row mb-3 mx-3">
                <h3>Add a new author:</h3>
            </div>
            <form onSubmit={(e) => {
                handleOnSubmit(e);
            }}
            className="border border-dark border-2 m-3 w-50 container">
                <div className="row">
                    <label className="form-label mx-3">Name</label>
                    {errors?.name && (
                        <span className="text-danger">
                        {" "}
                        {errors?.name?.message}
                        </span>
                    )}
                    <input 
                        onChange={(e)=> {
                            setName(e.target.value);
                        }}
                        type="text"     
                        className="col form-control mx-3 " />
                </div>
                <div className="row d-flex justify-content-around">
                    <Link to={`/authors`} className="col-auto">
                        <button className="m-3 border-2 border-dark bg-info text-white">Cancel</button>
                    </Link>
                    <input type="submit" value="Submit" className="col-auto my-3 border-dark border-2 bg-info text-white"/>
                </div>
            </form>
        </div>
    )
}

export default NewAuthor;