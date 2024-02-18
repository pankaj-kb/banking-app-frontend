import { useSelector } from "react-redux";
import BankerHome from "../components/BankerHome";
import CustomerHome from "../components/CustomerHome";

const HomePage = () => {
  const roleType = useSelector((state) => state.auth.role);
  console.log("from line 7 at HomePage", roleType);
  return roleType == "customer" ? (
    <div className="flex flex-col gap-[20px]">
      <CustomerHome />
    </div>
  ) : (
    <div>
      <BankerHome />
    </div>
  );
};

export default HomePage;
