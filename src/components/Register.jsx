
function Register() {
  return (
    <div className=" mt-12 w-1/2 mx-auto">
      <h1 className="text-4xl text-center font-bold">Registration Now</h1>
      <form className="1/2 mx-auto mt-12">

         <input className="border-2 p-3 rounded-md  w-full" type="email" name="email" placeholder="type your email" />

         <br />
         <br />

         <input className="border-2 p-3 rounded-md w-full" type="password" name="password" placeholder="type your password" />
         <br />
         <br />
         <input className="bg-secondary w-full p-3 text-white font-bold rounded-md border-2" type="submit" value="register"  />

      </form>
    </div>
  )
}

export default Register