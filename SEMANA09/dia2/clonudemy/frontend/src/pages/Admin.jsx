import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";

const Admin = () => {
  const location = useLocation();
  return (
    <main className="main">
      <div className="container container--admin">
        <AdminSidebar />
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

export default Admin;
