import React from 'react';
import classes from '@pages/not-found-page/ui/NotFoundPage.module.scss';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const lang = useAppSelector(getCurrentLanguage);

  return (
    <section className={classes.notFound}>
      <div className={classes.notFoundWrapper}>
        <QueryPlaceholder lang={lang} variant="clientError" onClick={() => navigate('/', { replace: true })} />
      </div>
    </section>
  );
};

export default NotFoundPage;
