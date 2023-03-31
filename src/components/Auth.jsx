import React from 'react';
import { Link } from "react-router-dom"
function Auth() {
  return (
    <div className="bg-green-600 h-screen">
      <div className='flex flex-col items-center justify-center h-full'>
        <p className="text-2xl font-bold text-white mb-10" 
        style={{fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '26.6667px',
        lineHeight: '32px'
    }}
        >Join our community!</p>
        <div className="flex flex-col space-y-4">
          <div className="relative rounded-md cursor-pointer hover:bg-black hover:text-green-600 transition-colors">
            <Link to='/signUp'>
            <p className="absolute text-xs font-medium text-center text-white left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">Create an account</p>
            </Link>

            <div className="w-64 h-11 border rounded-lg border-white"/>
          </div>
          <div className="relative rounded-md cursor-pointer hover:bg-black hover:text-green-600 transition-colors">
            <Link to='/home'>
            <p className="absolute text-xs font-medium text-center text-white left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 ">Connect Wallet</p>
            </Link>

            <div className="w-64 h-11 border rounded-lg border-white"/>
          </div>
          
        </div>
        <div className="flex items-center mt-4">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-white" id="checkbox" />
          <label htmlFor="checkbox" className="ml-2 text-xs text-white">By clicking here, I state that I have read and understood<br />the Terms and Conditions & Privacy Policy.</label>
        </div>
        <div className="flex items-center justify-center mt-8">
        <hr className="border-2 border-white w-40 mr-2" />
        <p className="text-white text-sm font-bold">or</p>
        <hr className="border-2 border-white w-40 ml-2" />
        </div>
        <Link to='/login'>
        <p className="text-white text-md mt-8">Have an account? <span style={{fontFamily: 'Montserrat, sans-serif',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '20.6667px',
        lineHeight: '32px',
        cursor: 'pointer',
    }}>Login</span></p>
        </Link>

      </div>
    </div>
  );
}

export default Auth;
