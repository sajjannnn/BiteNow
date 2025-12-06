import { useEffect, useState } from "react";


const useOnlineStatus = () : boolean =>{
    const [isOnline, setIsOnline] = useState(true);
    //input 
  useEffect( () => {
      window.addEventListener('online',() => {
        setIsOnline(true);
    })
    window.addEventListener('offline',() => {
        setIsOnline(false);
    })

  },[])
  

    // output true or false 
  return isOnline;

}
export default useOnlineStatus;