import { Switch, Input, Slider } from './style';

const SwitchButton = ({ ...props }) => {
  return (
    <Switch {...props}>
      <Input type="checkbox" checked={props.value} readOnly />
      <Slider />
    </Switch>
  );
};

export default SwitchButton;