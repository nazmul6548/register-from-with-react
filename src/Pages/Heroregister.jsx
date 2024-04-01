import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";

function Heroregister() {
  const [showerror, setShowerror] = useState("");
  const [success, setSuccess] = useState("");
  const  [showpassword,setShowpassword] =useState(false)

  const heroregister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setShowerror("");
    setSuccess("");

    if (password.length < 6) {
      setShowerror("Password must be at least 6 characters or more");
    } else if (!/[A-Z]/.test(password)) {
      setShowerror("password must be use a uppercase letter");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("you successfully created a new account");
      })
      .catch((error) => {
        // console.error(error.message);
        setShowerror(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={heroregister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              {/*  */}
          <div className="relative ">
          <input
                type={showpassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
                <span className="absolute right-2 top-4" onClick={() => setShowpassword(!showpassword) }>{
                  showpassword ? <BsEyeFill /> : <BsEyeSlashFill />
}</span>
          </div>
                {/*  */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {showerror && (
            <p className="text-red-800 p-5 mt-1 font-bold">{showerror}</p>
          )}
          {success && (
            <p className="text-green-800 p-5 mt-1 font-bold">{success}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Heroregister;
