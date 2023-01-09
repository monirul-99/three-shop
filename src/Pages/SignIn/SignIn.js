import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Google from "../Images/google.png";
import Facebook from "../Images/facebook.png";
import Twitter from "../Images/twitter.png";
import { AuthContext } from "../../Context/userContext";
import { toast } from "react-hot-toast";

const SignIn = () => {
  const [error, setError] = useState(null);
  const { createUser, signInWithGoogle, setLoading, signIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then((res) => {
        toast.success("Login Successfully!");
        // verifyJWT(res.user.email);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleMama = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // userSaveDB(user?.email, user?.displayName, user?.photoURL, "Other");
        // navigate(from, { replace: true });
        // verifyJWT(user?.email);
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };
  return (
    <>
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:h-[89vh] h-[70vh]">
          <form
            className="lg:w-3/12 w-[85%] mx-auto py-10"
            onSubmit={handleSubmit}
          >
            <p className="font-Ubuntu uppercase font-light tracking-widest text-4xl">
              login
            </p>
            <div className="mt-12">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                Email
              </p>
              <input
                type="email"
                name="email"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>
            <div className="mt-7">
              <aside className="flex justify-between mb-2">
                <p className="font-Ubuntu uppercase tracking-widest">
                  Password
                </p>
                <p className="font-Ubuntu capitalize tracking-widest text-[0.8rem]">
                  Forget Password?
                </p>
              </aside>
              <input
                type="password"
                name="password"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>

            <input
              type="submit"
              value="sign in"
              className="bg-black text-white w-full mt-7 py-2 uppercase tracking-widest font-light"
            />

            <Link to="/sign-up">
              <p className="text-start uppercase mt-2 font-Poppins text-[0.8rem]">
                DON'T HAVE AN ACCOUNT ?{" "}
                <span className="text-[#099A09]">REGISTER</span>
              </p>
            </Link>

            <div className="mt-5">
              <p className="text-[#099A09] font-Poppins text-center py-2 text-[0.8rem]">
                OR CONTINUE LOG IN WITH
              </p>
              <aside className="flex items-center justify-center space-x-2 mt-2 mb-3">
                <div className="border p-1 cursor-pointer">
                  <img className="w-6 p-1" src={Twitter} alt="" />
                </div>
                <div className="border p-1 cursor-pointer">
                  <img className="w-6 p-1" src={Facebook} alt="" />
                </div>
                <div
                  className="border p-1 cursor-pointer"
                  onClick={handleGoogleMama}
                >
                  <img className="w-6 p-1" src={Google} alt="" />
                </div>
              </aside>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SignIn;
