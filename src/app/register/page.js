'use client'
import {useState} from "react";
import {TextField,Stack} from'@mui/material'


export default function Register() {

    const [state, setState] = useState({
        email: "", 
        password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]:value
        })
    }

    return (
        <Stack>
            width="500px"
            spacing={2} // 1=8px

            <TextField
              onChange={handleChange} 
              name="email" 
              value={state.email} 
              type="text" 
              placeholder="email" 
            />

            <TextField
              name="password" 
              onChange={handleChange} 
              type="password" 
              placeholder="123456" 
            />
            
            <button>Register</button>

        </Stack>
    )
}