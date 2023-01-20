import React from "react";


const DataUser = (props) => {
    const {firstname, lastname, email, password, confirmpassword} = props.data;
    return (
        <div className="results">
            <h2>Your Form Data</h2>
            <p>First name: {firstname}</p>
            <p>Last name: {lastname}</p>
            <p>Email Adress: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password:{confirmpassword} </p>
        </div>

    )
}

export default DataUser;