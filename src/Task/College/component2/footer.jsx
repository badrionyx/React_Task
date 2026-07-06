import "../pages2/collegeStyle.css";

export let Myfooter = () => {
  return (
    <footer className="site-footer">
      <p>Mazharul Uloom College · Morning & Evening Shifts</p>
      <p className="muted">
        © {new Date().getFullYear()} Built with ♥ by BADRINATH R.
      </p>
    </footer>
  );
};
