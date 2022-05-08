import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const location = useLocation();

    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorMassage;

    if (loading || gitLoading) {
        return <Loading></Loading>
    }

    if (error || gitError) {

        errorMassage = <p className='text-danger'>Error: {error?.message} {gitError?.message}</p>
    }

    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    return (
        <>
            <div className='d-flex align-items-center '>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorMassage}
            <div>
                <div className='d-flex'>
                    <button onClick={() => signInWithGoogle()} className='btn btn-success w-10  d-block mx-auto'><FcGoogle></FcGoogle>   Sign in with Google</button>
                    <button onClick={() => signInWithGithub()} className=' mt-2 btn btn-dark w-10   d-block mx-auto'><BsGithub></BsGithub>   Sign in with Github</button>
                </div>
            </div>
        </>
    );
};

export default SocialLogin;