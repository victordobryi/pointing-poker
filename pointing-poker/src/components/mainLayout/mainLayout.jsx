import { Fragment } from 'react';
import logo from '../../assets/icons/logo.png';
import styles from './mainLayout.module.scss';
import { Img } from '@chakra-ui/image';
export const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <div className={styles.header__firstRow}></div>
      <div className={styles.header__secondRow}></div>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Img src={logo} alt="logo" width={70} height={70} />
        </div>
        <div>{children}</div>
      </div>
    </Fragment>
  );
};
