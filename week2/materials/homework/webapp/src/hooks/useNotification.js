import { useState } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState("");

  const createNotification = (text) => {
    setNotifications(text);
   setTimeout(()=>{
    setNotifications("")
   }, 15000)
  };

  return { notifications, createNotification };
}

export default useNotifications;