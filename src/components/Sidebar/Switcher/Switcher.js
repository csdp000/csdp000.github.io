import React from 'react';
import styles from './Switcher.module.scss';



const Switcher = () => { 

  let isDarkModeOn = true;
  let bodyEl;

  if (typeof window !== "undefined" && typeof document !== "undefined") {
    //다크모드 기본 값 
    window.localStorage.setItem('darkMode', isDarkModeOn);  
    bodyEl = document.getElementsByTagName('body')[0];   
    bodyEl.classList.add('dark');  
 
  }

  function TurnDarkMode() {
    isDarkModeOn ?  bodyEl.classList.remove('dark') : bodyEl.classList.add('dark');
    isDarkModeOn = !isDarkModeOn;
  
    if (typeof window !== "undefined") {
      window.localStorage.setItem('darkMode', isDarkModeOn);
    }
  }
  return (
    <div className={styles['switch__container']}>
      <span className={styles['switch__text']}>💡</span> 
      <label className={styles['switch']}>
        {isDarkModeOn
          ? <input id='DarkModeSwitcher' type='checkbox' />
          : <input id='DarkModeSwitcher' type='checkbox' checked />}
        <span className={`${styles['slider']}`} onClick={TurnDarkMode}/>
      </label> 
    </div>
  )
}

export default Switcher