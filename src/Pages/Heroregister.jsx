import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

export const Heroregister = () => {

    const [registererror,setRegistererror] = useState("");
    const [success,setSuccess] = useState("")
    const [showpassword,setShowpassword] = useState(false)
   



const handleregisternow = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email,password,accepted);

    if (password.length < 6) {
        setRegistererror("Password should be at least 6 characters")
        return
    }else if (!/[A-Z]/.test(password)) {
        setRegistererror("your password must be have at least one character upper case")
        return
    }else if (!accepted) {
        setRegistererror("please accept our term and condition")
        return
    }
    setRegistererror("")
    setSuccess("")
    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
        console.log(result.user);
        setSuccess("successfully created email")
    })
    .catch(error => {
        console.error(error);
        setRegistererror(error.message);
    })
}




  return (
    <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleregisternow} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={
            showpassword ? "text" : "password"
          } name="password" placeholder="password" className="input w-full input-bordered" required /> 
          <span className="absolute right-1 top-4" onClick={() => setShowpassword(!showpassword)}>
            {
                showpassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
            }

          </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>

         <div className="flex items-center">
         <input type="checkbox" name="" id="terms" />
          <label className="ml-1" htmlFor="">accept our <a className="underline" href="#">term and condition</a></label>
         </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      {
    registererror && <p className= " pl-5 p-4 text-orange-500">{registererror}</p>
  }
  {
    success && <p className="pl-5 p-4 text-green-950">{success}</p>
  }
    
    </div>
   
  </div>
  
  
</div>

    </div>

  )
}