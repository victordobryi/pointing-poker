import { MainLayout } from '../../components/mainLayout/mainLayout';
import mainLogo from '../../assets/icons/mainLogo.png';
import { Img } from '@chakra-ui/image';
import styles from './main-page.module.scss';
import { ButtonComponent } from '../../components/button/button';
import { InputComponent } from '../../components/input/input';
import { Modal } from '../../components/modal/modal';
import { useState } from 'react';
import { Form } from '../../components/form/form';

export const MainPage = () => {
  const [modalActive, setModalActive] = useState(false);
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
              onClick={() => setModalActive(true)}
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
                type="text"
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
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="registation">
          <div className="registration__block">
            <h2 className="modal__title">Connect to lobby</h2>
          </div>

          <Form />
          <div className={styles.form__control}>
            <ButtonComponent
              width={189}
              height={'60px'}
              textContent={'Confirm'}
              variant="solid"
              colorScheme="facebook"
            />
            <ButtonComponent
              width={189}
              height={'60px'}
              textContent={'Cancel'}
              variant="outline"
              colorScheme="facebook"
            />
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
};
