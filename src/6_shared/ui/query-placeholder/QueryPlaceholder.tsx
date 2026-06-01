import React from 'react';
import classes from '@shared/ui/query-placeholder/QueryPlaceholder.module.scss';
import type { QueryPlaceholderProps } from '@shared/ui/query-placeholder/types.ts';
import clsx from 'clsx';
import Button from '@shared/ui/button/Button.tsx';
import { errors } from '@shared/ui/query-placeholder/constants.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const QueryPlaceholder: React.FC<QueryPlaceholderProps> = ({
  className,
  variant,
  alternativeMessage,
  lang,
  onClick,
  onClickAlternative,
}) => {
  const t = getTranslate(lang);

  const message = errors[lang][variant].message;
  const buttonText = variant !== 'empty' ? errors[lang][variant].buttonText : null;
  const buttonTextAlternative = variant === 'globalError' ? errors[lang][variant].buttonTextAlternative : null;
  const Icon = variant === 'clientError' || variant === 'globalError' ? errors[lang][variant].Icon : null;

  return (
    <div className={clsx(className, classes.queryPlaceholder)}>
      {Icon && <Icon className={classes.queryPlaceholderIcon} />}
      <p className={classes.queryPlaceholderText}>
        {alternativeMessage || (message ?? `${t.str.unknown} ${t.str.error}`)}
      </p>
      <div className={classes.queryPlaceholderButtons}>
        {buttonText && (
          <Button className={classes.queryPlaceholderButton} onClick={onClick}>
            {buttonText}
          </Button>
        )}
        {buttonTextAlternative && (
          <Button className={classes.queryPlaceholderButton} onClick={onClickAlternative}>
            {buttonTextAlternative}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QueryPlaceholder;
