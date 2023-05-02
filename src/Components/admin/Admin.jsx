import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Admin = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
          const decode = jwt_decode(token);
            if (!((decode.exp*1000) > Date.now()) && !(decode.permission == 1)) {
              navigate('/')
            } 
        }else{
          localStorage.removeItem('token');
          navigate('/')
        }
      }, [])
      
  return (
    <div>
      Admin
    </div>
  )
}

export default Admin
