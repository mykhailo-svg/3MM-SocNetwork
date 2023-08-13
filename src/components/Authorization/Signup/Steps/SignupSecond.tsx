import React from 'react';


import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material';
import passwordShownIcon from '../../../../img/password-shown.svg';
const SignupSecond = () => {

    const controlProps = (item: string) => ({

        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    const radioStyles = {
        color: '#A303A0',
        '&.Mui-checked': {
            color: '#A303A0',
        },
    }

    const selectStyle = {
        color: '#A303A0',
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFB7D5',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FFB7D5',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#A303A0',
        }, background: '#FAFDFF'
    }

    return (



        <>

            <div className='signup__birthday-container'>
                <div className="signup__label">Birthday</div>
                <div className='signup__birthday'>

                    <FormControl sx={{ m: 1, flex: 1, margin: 0 }}>
                        <InputLabel sx={{ color: '#FFB7D5' }} id="demo-simple-select-readonly-label">Year</InputLabel>
                        <Select
                            MenuProps={{
                                disableScrollLock: true,
                            }}
                            sx={selectStyle}
                            labelId="demo-simple-select-disabled-label"
                            id="demo-simple-select-disabled"

                            label="Year"

                        >

                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>

                        </Select>

                    </FormControl>
                    <FormControl sx={{ m: 1, flex: 1, margin: 0 }}>
                        <InputLabel sx={{ color: '#FFB7D5' }} id="demo-simple-select-readonly-label">Month</InputLabel>
                        <Select

                            MenuProps={{
                                disableScrollLock: true,
                            }}
                            sx={selectStyle}
                            labelId="demo-simple-select-disabled-label"
                            id="demo-simple-select-disabled"

                            label="Month"

                        >

                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>

                        </Select>

                    </FormControl>
                    <FormControl sx={{ m: 1, flex: 1, margin: 0 }}>
                        <InputLabel sx={{ color: '#FFB7D5' }} id="demo-simple-select-readonly-label">Day</InputLabel>
                        <Select
                            MenuProps={{
                                disableScrollLock: true,
                            }}
                            labelId="demo-simple-select-disabled-label"
                            id="demo-simple-select-disabled"
                            sx={selectStyle}
                            label="Day"

                        >

                            <MenuItem value={10}>Male</MenuItem>
                            <MenuItem value={20}>Female</MenuItem>

                        </Select>

                    </FormControl>
                </div>

                <div className="signup__gender">
                    <RadioGroup sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div className='signup__gender-radio'>

                            <Radio
                                {...controlProps('male')}

                                sx={radioStyles}
                            />
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M19 9a7 7 0 1 0-8 7v2h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-2a7 7 0 0 0 6-7Zm-7 5a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" fill="#FFB7D5" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                        </div>
                        <div className='signup__gender-radio'>
                            <Radio
                                {...controlProps('female')}
                                sx={radioStyles}
                            />
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M20 3.6a1 1 0 0 0-1-.6h-4a1 1 0 1 0 0 2h1.6l-2.4 2.4a7 7 0 1 0 1.4 1.4L18 6.4V8a1 1 0 1 0 2 0V3.6Zm-6.5 12.9a5 5 0 1 1-7.1-7 5 5 0 0 1 7.1 7Z" fill="#FFB7D5" opacity=".6" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                        </div>
                    </RadioGroup>
                </div>

                <div className="signup__password">
                    <div className="signup__mainfields-item">
                        <div className="signup__label">Password</div>
                        <div className='signup__input-wrapper'>
                            <input type="password" className="signup__field-password" placeholder='*********' />
                            <div className='signup__password-toggle'><img src={passwordShownIcon} alt="" /></div>
                        </div>
                    </div>
                </div>

            </div>





        </>





    )
}
export default SignupSecond;