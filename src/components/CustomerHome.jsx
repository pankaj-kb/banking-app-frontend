import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TransactionCard from "./TransactionCard";
import axios from "axios";
import SendMoney from "./SendMoney";

const CustomerHome = () => {
  const balance = useSelector((state) => state.auth.userData.balance);
  const customerId = useSelector((state) => state.auth.userData._id);
  const [transactions, setTransactions] = useState([]);
  const [showBalance, setShowBalance] = useState(false);
  const [sort, setSort] = useState(false);
  //   console.log(balance)

  useEffect(() => {
    const getTransactions = async () => {
      const response = await axios.get(
        `/customer/transactions/${customerId}/?sortOrder=${
          sort ? "desc" : "asc"
        }`
      );
      setTransactions(response.data.data);
      console.log(response);
    };
    getTransactions();
  }, [customerId, sort]);

  const handleShowClick = () => {
    setShowBalance(!showBalance);
    // console.log("clicked")
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const [sendMoneyModalOpen, setSendMoneyModalOpen] = useState(false);

  const openSendMoneyModal = () => setSendMoneyModalOpen(true);
  const closeSendMoneyModal = () => setSendMoneyModalOpen(false);

  return (
    <>
      <div className="flex items-center justify-center gap-[10%] bg-accentoffwhite">
        <div className="flex gap-6 items-center">
          {showBalance ? (
            <h1 className="text-[20px] text-accentpurple font-medium w-[100px]">
              ₹ {balance}
            </h1>
          ) : (
            <h1 className="text-[20px] text-accentpurple font-medium w-[100px]">
              ₹ &#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;
            </h1>
          )}
          <button
            onClick={handleShowClick}
            className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg"
          >
            Show Balance
          </button>
        </div>
        <div className="flex gap-12 items-center">
          <button onClick={openSendMoneyModal} className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg">
            Send Money
          </button>
          <SendMoney
            isOpen={sendMoneyModalOpen}
            onClose={closeSendMoneyModal}
          />
          <button className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg">
            Deposit
          </button>
          <button className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg">
            Withdraw
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleSort}
          className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg w-[100px]"
        >
          sort
        </button>
        <div className="flex flex-wrap p-8 gap-12 items-center justify-center">
          {transactions.map((transaction) => (
            <TransactionCard key={transaction._id} transaction={transaction} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomerHome;
