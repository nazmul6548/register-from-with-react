// import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import auth from "../firebase/firebase.config";
import { NavLink } from "react-router-dom";

function Contact() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef(null);

  const handleloggin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    console.log(email, password);
    setError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user.emailVerified) {
          setSuccess("Successfully signed in");
        }else (
          alert("please verify your email adress ")
        )
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleForgerPassword = () => {
    
    const email = emailRef.current.value;
    if (!email) {
      
      console.log("please provide an email",emailRef.current.value);
      return
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
console.log("please write a valid email address");
return
    }
    sendPasswordResetEmail(auth,email)
    .then(() => {
      alert("please check your email address");
    })
    .catch((error) => {
      console.log(error);
    })

  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleloggin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgerPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {error && <p className="text-red-800 p-5 mt-1 font-bold">{error}</p>}
          {success && (
            <p className="text-green-800 p-5 mt-1 font-bold">{success}</p>
          )}

          <p className="p-2 pb-5">
            new to this website please
            <NavLink className="text-red  underline " to="/register">
              {" "}
              register
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
