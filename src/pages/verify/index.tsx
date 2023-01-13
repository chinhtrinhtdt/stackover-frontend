import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { authApi } from '../../api';

function Verify() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    useEffect(() => {
        const href = window.location.href;
        const urlSplit = href.split("&");
        if (urlSplit.length > 1) {
            setEmail(urlSplit[0].split("=")[1]);
            setCode(urlSplit[1].split("=")[1]);
        }
    }, []);

    const handleConfirm = () => {
        authApi.postApiVerify({ email, code })
            .then(res => {
                alert(res?.data?.message);
                navigate("/login");
            })
            .catch(err => {
                console.log(err);
                toast.warning(err?.response?.data?.message);
            })
    };

    return (
        <div className='container d-flex align-items-center flex-column mx-auto'>
            <h1 className='text-center m-5'>Verify your account</h1>
            <button className="btn btn-primary w-50" type="button" onClick={handleConfirm}>Verify now</button>
            <ToastContainer />
        </div>
    )
};

export default Verify;
