import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [Onlinestatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return Onlinestatus;
};

export default useOnlineStatus;

// import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); // initial status

//   useEffect(() => {
//     const handleOnline = () => setOnlineStatus(true);
//     const handleOffline = () => setOnlineStatus(false);

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     // Cleanup when component unmounts
//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return onlineStatus;
// };

// export default useOnlineStatus;
