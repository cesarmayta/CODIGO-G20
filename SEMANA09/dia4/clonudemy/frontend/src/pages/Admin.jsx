import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";
import { useState,useEffect } from "react";

const Admin = () => {
  const [userData,setUserData] = useState({})
  const location = useLocation();
  

  const getUserData = async (token,id) => {
    try{
      const response = await fetch(`http://localhost:5000/user/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.status !== 200){
        console.log('respuesta',response.status);
        window.location.href = "/auth/login";
      }
      const data = await response.json();
      if(data.isAdmin === false){
        window.location.href = "/auth/login";
      }
      setUserData(data);
    }catch(error){
      console.log('error',error);
    }
  };

  useEffect(() => {
    console.log("verificando token...")
    try{
        let token = localStorage.getItem('token')
        console.log('token : ',token)
        if(token)
        {
          let payload = token.split('.')[1];
          let payloadDecoded = atob(payload);
          let payloadJSON = JSON.parse(payloadDecoded);
          console.log("id de usuario : " + payloadJSON._id);
          let userId = payloadJSON._id
          getUserData(token,userId);
        }
        else
        {
          console.log('no hay token')
          window.location.href = "/auth/login";
        }
    } catch (error) {
			console.log('error',error);
			localStorage.removeItem('token');
      window.location.href = "/auth/login";
		}
  }, []);

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
