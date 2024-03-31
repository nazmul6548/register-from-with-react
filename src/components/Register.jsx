

function Register() {


  const handleRegister =e => {
  e.preventDefault();
  
  const email = e.target.email.value;
  const password =e.target.password.value;
  console.log(email,password);
  }


  return (
    <div className="mt-10">
        <h2 className='text-5xl font-bold text-center'>Please Register</h2>

        <div className="mx-auto w-1/2">
            <form onSubmit={handleRegister} className="flex flex-col mt-10">

                <input type="email" name="email" id="" className="border-2 p-2 px-7 rounded-xl w-3/4 m-auto "  placeholder="provide your email"/>
                <br />
                <br />
                <input type="password" name="password" id="" className="border-2 rounded-xl m-auto w-3/4 p-2 px-7"  placeholder="type your password"/>
                <br />
                <br />
                <input type="submit"  name="submit" className="border-2 bg-secondary w-3/4 p-2 px-7 rounded-xl m-auto"/>
                
            </form>
        </div>
    </div>
  )
}

export default Register