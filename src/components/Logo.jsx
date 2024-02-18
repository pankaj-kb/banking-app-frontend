import { useNavigate } from "react-router-dom";

function Logo({ onClick, className, spanClassName }) {
  const logoName = "Growth";

  const navigate = useNavigate()

  const handleNavigate = () => {
    console.log("refresh working.")
    navigate(`/`)
  }

  return (
    <div onClick={handleNavigate}>
      <h1 className={className} onClick={onClick}>
        {logoName.split("").map((char, index) => (
          <span key={index} className={spanClassName}>
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Logo;
