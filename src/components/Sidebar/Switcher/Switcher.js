import React from 'react';
import styles from './Switcher.module.scss';



const Switcher = () => { 

  let isDarkModeOn = true;
  window.localStorage.setItem('darkMode', isDarkModeOn); 
  const bodyEl = document.getElementsByTagName('body')[0]; 
  //다크모드 기본 값 
  bodyEl.classList.add('dark');  

  function TurnDarkMode() {
    isDarkModeOn ?  bodyEl.classList.remove('dark') : bodyEl.classList.add('dark');
    isDarkModeOn = !isDarkModeOn;
    window.localStorage.setItem('darkMode', isDarkModeOn);
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