import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";

const EditAuthor = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((err) => {
                console.log(err.response);
            });
        }, [id]);
        
        const handleOnSubmit = (e) => {
            e.preventDefault();
            
            const updatedAuthor = {
                name: name
            }
            
            axios
            .put("http://localhost:8000/api/authors/" + id, updatedAuthor)
            .then((res) => {
                console.log(res.data);
                history.push(`/authors`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
            });
            
        }
        
        if(name==="") {
            return (
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <img src="https://thumbs.gfycat.com/OrdinaryImpeccableIndiancow-max-1mb.gif" alt="one sparkly ring to rule them all loading" className="align-self-center m-3"/>
                    <h3>You found the one ring, but you should really add a new author</h3>
                    <Link to={`/authors/new`}>
                        <h3>Add an author</h3>
                    </Link>
                </div>
            )
        }

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
                <h3>Edit this author:</h3>
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
                        className="col form-control mx-3 " 
                        value={name}/>
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

export default EditAuthor;