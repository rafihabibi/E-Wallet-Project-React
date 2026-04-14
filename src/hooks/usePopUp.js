import {useState} from 'react';

export default function usePopup(){
  const [popUpSucc, setPopUpSucc] = useState(false);

    const popupOpen = () => setPopUpSucc(true);
    const popupClose = () => setPopUpSucc(false);

    return {popupClose, popupOpen, popUpSucc};


}