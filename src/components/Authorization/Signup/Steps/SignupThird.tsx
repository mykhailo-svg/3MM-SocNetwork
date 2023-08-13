import React from 'react';

import emptyPhoto from '../../../../img/empty_avatar.svg';
import Button from '@mui/material/Button';
const SignupThird = () => {


    const filePickerStyle = {

        background: '#FFB7D5',
        boxShadow: 'none',
        fontFamily: 'Nunito',
        fontSize: '20px',
        fontWeight: 700,
        borderRadius: 'unset',
        minWidth: '201px',
        ":hover": {
            boxShadow: 'none',
            background: '#A303A0',
        }

    }

    return (



        <>

            <div className="signup__pick-photo">
                <div className="signup__photo-previev">
                    <img src={emptyPhoto} alt="" />
                </div>

                <Button
                    sx={filePickerStyle}
                    variant="contained"
                    component="label"
                >
                    Pick Photo
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </div>





        </>





    )
}
export default SignupThird;