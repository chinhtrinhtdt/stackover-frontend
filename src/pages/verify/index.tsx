import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { authApi } from '../../api';

function Verify() {
    const navigate = useNavigate();

    const handleConfirm = () => {
        const href = window.location.href;
        const email = href.substring(href.indexOf("=") + 1, href.lastIndexOf("&"));
        const code = href.substring(href.lastIndexOf("=") + 1);

        authApi.postApiVerify({ email, code })
            .then(res => {
                toast.success(res?.data?.message);
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
}

export default Verify