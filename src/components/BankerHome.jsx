import { useEffect, useState } from "react";
import axios from "axios";
import CustomerCard from "./CustomerCard";

const BankerHome = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const response = await axios.get("/banker/customers");
      setCustomers(response.data.data);
      console.log(customers);
    };
    getCustomers();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center mt-[4%] gap-4 hover:cursor-pointer">
        {customers.map((customer) => (
          <CustomerCard key={customer._id} customer={customer} />
        ))}
      </div>
    </>
  );
};

export default BankerHome;
