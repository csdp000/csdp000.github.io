import React from 'react';
import styles from './Switcher.module.scss';



const Switcher = () => { 

  let isDarkModeOn;
  let bodyEl;
  
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    //다크모드 기본 값
    const storage = window.localStorage;
    bodyEl = document.getElementsByTagName('body')[0];  
    
    if(storage.getItem('darkMode') === null){
      storage.setItem('darkMode', "1");
    }  
    
    isDarkModeOn = storage.getItem('darkMode');

    if(isDarkModeOn == "1"){ 
      bodyEl.classList.add('dark');   
    }
  }

  function TurnDarkMode() { 
    
    isDarkModeOn = isDarkModeOn=='1'?'0':'1';
    isDarkModeOn == '1' ? bodyEl.classList.add('dark') : bodyEl.classList.remove('dark'); 
    
    if (typeof window !== "undefined") { 
      const storage = window.localStorage; 
      storage.setItem('darkMode', isDarkModeOn); 
    }
  }

  return (
    <div className={styles['switch__container']}>
      <span className={styles['switch__text']}>💡</span> 
      <label className={styles['switch']}>
        {isDarkModeOn == '1'
        ? <input id='DarkModeSwitcher' type='checkbox' checked/>
        : <input id='DarkModeSwitcher' type='checkbox' />}
        <span className={`${styles['slider']}`} onClick={TurnDarkMode}/>
      </label> 
    </div>
  )
}

export default Switcher