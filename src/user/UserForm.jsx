import React from 'react'

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    
    const handleInputs = (e) => {
        console.log(e.target.value, e.target.name);
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }
    return (
        <form >
            <div className='inputLabel'>
                <label className='label'>First name : </label>
                <input className="input" onChange={ handleInputs } type="text"  name= "firstname"  />
            </div>
            <div className='inputLabel'>
                <label className='label'>Last name : </label>
                <input className="input" onChange={handleInputs } type="text"  name= "lastname"  />
            </div>
            <div className='inputLabel'>
                <label className='label'>Email Adress: </label>
                <input className="input" onChange={handleInputs } type="text"  name= "email"  />
            </div>
            <div className='inputLabel'>
                <label className='label' >Password : </label>
                <input className="input" onChange={handleInputs} type="text" name= "password"  />
            </div>
            <div className='inputLabel'>
                <label className='label'>Confirm Password : </label>
                <input className="input" onChange={handleInputs } type="text" name= "confirmpassword"  />
            </div>

        </form>
    
    )
}

export default UserForm;