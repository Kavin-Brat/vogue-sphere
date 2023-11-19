import React, { useState } from "react";
import googleLogo from "../../icons/GoogleLogo.png";
function Login() {
  const [newUser, setnewUser] = useState(false);
  const [userDetals, setUserDetails] = useState({
    name: { value: { value: String, lable: String }, error: String },
    email: { value: { value: String, lable: String }, error: String },
    password: { value: { value: String, lable: String }, error: String },
    mobile_no: { value: { value: String, lable: String }, error: String },
    dail_code: { value: { value: String, lable: String }, error: String },
  });
  // onclick show create new user screen
  const onClickCreateNewUser = () => {
    setnewUser((prev) => !prev);
  };
  const onChangeInputHandler = (event: any, fieldName: String) => {
    if (event?.target?.value) {
      setUserDetails((prev) => ({
        ...prev,
        [fieldName]: {
          value: {
            value: event?.target?.value,
            label: event?.target?.value,
          },
          error: "",
        },
      }));
    } else {
      setUserDetails((prev) => ({
        ...prev,
        [fieldName]: {
          value: {
            value: "",
            label: "",
          },
          error: "",
        },
      }));
    }
  };

  console.log("userDetals", userDetals);

  return (
    <div className="flex justify-center flex-col items-center pt-16 md:pt-32">
      <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
        <div className="space-x-2 xl:space-x-3 flex justify-center items-center bg-white hover:bg-[#EDEDED] shadow-md p-2 mb-5 rounded-md border border-[#EDEDED] cursor-pointer" onClick={()=> {alert("This functionality not made yet.")}}>
          <div className="">
            <img src={googleLogo} className="w-5 h-5 xl:w-6 xl:h-6" />
          </div>
          <div className="flex justify-start text-sm font-medium text-[#666666]">
            <p>Connect with Google</p>
          </div>
        </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {newUser && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#666666]mb-2">Name</label>
              <input value={userDetals.name.value.value} onChange={(event) => onChangeInputHandler(event, "name")} className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-[#666666] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-[#666666] text-sm  font-medium mb-2">Email</label>
            <input value={userDetals.email.value.value} onChange={(event) => onChangeInputHandler(event, "email")} className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-[#666666] leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
          </div>
          {newUser && (
            <div className="flex w-full space-x-2 md:space-x-3">
              <div className="mb-4 basis-1/2 md:basis-1/3">
                <label className="hidden md:block block text-[#666666] text-sm  font-medium mb-2">Dail Code</label>
                <label className="block md:hidden text-[#666666] text-sm  font-medium mb-2">Code</label>
                <select value={userDetals.dail_code} onChange={(event) => onChangeInputHandler(event, "dail_code")} id="dail_code" name="dail_code" className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-[#666666] leading-tight focus:outline-none focus:shadow-outline" placeholder="Dail Code">
                  <option>IN +91</option>
                  <option>IN +91</option>
                  <option>IN +91</option>
                  <option>IN +91</option>
                </select>
              </div>
              <div className="mb-4 w-full sm:basis-1/2 md:flex-grow">
                <label className="block text-[#666666] text-sm  font-medium mb-2">Mobile Number</label>
                <input value={userDetals.mobile_no.value.value} onChange={(event) => onChangeInputHandler(event, "mobile_no")} className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-[#666666] leading-tight focus:outline-none focus:shadow-outline" id="mobile_no" type="text" placeholder="Mobile Number" />
              </div>
            </div>
          )}
          <div className="mb-6">
            <label className="block text-[#666666] text-sm  font-medium mb-2">Password</label>
            <input value={userDetals.password.value.value} onChange={(event) => onChangeInputHandler(event, "password")} className="shadow  bg-[#F3F9FB] appearance-none border border-red-500 rounded w-full py-2 px-3 text-[#666666] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            <p className={userDetals.password.value.error ?"text-red-500 text-xs italic":"hidden"}>{userDetals.password.value.error ?userDetals.password.value.error :""}</p>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-regal-blue hover:bg-regal-blue text-white  font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105" type="button">
              {newUser ? "Sign up" : "Log in"}
            </button>
            {!newUser && (
              <a className="inline-block align-baseline  font-medium text-sm text-regal-blue hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            )}
          </div>
        </form>
        {!newUser && (
          <>
            <div className="flex flex-row justify-center items-center w-full space-x-2">
              <div className="w-full flex items-center justify-center border-b-2 border-[#EDEDED] rounded"></div>
              <div className="text-sm font-medium text-[#666666] w-[590px]">New to Vogue Sphere?</div>
              <div className="w-full flex items-center justify-center border-b-2 border-[#EDEDED] rounded"></div>
            </div>
            <div className="bg-white hover:bg-[#EDEDED] shadow-md p-2 my-1 rounded-md border border-[#EDEDED] cursor-pointer" onClick={onClickCreateNewUser}>
              <div className="flex justify-center text-sm font-medium text-[#666666]">
                <p>Create your Vogue Sphere account</p>
              </div>
            </div>
          </>
        )}
        <p className="text-center text-gray-500 text-xs my-2">&copy;2023 DXx.. Technologies. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Login;
