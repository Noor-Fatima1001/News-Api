
import React from 'react'

const NewsLetter = () => {

  return (
    <div className="container text-center my-5  ">
      <h2 className="fw-bold">Subscribe to the newsletter</h2>
      <p className="text-muted">
        Get a weekly digest of our most important stories direct to your inbox.
      </p>

      <form  className="d-flex justify-content-center mt-4">
        <input
          type="email"
          placeholder="Enter Your Mail"
          className="form-control w-50 me-2"
    
          required
        />
        <button type="submit" className="btn btn-danger">
          Send Now
        </button>
      </form>

      <p className="text-muted mt-3" style={{ fontSize: "0.85rem" }}>
        Place some disclaimer text here about how subscriber's email, Privacy Policy and all that.
      </p>
    </div>
  );
}


export default NewsLetter
