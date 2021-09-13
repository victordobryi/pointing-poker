import { Fragment } from 'react';
import logo from '../../assets/icons/logo.png';
import logoRss from '../../assets/icons/logo-rs.svg';
import styles from './mainLayout.module.scss';
import { Img } from '@chakra-ui/image';
import { Box, Flex, Link } from '@chakra-ui/layout';
import { EmailIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
export const MainLayout = ({ children }) => {
  const user = useSelector((state) => state.user);

  return (
    <Fragment>
      <div className={styles.header__firstRow}></div>
      <div className={styles.header__secondRow}></div>
      <div className={styles.wrapper}>
        <Flex justify="space-between">
          <Box>
            <div className={styles.logo}>
              <Img src={logo} alt="logo" width={70} height={70} />
            </div>
          </Box>
          {user.isChatOn ? (
            <Box>
              <div className={styles.logo_mail}>
                <EmailIcon color="#fff" />
              </div>
            </Box>
          ) : null}
        </Flex>
        <main>{children}</main>
      </div>
      <footer className={styles.footer}>
        <div className={styles.wrapper}>
          <div className={styles.footer__block}>
            <Link href="https://github.com/alexej1900">Alexej Bodnarchuk</Link>
            <Link href="https://github.com/victordobryi">Victar Kasilkin</Link>
            <Link href="https://github.com/barmenski">Alexandr Bondar</Link>
            <span>2021</span>
            <Link href="https://rs.school/react/">
              <Img src={logoRss} alt="logoRss" width={70} height={70} />
            </Link>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
