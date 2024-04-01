import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Register() {
  const [registererror, setRegistererror] = useState("");
  const [success, setSuccess] = useState("");
  const [showpassword, setShowpassword] = useState(false);

  const registerhandler = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password,accepted);

    if (password.length < 6) {
      setRegistererror("password must be at least 6 characters or more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegistererror("please use a upper case letter");
      return;
    }else if (!accepted) {
      setRegistererror("please accept terms and condition");
      return;
    }

    setRegistererror("");
    setSuccess("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("you have successfully registered");
      })
      .catch((error) => {
        // console.error(error.message);
        setRegistererror(error.message);
      });
  };
  return (
    <div className=" mt-12 w-1/2 mx-auto">
      <h1 className="text-4xl text-center font-bold">Registration Now</h1>
      <form onSubmit={registerhandler} className="1/2 mx-auto mt-12">
        <input
          className="border-2 p-3 rounded-md  w-full"
          type="email"
          name="email"
          placeholder="type your email"
          required
        />

        <br />
        <br />

        <div className="relative">
        <input
          className="border-2 p-3 rounded-md w-full "
          type={showpassword ? "text" : "password"}
          name="password"
          placeholder="type your password"
          required
        />
        <span className=" absolute top-4 right-3"  onClick={() => setShowpassword(!showpassword)}>
          {
            showpassword ? <BsEyeFill /> : <BsEyeSlashFill />
          }
        </span>
        </div>

        <div className="flex items-center mt-6">
        <input type="checkbox" name="terms" id="terms" />
        <label className="ml-2" htmlFor="terms">accept our term and condition</label>
        </div>
        
        <br />
        <br />
        <input
          className="bg-secondary w-full p-3 text-white font-bold rounded-md border-2"
          type="submit"
          value="register"
        />
        
      </form>
      <p>Are you registered? Go to <NavLink to="/contact">login</NavLink></p>


      {registererror && (
        <p className="text-red-700 p-4 font-bold">{registererror}</p>
      )}
      {success && <p className="text-green-700 p-4 font-bold">{success}</p>}
    </div>
  );
}

export default Register;
