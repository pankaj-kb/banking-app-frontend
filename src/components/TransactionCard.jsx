const TransactionCard = ({ transaction }) => {
  const formatDate = (dateString) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    return new Date(dateString).toLocaleString("en-US", options);
  };

  return (
    <div
      className="flex flex-col bg-accentpurple justify-center items-center 
      font-medium h-[150px] w-screen rounded-lg p-4 lg:w-[500px]"
    >
      <div className="flex gap-4 justify-start items-start">
        <h1 className="text-[20px] text-accentwhite text-center">
          Status: {transaction.status}
        </h1>
        <h1 className="text-[20px] text-accentwhite text-center">
          Type: {transaction.transactionType}
        </h1>
      </div>
      <div className="flex gap-4 justify-start items-start">
        <h1 className="text-[20px] text-accentwhite text-center">
          From: {transaction.from}
        </h1>
        <h1 className="text-[20px] text-accentwhite text-center">
          To: {transaction.to}
        </h1>
      </div>
      <div className="flex gap-4 justify-start items-start">
        <h1 className="text-[20px] text-accentwhite text-center">
          Amount: &#8377;{transaction.amount}
        </h1>
        <h1 className="text-[20px] text-accentwhite text-center">
          Date: {formatDate(transaction.createdAt)}
        </h1>
      </div>
    </div>
  );
};

export default TransactionCard;
