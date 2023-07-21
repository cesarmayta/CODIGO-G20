import { useState } from "react";
import { useOutlet } from "react-router-dom";

const AnimatedOutlet = ({ value }) => {
  const o = useOutlet(value);
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

export default AnimatedOutlet;
