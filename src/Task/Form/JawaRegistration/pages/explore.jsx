import { Link } from "react-router-dom";

export let Explore = () => {
  return (
    <>
      <h1>Our Courses</h1>

      <ul>
        <li>
          <b>MS Office</b> — Microsoft Office (Word, Excel, PowerPoint, etc.)
        </li>
        <li>
          <b>Python</b> — Python Programming
        </li>
        <li>
          <b>C</b> — C Programming
        </li>
        <li>
          <b>C++</b> — C++ Programming
        </li>
        <li>
          <b>C#</b> — C# Programming
        </li>
        <li>
          <b>.NET</b> — .NET Development
        </li>
        <li>
          <b>Java</b> — Java Programming
        </li>
        <li>
          <b>VB</b> — Visual Basic
        </li>
        <li>
          <b>Oracle</b> — Oracle Database
        </li>
        <li>
          <b>MySQL</b> — MySQL Database
        </li>
        <li>
          <b>PHP</b> — PHP Programming
        </li>
        <li>
          <b>2D Animation</b> — Flash Animation
        </li>
        <li>
          <b>Photoshop</b> — Adobe Photoshop
        </li>
        <li>
          <b>Illustrator</b> — Adobe Illustrator
        </li>
        <li>
          <b>Corel Draw</b> — CorelDRAW
        </li>
        <li>
          <b>InPage</b> — InPage Desktop Publishing
        </li>
        <li>
          <b>InDesign</b> — Adobe InDesign
        </li>
        <li>
          <b>Tally with GST</b> — Accounting with GST
        </li>
        <li>
          <b>Architecture Designing</b> — Architectural Design Software
        </li>
        <li>
          <b>AutoCAD</b> — Computer-Aided Design
        </li>
        <li>
          <b>UI/UX</b> — User Interface & User Experience Design
        </li>

        <li>
          <b>DCA</b> — Diploma in Computer Applications
        </li>
        <li>
          <b>DCAE</b> — Diploma in Computer Accounting Expert
        </li>
        <li>
          <b>DDTP</b> — Diploma in Desktop Publishing
        </li>
        <li>
          <b>DIT</b> — Diploma in Information Technology
        </li>
        <li>
          <b>DSWD</b> — Diploma in Smart Web Designing
        </li>

        <li>
          <b>ADCP</b> — Advanced Diploma in Computer Programming
        </li>
        <li>
          <b>DCAGD</b> — Diploma in Computer Applications & Graphic Designing
        </li>
        <li>
          <b>ADOAP</b> — Advanced Diploma in Office Accounts & Publishing
        </li>
        <li>
          <b>PGDCA</b> — Post Graduate Diploma in Computer Applications
        </li>
        <li>
          <b>PGDIT</b> — Post Graduate Diploma in Information Technology
        </li>
        <li>
          <b>ADWD</b> — Advanced Diploma in Web Designing (Full Stack Web
          Developer)
        </li>

        <li>
          <b>DSE</b> — Diploma in Software Engineering
        </li>

        <li>
          <b>MDCTT</b> — Master Diploma in Computer Teaching
        </li>
        <li>
          <b>NTT</b> — Nursery Teacher's Training
        </li>
        <li>
          <b>NTT (II Year)</b> — Nursery Teacher's Training (Second Year)
        </li>
        <li>
          <b>PTT</b> — Primary Teacher's Training
        </li>
      </ul>

      <div className="register">
        <Link to="/form">REGISTER NOW</Link>
      </div>
      <br />
      <Link to="/">← Back to Home</Link>
    </>
  );
};
