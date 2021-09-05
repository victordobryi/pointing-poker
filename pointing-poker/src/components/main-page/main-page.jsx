import { ButtonComponent } from '../button/button';

export const MainPage = () => {
  return (
    <div>
      <ButtonComponent
        width={100}
        textContent="button"
        height={5}
        onClick={() => console.log('test')}
        variant="outline"
      />
    </div>
  );
};
