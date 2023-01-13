import { useState } from 'react';
import { authApi } from '../../api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Verify() {
    const navigate = useNavigate();
    const [code, setCode] = useState<string>('')

    const handleConfirm = () => {
        const email = localStorage.getItem('email');
        authApi.postApiVerify({ email, code })
            .then(res => {
                toast(res.data.message);
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
                toast.warning(err.response?.data?.message);
            })
    };

    return (
        <div className='container d-flex align-items-center flex-column'>
            <h1 className='text-center m-5'>Verify account</h1>
            <div className="input-group m-3 w-50">
                <input type="text" className="form-control" name='code' id='code' onChange={(e) => setCode(e.target.value.trim())} placeholder="Enter your code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={handleConfirm}>Button</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Verify