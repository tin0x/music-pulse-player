export type PopupProps = {
  className?: string;
  message: string;
  lang: 'en' | 'ua';
  onConfirm: () => void;
  onCancel: () => void;
  isLoading: boolean;
};
