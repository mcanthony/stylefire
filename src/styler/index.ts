import { onFrameRender } from 'framesync';
import { State, Props, Config, ChangedValues } from './types';

const createStyler({ onRead, onRender }: Config) => (props: Props) => {
  const state: State = {};
  const changedValues: ChangedValues = [];
  let hasChanged: boolean = false;

  const setValue = (key: string, value: any) => {
    const currentValue = state[key];
    state[key] = value;

    if (state[key] !== currentValue) {
      hasChanged = true;
      changedValues.push(key);
    }
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
