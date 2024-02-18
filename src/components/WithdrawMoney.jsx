import axios from "axios";
import React, { useState } from "react";

const WithdrawMoney = ({ isOpen, onClose, onComplete }) => {
  const [to, setTo] = useState("");
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
      const response = await axios.post(`/transaction/withdraw`, {
        amount,
        pin,
      });
      console.log(response);
      onComplete();
      handleClose();
    } catch (error) {
      console.error("Error sending money:", error);
    }
  };

  const handleClose = () => {
    setAmount("");
    setPin("");
    setTo("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-accentpurple bg-opacity-55 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md w-[30%]">
        <h2 className="text-xl font-semibold mb-4">Withdraw</h2>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={handleAmountChange}
            className="mt-1 p-2 w-full text-[22px] font-medium border rounded-md bg-accentoffwhite"
          />
          <span>{amountCheck}</span>
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="PIN"
            value={pin}
            onChange={handlePinChange}
            className="mt-1 p-2 w-full text-[22px] font-medium border rounded-md bg-accentoffwhite"
          />
          <span>{pinCheck}</span>
        </div>
        <div className="flex justify-end">
          <button
            disabled={!amount || !pin || amount <= 0}
            onClick={handleSendMoney}
            className="px-4 py-2 disabled:bg-accentgray bg-accentpurple text-accentwhite rounded-md"
          >
            withdraw amount
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

export default WithdrawMoney;
