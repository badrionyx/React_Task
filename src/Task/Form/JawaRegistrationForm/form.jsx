import { useState } from "react";

export let Registration = () => {
  let [name, setName] = useState("");

  let [email, setEmail] = useState("");

  let [course, setCourse] = useState([]);

  let [gen, setGen] = useState("");

  let [shift, setShift] = useState("");

  let [search, setSearch] = useState("");

  let [submitted, setSubmitted] = useState(null);

  function SelCourse(e) {
    if (e.target.checked) setCourse([...course, e.target.value]);
    else setCourse(course.filter((item) => item !== e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !gen || course.length === 0) {
      alert("Please fill name, email, gender and pick at least one course.");
      return;
    }
    setSubmitted({ name, email, gen, course, shift, search });
  }

  if (submitted) {
    return (
      <>
        <h1>Registration Successful</h1>
        <p>
          <b>Name:</b> {submitted.name}
        </p>
        <p>
          <b>Email:</b> {submitted.email}
        </p>
        <p>
          <b>Gender:</b> {submitted.gen}
        </p>
        <p>
          <b>Courses:</b> {submitted.course.join(", ")}
        </p>
        <p>
          <b>Shift:</b> {submitted.shift}
        </p>
        <p>
          <b>Preferred (search):</b> {submitted.search}
        </p>
        <button onClick={() => setSubmitted(null)}>Register Again</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          {" "}
          <h1>JAWA Computer Center — Registration</h1>{" "}
        </legend>

        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />

        <label>
          Select course:
          <input type="checkbox" value={"DCA"} onChange={SelCourse} /> DCA
        </label>
        <label>
          <input type="checkbox" value={"ADCP"} onChange={SelCourse} /> ADCP
        </label>
        <label>
          <input type="checkbox" value={"REACT"} onChange={SelCourse} /> REACT
        </label>
        <label>
          <input type="checkbox" value={"TALLY"} onChange={SelCourse} /> TALLY
        </label>
        <label>
          <input type="checkbox" value={"DCE"} onChange={SelCourse} /> DCE
        </label>
        <br />
        <br />

        <label>
          Gender:
          <input
            type="radio"
            name="gen"
            value={"Male"}
            onChange={(e) => setGen(e.target.value)}
          />{" "}
          MALE
        </label>
        <label>
          <input
            type="radio"
            name="gen"
            value={"Female"}
            onChange={(e) => setGen(e.target.value)}
          />{" "}
          FEMALE
        </label>
        <label>
          <input
            type="radio"
            name="gen"
            value={"Neuter"}
            onChange={(e) => setGen(e.target.value)}
          />{" "}
          NEUTER
        </label>
        <br />
        <br />

        <label htmlFor="">Shift: </label>
        <select value={shift} onChange={(e) => setShift(e.target.value)}>
          <option value="">--select shift--</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>
        <br />
        <br />

        <label htmlFor="">Course list: </label>
        <input
          list="courseList"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <datalist id="courseList">
          <option value="DCA" />
          <option value="ADCP" />
          <option value="DSE" />
          <option value="TALLY" />
        </datalist>
        <br />
        <br />

        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};
