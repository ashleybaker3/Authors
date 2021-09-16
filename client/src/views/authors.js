import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Authors = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data.sort((a,b)=>a.name.localeCompare(b.name)));
                })
            .catch((err) => {
                console.log(err.response);
                });
    }, []);

    const handleDelete = (delId) => {
        axios
            .delete("http://localhost:8000/api/authors/" + delId)
            .then((res) => {
                const filteredAuthors = authors.filter((author) => {
                return author._id !== delId;
                });
                setAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log(err.response);
            });
        };

    return (
        <div className="container">
            <div className="d-flex flex-column">
                <div className="row m-3">
                    <h1>Favorite Authors</h1>
                </div>
                <div className="row mb-3 mx-3">
                    <Link to={`/authors/new`}>
                        <h3>Add an author</h3>
                    </Link>
                </div>
                <div className="row mb-3 mx-3">
                    <h3>We have quotes by:</h3>
                </div>
                <div className="row mb-3 mx-3">
                    <div>
                        <table className="table table-striped border border-dark border-2 w-50">
                            <thead>
                                <tr>
                                    <th scope="col">Author</th>
                                    <th scope="col">Actions Available</th>
                                </tr>
                            </thead>
                            <tbody>
                                {authors.map((author) => {
                                    return (
                                        <tr key={author._id}>
                                            <td>{author.name}</td>
                                            <td>
                                                <Link to={`/authors/${author._id}`}>
                                                    <button className="mx-2 border-dark border-2 bg-info text-white">Edit</button>
                                                </Link>
                                                    <button onClick={(e) => {
                                                        handleDelete(author._id);
                                                        }} className="border-dark border-2 bg-danger text-white">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authors;