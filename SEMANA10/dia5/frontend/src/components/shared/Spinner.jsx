const Spinner = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: "0 0",
      display: "block",
      shapeRendering: "auto",
    }}
    width={props.width || 200}
    height={props.height || 200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className={props.className}
  >
    <circle
      cx={50}
      cy={50}
      r={32}
      strokeWidth={8}
      stroke="#85a2b6"
      strokeDasharray="50.26548245743669 50.26548245743669"
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
    <circle
      cx={50}
      cy={50}
      r={23}
      strokeWidth={8}
      stroke="#bbcedd"
      strokeDasharray="36.12831551628262 36.12831551628262"
      strokeDashoffset={36.128}
      fill="none"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        dur="1s"
        repeatCount="indefinite"
        keyTimes="0;1"
        values="0 50 50;-360 50 50"
      />
    </circle>
  </svg>
);

export default Spinner;
