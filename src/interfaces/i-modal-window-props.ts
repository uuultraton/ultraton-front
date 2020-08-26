export interface IModalWindowProps {
  open: boolean;
  direction: string;
  changeSelectedBlock: (block: string) => void;
}
