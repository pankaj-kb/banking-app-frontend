import { useState } from "react";
import { useSelector } from "react-redux";

const CustomerHome = () => {
  // const balance = useSelector((state) => state.auth.userData.balance)
  const [showBalance, setShowBalance] = useState(false)

  const handleShowClick = () => {
    setShowBalance(!showBalance)
    // console.log("clicked")
  }

  return (
    <>
      <div className="flex items-center justify-center gap-[10%] bg-accentoffwhite">
        <div className="flex gap-6 items-center">
        {showBalance ? (
            <h1 className="text-[20px] text-accentpurple font-medium w-[100px]">
              ₹ 5000
            </h1>
          ) : (
            <h1 className="text-[20px] text-accentpurple font-medium w-[100px]">
            ₹ &#8226;&#8226;&#8226;&#8226;&#8226;
            {/* replace with balance.lengh */}
            </h1>
          )}
          <button onClick={handleShowClick}
          className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium">
            Show Balance
          </button>
        </div>
        <div className="flex gap-12 items-center">
          <button className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium">
            Send Money
          </button>
          <button className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium">
            Deposit
          </button>
          <button className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium">
            Withdraw
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerHome;
