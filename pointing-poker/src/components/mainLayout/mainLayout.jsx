import React, { useState, Fragment } from 'react';
import { Img } from '@chakra-ui/image';
import { Link } from '@chakra-ui/layout';
import Chat from '../chat/Chat';
import chatIcon from '../../assets/icons/chat.svg';
import logo from '../../assets/icons/logo.png';
import logoRss from '../../assets/icons/logo-rs.svg';
import styles from './mainLayout.module.scss';

export const MainLayout = ({ children }) => {
  const [chatActive, setChatActive] = useState(false);
  const handleClickChat = () => {
    if (chatActive) {
      setChatActive(false);
    } else {
      setChatActive(true);
    }
  };
  return (
    <Fragment>
      <div className={styles.header__firstRow}></div>
      <div className={styles.header__secondRow}></div>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Img src={logo} alt='logo' width={70} height={70} />
        </div>
        <div className={styles.chatIcon}>
          <Img
            src={chatIcon}
            alt='chat'
            width={5}
            height={5}
            _hover={{ cursor: 'pointer' }}
            _active={{ bg: '#60DABF' }}
            onClick={() => handleClickChat()}
          />
        </div>
        <Chat active={chatActive} />

        <main>{children}</main>
      </div>
      <footer className={styles.footer}>
        {/* <div className={styles.wrapper}> */}
          <div className={styles.footer__block}>
            <div className={styles.footer__autors}>
              <Link href='https://github.com/alexej1900'>Alexej Bodnarchuk</Link>
              <Link href='https://github.com/victordobryi'>Victar Kasilkin</Link>
              <Link href='https://github.com/barmenski'>Alexandr Bondar</Link>
            </div>
            <span>2021</span>
            <Link href='https://rs.school/react/'>
              <Img src={logoRss} alt='logoRss' width={70} height={70} />
            </Link>
          </div>
        {/* </div> */}
      </footer>
    </Fragment>
  );
};
