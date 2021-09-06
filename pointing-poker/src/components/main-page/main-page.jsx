import { MainLayout } from '../mainLayout/mainLayout';
import mainLogo from '../../assets/icons/mainLogo.png';
import { Img } from '@chakra-ui/image';
import styles from './main-page.module.scss';
import { ButtonComponent } from '../button/button';
import { InputComponent } from '../input/input';

export const MainPage = () => {
  return (
    <MainLayout>
      <div className={styles.wrapperInner}>
        <div className={styles.mainLogo_block}>
          <Img
            src={mainLogo}
            alt="mainLogo"
            width={550}
            height={150}
            className={styles.mainLogo}
          />
        </div>
        <div className={styles.connect_block}>
          <h2 className={styles.connect_title}>Start your planning:</h2>
          <div className={styles.connect_flex}>
            <h3 className={styles.connect_subtitle}>Create session:</h3>
            <ButtonComponent
              width={241}
              textContent={'Start new game'}
              height={47}
              variant={'solid'}
              colorScheme={'facebook'}
            />
          </div>
        </div>
        <div className={styles.connect_block}>
          <h2 className={styles.connect_title}>OR:</h2>
          <div
            className={styles.connect_flex}
            style={{ flexDirection: 'column' }}
          >
            <h3 className={styles.connect_subtitle}>
              Connect to lobby by{' '}
              <span style={{ fontWeight: 'bold', color: '#66999b' }}>URL</span>:
            </h3>
            <div style={{ display: 'flex' }}>
              <InputComponent
                variant="outline"
                width={276}
                height={47}
                focusBorderColor="black"
                BorderColor="black"
              />
              <ButtonComponent
                variant="solid"
                width={241}
                height={47}
                textContent="Connect"
                colorScheme="facebook"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
