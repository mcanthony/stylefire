import { onFrameRender } from 'framesync';

type State = { [key: string]: string | number };
type Props = { [key: string]: string | number };
type ChangedValues = string[];

type Config = {
  onRead: (key: string, props: Props) => any,
  onRender: (state: State, props: Props, changedValues: ChangedValues) => void
};

const createStyler({ onRead, onRender }: Config) => (props: Props) => {
  const state: State = {};
  const changedValues: ChangedValues = [];
  let hasChanged: boolean = false;

  const setValue = (key: string, value: any) => {

  };

  const render = () => {
    onRender(state, props, changedValues);
  };

  return {
    get: function (key: string) {
      return (key)
        ? (state[key] !== undefined)
          ? state[key]
          : onRead(key, props)
        : state;
    },
    set: function (values: string | State, value?: any) {
      if (typeof values === 'string') {
        setValue(values, value);
      } else {
        for (const key in values) {
          setValue(key, values[value]);
        }
      }

      if (hasChanged) onFrameRender(render);

      return this;
    },
    render: function (forceRender = false) {
      if (forceRender || hasChanged) render();

      hasChanged = false;
      changedValues.length = 0;

      return this;
    }
  };
};

export default createStyler;
