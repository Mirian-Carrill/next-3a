'use client'
import {useState} from "react";
import {TextField} from'@mui/material';
import {stack} from'@mui/material';
import Button from '@mui/material';
import {login} from "../../services/firebase/auth";
import "./login.css"

export default function login (){ 

    const [state, setState] = useState({
        email: "", 
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]:value
        })
    
    const handleChange =(event) => {
        const {name,value} =event.target;
        setState({
            ...state,
            [name]:value
        })
    }
    const onlogin =()=>{
        const{ email,password} =state;
        login(email,password)
    }
   
  }
}