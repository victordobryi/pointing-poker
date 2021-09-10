import { MainLayout } from '../../components/mainLayout/mainLayout';
import { Flex, Img } from '@chakra-ui/react';
import pencil from '../../assets/icons/pencil.png';
const issuesNumbers = [13, 19, 322, 533, 666, 245, 900, 400, 3232, 455656];
export const ResultPage = () => {
  return (
    <MainLayout>
      <Flex justifyContent={'center'}>
        Spring 23 planning (issues {''}
        {issuesNumbers.map((issue, index) =>
          issuesNumbers.length > index + 1 ? (
            <span key={index}>{issue}, </span>
          ) : (
            <span key={index}>{issue} </span>
          )
        )}
        )<Img src={pencil}></Img>
      </Flex>
    </MainLayout>
  );
};
