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
      className="grid grid-cols-2 bg-accentpurple items-center justify-center
      font-medium h-[180px] w-screen rounded-lg p-4 lg:w-[40%] lg:h-[2%] lg:gap-2 lg:p-6"
    >
      <h1 className="text-[20px] text-accentwhite text-center">
        Status: {transaction.status}
      </h1>
      <h1 className="text-[20px] text-accentwhite text-center">
        Type: {transaction.transactionType}
      </h1>
      <h1 className="text-[20px] text-accentwhite text-center">
        From: {transaction.from}
      </h1>
      <h1 className="text-[20px] text-accentwhite text-center">
        To: {transaction.to}
      </h1>
      <h1 className="text-[20px] text-accentwhite text-center">
        Amount: &#8377;{transaction.amount}
      </h1>
      <h1 className="text-[20px] text-accentwhite text-center">
        Date: {formatDate(transaction.createdAt)}
      </h1>
    </div>
  );
};

export default TransactionCard;
