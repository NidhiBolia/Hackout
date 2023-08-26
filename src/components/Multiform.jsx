import React,{useState} from 'react'
import logo from "../assets/bg-sidebar-desktop.svg"
export default function Multiform() {
    const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState(false);
  const [userInput, setUserInput] = useState({
    firstname: "",
    lastname: "",
    college: "",
    sex: "",
    objectives: "",
    isAdmin: "",
  });

  const showErrorMessage = () => {
    setErrorMessage(true);
    setTimeout(() => {
      setErrorMessage(false);
    }, 3000);
  };
  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleRedirect = () => {
    window.open("https://geisielmelo.netlify.app", "_blank");
  };
  const handlePageTwo = () => {
    return isContactInputValid(
      userInput.firstname,
      userInput.lastname,
      userInput.email,
      userInput.sex,
      userInput.college
      )
      ? setCurrentStep(2):showErrorMessage();
    }
     
  return (
    <section>
    <container className="">
    <div className='flex  mt-20 bg-[#d4e6fe] rounded-md flex-row w-7/12  mx-auto  h-[36rem] justify-center items-center'>
        <div className="right h-full w-5/12 text-blue">
            <img src={logo} alt="" className=''/>
        </div>
        <div className="left  flex flex-col w-7/12">
        {currentStep === 1 && (
          <>
            <div className=' w-100% flex flex-col justify-center items-center gap-y-2'>
              <input
                label="First Name"
                placeholder="Write your first name"
                type="text"
                name="name" 
                value={userInput.name}
                className='w-[25rem] h-[2.5rem] gap-4 mb-5 rounded-full text-center'
                onChange={handleUserInput}
              />
              <input
                label="Last Name"
                placeholder="Write your last name"
                type="text"
                name="phone"
                className='w-[25rem] h-[2.5rem] gap-4 mb-5 text-center rounded-full'
                value={userInput.phone}
                onChange={handleUserInput}
              />
              <input
                label="College"
                placeholder="College"
                type="text"
                name="phone"
                className='w-[25rem] h-[2.5rem] gap-4 mb-5  text-center rounded-full'
                value={userInput.phone}
                onChange={handleUserInput}
              />
              <div className="flex gap-4 mb-5 ">
              <p>Sex:</p>
              <input type="radio" id="male" name='gender' value="male"/>
                <label for="male">Male</label>
                <input type="radio" id="female" name='gender'  value="male"/>
                <label for="female">Female</label>
                <input type="radio" id="others" name='gender' value="male"/>
                <label for="others">Others</label>
              </div>
              <input
                label="E-mail"
                placeholder="Write your e-mail"
                type="e-mail"
                name="email"
                className='w-[25rem] h-[2.5rem] gap-4 mb-5 text-center  rounded-full'
                value={userInput.email}
                onChange={handleUserInput}
              />
              <div className="flex gap-4 mb-5 ">
              <p>Are you Admin?</p>
              <input type="radio" id="yes" name='isAdmin' value="admin"/>
                <label for="yes">yes</label>
                <input type="radio" id="no" name='isAdmin' value="admin"/>
                <label for="no">no</label>
              </div>
            </div>
            <button
            type="submit"
              page={currentStep}
              continue="Continue"
              onContinue={handlePageTwo}
              className='px-8 py-2 m-auto rounded-md text-center bg-blue-400'
                > Submit </button>
          </>
        )}
        </div>
    </div>
    </container>
    </section>
    
  )
}
