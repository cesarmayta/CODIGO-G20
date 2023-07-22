import { AnimatePresence, motion, useSpring } from "framer-motion";
import { useLocation } from "react-router-dom";
import MemberSidebar from "../components/Member/MemberSidebar";
import AnimatedOutlet from "../components/shared/AnimatedOutlet";
import { useState,useEffect } from "react";
import { API_URL } from "../constants/env"

const Member = () => {
  const [userData,setUserData] = useState({})
  const location = useLocation();
  

  const getUserData = async (token,id) => {
    try{
      const response = await fetch(`${API_URL}/user/${id}`,
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
      console.log(data)
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
