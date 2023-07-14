import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import MemberSidebar from "../components/Member/MemberSidebar";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";

const Member = () => {
  const location = useLocation();
  return (
    <main className="main">
      <div className="container container--admin">
        <MemberSidebar />
        <AnimatePresence mode="popLayout">
          <motion.section
            key={location.key}
            className="section section--courses"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <AnimatedOutlet />
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Member;
