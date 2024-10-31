import { commands } from './commands';

type ValueOf<T> = T[keyof T];

const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

export const C = ({ command }: { command: ValueOf<typeof commands> }) => (
  <button onClick={() => copyToClipboard(command)}>{command}</button>
);
