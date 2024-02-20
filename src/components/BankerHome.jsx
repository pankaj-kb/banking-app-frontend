import { useEffect, useState } from "react";
import axios from "../axiosConfig.js";
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
      <div>
        <div className="flex flex-col bg-accentoffwhite gap-4 w-screen lg:(flex-wrap justify-center items-center mt-[4%] gap-4) hover:cursor-pointer">
          {customers.map((customer) => (
            <CustomerCard key={customer._id} customer={customer} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BankerHome;
