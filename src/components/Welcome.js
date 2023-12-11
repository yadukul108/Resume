import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
const Welcome = () => {
    useEffect(() => {
        const isChrome = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return userAgent.indexOf('chrome') > -1;
          };
          
          if (isChrome()) {
            toast.error('This website is responsive in firefox only.');
          } 
          
    //   toast.success('Please open in firefox..');
    }, []);
  
    return (
      <div>
        
        <ToastContainer limit={1} />
      </div>
    );
  };
  
  export default Welcome;