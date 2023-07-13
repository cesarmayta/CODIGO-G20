import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";

const Auth = () => {
  const location = useLocation();
  return (
    <main className="main main--auth">
      <AnimatePresence mode="popLayout">
        <motion.section
          className="auth"
          initial={{
            opacity: 0,
            translateX: "100%",
          }}
          animate={{
            opacity: 1,
            translateX: 0,
          }}
          exit={{
            opacity: 0,
            translateX: "-100%",
          }}
          key={location.key}
        >
          <AnimatedOutlet />
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default Auth;
