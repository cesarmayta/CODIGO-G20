const Curve = ({ rotate, color, bgColor }) => {
  return (
    <div className="curve-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        className={"curve".concat(rotate ? " curve--rotate" : "")}
        style={{
          fill: color || "#000",
          backgroundColor: bgColor || "transparent",
        }}
      >
        <path d="M 0 0 c 0 0 200 50 500 50 s 500 -50 500 -50 v 101 h -1000 v -100 z"></path>
      </svg>
    </div>
  );
};

export default Curve;
