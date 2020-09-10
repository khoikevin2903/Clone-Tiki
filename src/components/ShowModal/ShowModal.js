import React from 'react';
import './ShowModal.scss';
import LoginForm from '../LoginForm/Login';
import { useDispatch } from 'react-redux';
import { closeShowModal } from './../../reducers/showModal';

function ShowModal(props) {

    const dispatch = useDispatch();

    return (
        <div className="show-Modal">
            <div className="rounded-full h-10 w-10 flex items-center justify-center bg-white"
                id="close"
                onClick={() => dispatch(closeShowModal())}
            >
                <i className="fas fa-times text-3xl opacity-75"></i>
            </div>
            <div className="absolute container w-2/3">
                <LoginForm />
            </div>
        </div>
    );
}

export default ShowModal;