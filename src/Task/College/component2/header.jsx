import { Link } from "react-router";
import "../pages2/collegeStyle.css";

export let Myheader = () => {
  return (
    <>
      <h1 id="college">MAZHARUL ULOOM COLLEGE</h1>
      <div className="morng">
        {" "}
        MORNING SHIFT
        <div className="eveng"> EVENING SHIFT</div>
      </div>
      <nav className="head1">
        <Link to="bca">BCA STUDENTS</Link>
        <Link to="bba">BBA STUDENTS</Link>
        <Link to="bscMaths">BSC MATHS STUDENTS</Link>
        <Link to="baEcnomics">ECNOMICS STUDENTS</Link>
        <Link to="bcomComputer">BCOM COMPUTER SCIENCE</Link>
        <Link to="BcomCorporate">BCOM CORPORATE SECRETARYSHIP</Link>
        <Link to="BscDataScience">BSC DATA SCIENCE</Link>
        <Link to="BscMicro">BSC MICRO-BIOLOGY</Link>
      </nav>
    </>
  );
};
