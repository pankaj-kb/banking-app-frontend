import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TransactionCard from "../components/TransactionCard";
import axios from "../axiosConfig.js";

const CustomerPage = () => {
  const { customerId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [sort, setSort] = useState(true);

  const handleSort = () => {
    setSort(!sort);
  };

  useEffect(() => {
    const getTransactions = async () => {
      const response = await axios.get(
        `/customer/transactions/${customerId}/?sortOrder=${
          sort ? "desc" : "asc"
        }`
      );
      setTransactions(response.data.data);
    };
    getTransactions();
  }, [customerId, sort]);

  return (
    <>
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

export default CustomerPage;
