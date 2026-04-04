import * as S from './style';
import { SunIcon, MoonIcon } from '@phosphor-icons/react';

const SwitchButton = ({ ...props }) => {
  return (
    <S.Button onClick={props.onToggle}>
      {props.value ? (
          <MoonIcon size={20}/>
        ) : (
          <SunIcon size={20} />
        )}
    </S.Button>
  );
};

export default SwitchButton;
