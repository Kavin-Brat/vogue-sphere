import { ChangeEvent, useState } from "react";
import googleLogo from "../../icons/GoogleLogo.png";
import { useNavigate } from "react-router-dom";

type ValueObj = { value: { value: string; label: string }; error: string };

type InitialState = {
  name: ValueObj;
  email: ValueObj;
  password: ValueObj;
  mobile_no: ValueObj;
  dail_code: ValueObj;
};

const initialState: InitialState = {
  name: { value: { value: "", label: "" }, error: "" },
  email: { value: { value: "", label: "" }, error: "" },
  password: { value: { value: "", label: "" }, error: "" },
  mobile_no: { value: { value: "", label: "" }, error: "" },
  dail_code: { value: { value: "", label: "" }, error: "" },
};

function Login() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState<InitialState>(initialState);

  const onClickCreateNewUser = () => {
    setNewUser((prev) => !prev);
  };

  // setting Temporary Login flag in localstorage
  const setTempLogin = (): void => {
    setLoading(true);
    localStorage.setItem("lin", "true");
    setTimeout(() => {
      navigate("/dashboard");
      setLoading(false);
    }, 5000);
  };

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>, fieldName: string) => {
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

  console.log("userDetails", userDetails);

  return (
    <div className="flex justify-center flex-col items-center  pt-10 xl:pt-16 2xl:pt-32">
      <div className="w-full max-w-sm 2xl:max-w-md xl:max-w-lg">
        <div
          className="space-x-2 2xl:space-x-3 flex justify-center items-center bg-white hover:bg-[#EDEDED] shadow-md p-[6px] 2xl:p-2 rounded-md border border-[#EDEDED] cursor-pointer"
          onClick={() => {
            alert("This functionality not made yet.");
          }}
        >
          <div className="">
            <img src={googleLogo} className="w-5 h-5 2xl:w-6 2xl:h-6" alt="Google Logo" />
          </div>
          <div className="flex justify-start text-xs 2xl:text-base font-medium text-[#666666]">
            <p>Connect with Google</p>
          </div>
        </div>
        <form className="bg-white shadow-md rounded px-5 py-4 my-4 2xl:px-8 2xl:py-8 2xl:my-5">
          {newUser && (
            <div className="mb-4">
              <label className="block text-xs 2xl:text-base font-medium text-[#666666] mb-1 2xl:mb-2">Name</label>
              <input value={userDetails.name.value.value} onChange={(event) => onChangeInputHandler(event, "name")} className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-xs 2xl:text-base text-[#666666] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-[#666666] font-medium text-xs 2xl:text-base mb-1 2xl:mb-2">Email</label>
            <input value={userDetails.email.value.value} onChange={(event) => onChangeInputHandler(event, "email")} className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-xs 2xl:text-base text-[#666666] leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
          </div>
          {newUser && (
            <div className="flex w-full space-x-2 2xl:space-x-3">
              <div className="mb-4 basis-1/2">
                <label className="hidden 2xl:block block text-[#666666] font-medium text-xs 2xl:text-base mb-1 2xl:mb-2">Dail Code</label>
                <label className="block 2xl:hidden text-[#666666] font-medium text-xs 2xl:text-base mb-1 2xl:mb-2">Code</label>
                <select
                  value={userDetails.dail_code.value.value}
                  onChange={(event) => onChangeInputHandler(event, "dail_code")}
                  id="dail_code"
                  name="dail_code"
                  className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-xs 2xl:text-base text-[#666666] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Dail Code"
                >
                  <option>IN +91</option>
                  <option>IN +91</option>
                  <option>IN +91</option>
                  <option>IN +91</option>
                </select>
              </div>
              <div className="mb-4 w-full flex-grow">
                <label className="block text-[#666666] font-medium text-xs 2xl:text-base mb-1 2xl:mb-2">Mobile Number</label>
                <input
                  value={userDetails.mobile_no.value.value}
                  onChange={(event) => onChangeInputHandler(event, "mobile_no")}
                  className="shadow  bg-[#F3F9FB] appearance-none border rounded w-full py-2 px-3 text-xs 2xl:text-base text-[#666666] leading-tight focus:outline-none focus:shadow-outline"
                  id="mobile_no"
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>
            </div>
          )}
          <div className="mb-6">
            <label className="block text-[#666666] font-medium text-xs 2xl:text-base mb-1 2xl:mb-2">Password</label>
            <input
              value={userDetails.password.value.value}
              onChange={(event) => onChangeInputHandler(event, "password")}
              className="shadow bg-[#F3F9FB] appearance-none border border-red-500 rounded w-full py-2 px-3 text-xs 2xl:text-base text-[#666666] mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
            <p className={userDetails.password.error ? "text-red-500 text-xs italic" : "hidden"}>{userDetails.password.error ? userDetails.password.error : ""}</p>
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-regal-blue hover:bg-regal-blue text-white text-xs 2xl:text-base font-medium py-[6px] px-3 2xl:py-[7px] 2xl:px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105" type="button" onClick={setTempLogin}>
              {loading ? <>Loading...</> : <>{newUser ? "Sign up" : "Log in"}</>}
            </button>
            {!newUser && (
              <a className="inline-block align-baseline font-medium text-xs 2xl:text-base text-regal-blue hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            )}
          </div>
        </form>
        {!newUser && (
          <>
            <div className="flex flex-row justify-center items-center w-full space-x-2">
              <div className="w-full flex items-center justify-center border-b-2 border-[#EDEDED] rounded"></div>
              <div className="font-medium text-xs 2xl:text-base text-[#666666] w-[590px]">New to Vogue Sphere?</div>
              <div className="w-full flex items-center justify-center border-b-2 border-[#EDEDED] rounded"></div>
            </div>
            <div className="space-x-2 2xl:space-x-3 flex justify-center items-center bg-white hover:bg-[#EDEDED] shadow-md p-[6px] 2xl:p-2 rounded-md border border-[#EDEDED] cursor-pointer my-1" onClick={onClickCreateNewUser}>
              <div className="flex justify-center font-medium text-xs 2xl:text-base text-[#666666]">
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
