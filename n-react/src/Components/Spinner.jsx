import React, { Component } from 'react'
import loading from "../assets/images/loading.gif"

const Spinner   = () => {
  
    return (
      <div className='text-center'>
        <img src={loading} alt="spinner" />
      </div>
    )
  }
export default Spinner
