import React, { useState } from 'react'

export default function FormDemo1() {
    const [user, setUser] = useState({ fname: "sachin", lname: "tendulkar" });
    const [errorMsg, setErrorMsg] = useState({ fnameMsg: "", lnameMsg: "" });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(user);
    };

    const validateMyField = (e)=>{
        if (!e.target.value) {
            setErrorMsg({ ...errorMsg, fnameMsg: "Fname is required" })
        } else if (e.target.value.length < 5) {
            setErrorMsg({ ...errorMsg, fnameMsg: "Fname should be min 5 chars" })
        } else {
            setErrorMsg({ ...errorMsg, fnameMsg: "" })
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                First Name:
                <input
                    name="fname"
                    value={user.fname}
                    onChange={(e) => {
                        setUser({ ...user, fname: e.target.value })
                        validateMyField(e);
                    }
                    }
                />
                <span className='text-danger'>{errorMsg.fnameMsg}</span>
                <br />
                Last Name:
                <input
                    name="lname"
                    value={user.lname}
                    onChange={(e) => setUser({ ...user, lname: e.target.value })}
                />

                <br />
                <br />
                state data: {user.fname + " " + user.lname}
                <button>submit</button>
            </form>
        </>
    );
}
