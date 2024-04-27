import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useFetch from '../../util/useFetch';

export default function HttpDemo5() {
    // const [comments, setcomments] = useState([]);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/comments")
    //         .then(response => response.json())
    //         .then(result => setcomments(result));
    // }, []);
    const comments = useFetch("https://jsonplaceholder.typicode.com/comments")

    return (
        <div>
            <table className='table table-bordered table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((comment, ind) => {
                        return (
                            <tr>
                                <td>{comment.id}</td>
                                <td>{comment.name}</td>
                                <td>{comment.email}</td>
                                <td>{comment.body}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );

}
