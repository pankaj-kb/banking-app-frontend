import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TransactionCard from "./TransactionCard";
import axios from "../axiosConfig.js";
import SendMoney from "./SendMoney";
import DepositMoney from "./DepositMoney";
import WithdrawMoney from "./WithdrawMoney";

const CustomerHome = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [balance, setBalance] = useState(userData.balance);
  const customerId = useSelector((state) => state.auth.userData._id);
  const [transactions, setTransactions] = useState([]);
  const [showBalance, setShowBalance] = useState(false);
  const [sort, setSort] = useState(true);

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

  const getTransactions = async () => {
    const response = await axios.get(
      `/customer/transactions/${customerId}/?sortOrder=${sort ? "desc" : "asc"}`
    );
    setTransactions(response.data.data);
    console.log(response);
  };

  const handleTransactionComplete = async () => {
    getTransactions();
    const response = await axios.get("/customer/current-user");
    console.log(response);
    if (response.data.statusCode === 200) {
      dispatch(login(response.data.data));
      setBalance(response.data.data.balance);
      if (!response.data.data?.role) {
        dispatch(setRole("customer"));
      } else {
        dispatch(setRole("banker"));
      }
    }
  };

  const handleShowClick = () => {
    setShowBalance(!showBalance);
    // console.log("clicked")
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const [sendMoneyModalOpen, setSendMoneyModalOpen] = useState(false);

  const openSendMoneyModal = () => setSendMoneyModalOpen(true);
  const closeSendMoneyModal = () => setSendMoneyModalOpen(false);

  const [depositModalOpen, setDepositModalOpen] = useState(false);

  const openDepositModal = () => setDepositModalOpen(true);
  const closeDepositModal = () => setDepositModalOpen(false);

  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const openWithdrawModal = () => setWithdrawModalOpen(true);
  const closeWithdrawModal = () => setWithdrawModalOpen(false);

  return (
    <>
      <div className="flex flex-col bg-accentoffwhite gap-4">
        <div className="flex flex-col gap-6 items-center">
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
        <div className="flex flex-col gap-4 items-center">
          <button
            onClick={toggleOptions}
            className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg"
          >
            {showOptions ? "Make Payment" : "Make Payment"}
          </button>
          {showOptions && (
            <div className="flex gap-4">
              <button
                onClick={openSendMoneyModal}
                className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg"
              >
                Send Money
              </button>
              <SendMoney
                isOpen={sendMoneyModalOpen}
                onClose={closeSendMoneyModal}
                onComplete={handleTransactionComplete}
              />
              <button
                onClick={openDepositModal}
                className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg"
              >
                Deposit
              </button>
              <DepositMoney
                isOpen={depositModalOpen}
                onClose={closeDepositModal}
                onComplete={handleTransactionComplete}
              />
              <button
                onClick={openWithdrawModal}
                className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg"
              >
                Withdraw
              </button>
              <WithdrawMoney
                isOpen={withdrawModalOpen}
                onClose={closeWithdrawModal}
                onComplete={handleTransactionComplete}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <button
          onClick={handleSort}
          className="text-[20px] text-accentwhite bg-accentpurple p-2 font-medium rounded-lg w-[100px]"
        >
          sort
        </button>
        <div className="flex flex-col lg:flex-wrap lg:flex-row gap-2 items-center justify-center">
          {transactions.map((transaction) => (
            <TransactionCard key={transaction._id} transaction={transaction} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomerHome;
