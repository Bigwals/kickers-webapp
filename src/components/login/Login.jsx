// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import "./Login.css";
// const ApiURl = 'https://backend.kickers.mx/api/superadmin/login'
// import { Button } from '@mui/material';
// import Header from "../../components/Navbar/ResponsiveNavBar"
// import Footer from "../Footer/Footer"
// import axios from 'axios';
// import { AsyncStorage } from 'AsyncStorage';

// const Login = (props) => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [emailError, setEmailError] = useState('')
//   const [passwordError, setPasswordError] = useState('')
// const payload = {
//   email:email,
//   password:password
// }
//   const navigate = useNavigate()

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(ApiURl, {...payload});

//       if (response.status === 200) {
//         const { accessToken, user } = response.data;
//         console.log("asdasdasdsdasd",response.data)
//         AsyncStorage.setItem('accessToken', accessToken);
//         AsyncStorage.setItem('userData', JSON.stringify(user));
//       } else {
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div className='mainContainer' >
//       <div className='titleContainer'>
//         <div>Login</div>
//       </div>
//       <br />
//       <div className='inputContainer'>
//         <input
//           value={email}
//           placeholder="Enter your email here"
//           onChange={(ev) => setEmail(ev.target.value)}
//           className={'inputBox'}
//         />
//         <label className="errorLabel">{emailError}</label>
//       </div>
//       <br />
//       <div className={'inputContainer'}>
//         <input
//         type='password'
//           value={password}
//           placeholder="Enter your password here"
//           onChange={(ev) => setPassword(ev.target.value)}
//           className={'inputBox'}
//         />
//         <label className="errorLabel">{passwordError}</label>
//       </div>
//       <br />
//       <div className={'inputContainer'}>
//         <Button onClick={handleLogin} style={{backgroundColor: "#408639",}} variant="contained">Login</Button>
        
//       </div>
//       {/* <div style={{height:'60vh'}}> <AdminHome/></div> */}
     
//     </div>
//     <Footer/>
//     </div>
//   )
// }

// export default Login
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/Navbar/ResponsiveNavBar";
import Footer from "../Footer/Footer";
import "./Login.css";

const ApiURl = 'https://backend.kickers.mx/api/superadmin/login';

const Login = () => {
  const [loading, setLoading] = useState(false); // Add loading state

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateFields = () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleLogin = async () => {
    if (!validateFields()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true); // Set loading to true

    const payload = { email, password };

    try {
      const response = await axios.post(ApiURl, payload);

      if (response.status === 200) {
        const { accessToken, user } = response.data.data;
      
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('userData', JSON.stringify(user));
        toast.success('Login successful!');
         navigate('/dashboard');
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
      toast.error(`Error logging in: ${error.response ? error.response.data.message : error.message}`);
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <div>
      <Header />
      <div className='mainContainer'>
        <div className='titleContainer'>
          <div>Login</div>
        </div>
        <br />
        <div className='inputContainer'>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            type='password'
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
        <Button
            onClick={handleLogin}
            style={{ backgroundColor: "#408639" ,color:'white'}}
            variant="contained"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Loading...' : 'Login'} {/* Update button text */}
          </Button>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Login;
