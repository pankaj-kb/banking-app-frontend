import axios from "../axiosConfig.js";
import React, { useState } from "react";

const DepositMoney = ({ isOpen, onClose, onComplete }) => {
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [usernameCheck, setUsernameCheck] = useState("");
  const [amountCheck, setAmountCheck] = useState("");
  const [pinCheck, setPinCheck] = useState("");
  //   const [buttonDisable, setButtonDisable] = useState(true)

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    if (amount <= 0) {
      setAmountCheck("Amount should be greater than zero");
    } else {
      setAmountCheck("");
    }
  };

  const handlePinChange = (e) => {
    setPin(e.target.value);
    setPinCheck("");
  };

  const handleSendMoney = async () => {
    try {
      const response = await axios.post(`/transaction/deposit`, {
        amount,
        pin,
      });
      console.log(response);
      setPinCheck("Transaction Successfull");
      setAmount("");
      setPin("");
      onComplete();
      // handleClose();
    } catch (error) {
      setAmount("");
      setPin("");
      setPinCheck("transaction failed: Invalid details");
      console.error("Error sending money:", error);
    }
  };

  const handleClose = () => {
    setAmount("");
    setPin("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-accentpurple bg-opacity-55 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md h-[35%] w-[60%]">
        <h2 className="text-xl font-semibold mb-4">Deposit</h2>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
            className="mt-1 p-2 w-full text-[22px] font-medium border rounded-md bg-accentoffwhite"
          />
          <span className="text-[12px]">{amountCheck}</span>
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="PIN"
            value={pin}
            onChange={handlePinChange}
            className="mt-1 p-2 w-full text-[22px] font-medium border rounded-md bg-accentoffwhite"
          />
          <span className="text-[12px]">{pinCheck}</span>
        </div>
        <div className="flex justify-end">
          <button
            disabled={!amount || !pin || amount <= 0}
            onClick={handleSendMoney}
            className="px-4 py-2 disabled:bg-accentgray bg-accentpurple text-accentwhite rounded-md"
          >
            deposit amount
          </button>
          <button
            onClick={handleClose}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositMoney;
