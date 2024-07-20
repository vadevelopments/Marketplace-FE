'use client'

import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useReducer, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Define the initial state
const initialState = {
    type: 'password',
    state: false
};

// Define the interfaces
interface PasswordState {
    type: string;
    state: boolean;
}

interface PasswordAction {
    type: string;
}

// Reducer function
const reducer = (state: PasswordState, action: PasswordAction): PasswordState => {
    switch (action.type) {
        case 'toggle':
            return {
                ...state,
                state: !state.state
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default function Navbar() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { state: showPassword } = state;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        setEmailError(false);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setPasswordError(false);
    };

    const validateForm = () => {
        if (!email) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    
        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    
        return email && password;
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        if (validateForm()) {
            // Submit logic goes here
            console.log("log in form submitted");
        }
    };
    

    const togglePassword = () => {
        dispatch({ type: 'toggle' });
    };

    return (
        <nav 
            style={{
                display: 'flex',
                gap: 1, 
                padding: "10px 20px", 
                justifyContent: "space-between", 
                alignItems: "center" 
            }}
        >
            <Box sx={{ display: "flex", gap: 1 , alignItems: "center"}}>
                <Image
                    alt='Marketplace logo'
                    src='/marketplace_logo.png'
                    width={40}
                    height={40}
                />
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 600 }}>MARKETPLACE</Typography>
            </Box>
            <Box 
                sx={{
                    display: "flex",
                    gap: 1
                }}
            >
                <TextField
                    type='email'
                    name='email'
                    placeholder='Email'
                    size='small'
                    error={emailError}
                    helperText={emailError && "Email is required"}
                    onChange={handleEmailChange}
                    sx={{ maxHeight: 40 }}
                />
                <TextField
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='Password'
                    size='small'
                    error={passwordError}
                    helperText={passwordError && "Password is required"}
                    onChange={handlePasswordChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end" sx={{ cursor: "pointer" }}>
                                { showPassword ? 
                                    <VisibilityIcon onClick={togglePassword}/> : 
                                    <VisibilityOffIcon onClick={togglePassword}/>
                                }
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        "& ::-ms-reveal": {
                            display: "none"
                        },
                        maxHeight: 40
                    }}
                />
                <Button
                    variant='contained'
                    onClick={(e:any) => handleSubmit(e)}
                    sx={{
                        textTransform: 'none',
                        maxHeight: 40
                    }}
                >
                    Submit
                </Button>
            </Box>
        </nav>
    )
}