import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/userContext";

const SignUp = () => {
  const [error, setError] = useState(null);
  const {
    // user,
    // loading,
    // setLoading,
    // signInWithGoogle,
    createUser,
    updateProfileInfo,
  } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    // setLoading(true);
    const name = event.target.name.value;
    const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    console.log(name, email, image, password, confirmPassword);

    if (password !== confirmPassword) {
      setError("Password does not match!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=70e236d404851847a6c8351a4a847f4b`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log("ImgData", imgData);
        createUser(email, password)
          .then((result) => {
            console.log("result", result);
            updateProfileInfo(name, imgData.data.display_url)
              .then(() => {})
              .catch((error) => {
                setError(error.message);
                toast.error(error.message);
                console.log(error);
              });
          })
          .catch((error) => {
            toast.error(error.message);
            setError(error.message);
            console.log(error);
          });
      });
  };
  return (
    <div>
      <section className="container mx-auto">
        <div className="flex justify-center items-center lg:h-[89vh] h-[70vh]">
          <form
            onSubmit={handleSubmit}
            className="lg:w-3/12 w-[85%] mx-auto py-10"
          >
            <p className="font-Ubuntu uppercase font-light tracking-widest text-4xl">
              create account
            </p>
            <div className="mt-12">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                Full name
              </p>
              <input
                type="text"
                name="name"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>

            <div className="mt-7">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                Image
              </p>
              <input
                type="file"
                accept="image/*"
                name="image"
                className="py-2 outline-none pl-3 font-Ubuntu"
              />
            </div>

            <div className="mt-7">
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
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                Password
              </p>
              <input
                type="password"
                name="password"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>
            <div className="mt-7">
              <p className="font-Ubuntu uppercase tracking-widest mb-2">
                confirm Password
              </p>
              <input
                type="password"
                name="confirmPassword"
                className="border py-2 outline-none pl-3 w-full font-Ubuntu"
              />
            </div>

            <input
              type="submit"
              value="create"
              className="bg-black text-white w-full mt-7 py-2 uppercase tracking-widest font-light cursor-pointer"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
