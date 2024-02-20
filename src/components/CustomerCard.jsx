import { useNavigate } from "react-router-dom";

const CustomerCard = ({ customer }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/customer/${customer._id}`);
  };

  console.log(customer);
  return (
    <div
      onClick={handleOnClick}
      className="flex flex-wrap bg-accentpurple text-accentwhite 
      justify-center items-center gap-[20px] font-medium rounded-lg p-[100px] w-[80%] text-center h-[30%]"
    >
      <h1>Username: {customer?.username}</h1>
      <h1>Name: {customer?.fullName}</h1>
      <h1>Balance: &#8377; {customer?.balance}</h1>
      <h1>transactions: {customer.transactions?.length} </h1>
    </div>
  );
};

export default CustomerCard;
