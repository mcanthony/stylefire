export type State = { [key: string]: string | number };
export type Props = { [key: string]: any };
export type ChangedValues = string[];

export type Config = {
  onRead: (key: string, props: Props) => any,
  onRender: (state: State, props: Props, changedValues: ChangedValues) => void,
  aliasMap?: { [key: string]: string }
};