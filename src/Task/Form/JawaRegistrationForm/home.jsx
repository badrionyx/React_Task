import { useNavigate } from "react-router-dom";

export let MyHome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="outer">
        <div
          className="explore"
          onClick={() => navigate("/explore")}
          style={{
            cursor: "pointer",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          EXPLORE COURSES
        </div>

        <div
          className="register"
          onClick={() => navigate("/form")}
          style={{
            cursor: "pointer",
            padding: "20px",
            border: "1px solid #ccc",
          }}
        >
          REGISTER
        </div>
      </div>
    </>
  );
};
