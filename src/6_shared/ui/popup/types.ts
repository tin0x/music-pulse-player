import type { InitialState } from '@entities/user/types.ts';

export type PopupProps = {
  className?: string;
  message: string;
  lang: InitialState['language'];
  onConfirm: () => void;
  onCancel: () => void;
};
