import { MainLayout } from '../../components/mainLayout/mainLayout';
import mainLogo from '../../assets/icons/mainLogo.png';
import { Img } from '@chakra-ui/image';
import styles from './main-page.module.scss';
import { ButtonComponent } from '../../components/button/button';
import { Modal } from '../../components/modal/modal';
import { useState } from 'react';
import { FormComponent } from '../../components/form/form';
import { Switch } from '@chakra-ui/switch';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '@chakra-ui/input';
import { Flex } from '@chakra-ui/layout';

export const MainPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isObserver, setIsObserver] = useState(false);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleIsObserverSwitch = () => {
    isObserver ? setIsObserver(false) : setIsObserver(true);
    isObserver
      ? dispatch({ type: 'SET_IS_OBSERVER', payload: false })
      : dispatch({ type: 'SET_IS_OBSERVER', payload: true });
  };

  const handleIsMasterClick = (param) => {
    dispatch({ type: 'SET_IS_MASTER', payload: param });
  };

  const handleOpenModalClick = (param) => {
    setModalActive(true);
    document.body.style.overflowY = 'hidden';
    handleIsMasterClick(param);
  };

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
              onClick={() => handleOpenModalClick(true)}
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
            <Flex paddingBottom={'100px'}>
              <Input
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
                onClick={() => handleOpenModalClick(false)}
              />
            </Flex>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.registration}>
          <div className={styles.registration__block}>
            <h2 className={styles.modal__title}>Connect to lobby</h2>
            <div>
              <h3>Connect as Observer</h3>
              <Switch size="md" onChange={handleIsObserverSwitch} />
            </div>
          </div>
          <FormComponent>
            <div className={styles.form__control}>
              <ButtonComponent
                width={189}
                height={'60px'}
                textContent={'Confirm'}
                variant="solid"
                colorScheme="facebook"
                type={'submit'}
              />
              <ButtonComponent
                width={189}
                height={'60px'}
                textContent={'Cancel'}
                variant="outline"
                colorScheme="facebook"
                onClick={() => {
                  setModalActive(false);
                  document.body.style.overflowY = 'visible';
                }}
              />
            </div>
          </FormComponent>
        </div>
      </Modal>
    </MainLayout>
  );
};
