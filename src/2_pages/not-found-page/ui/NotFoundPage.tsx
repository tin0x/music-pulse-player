import useLanguage from '@app/providers/language/useLanguage';
import classes from '@pages/not-found-page/ui/NotFoundPage.module.scss';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguage();

  return (
    <section className={classes.notFound}>
      <div className={classes.notFoundWrapper}>
        <QueryPlaceholder
          lang={currentLanguage}
          variant="clientError"
          onClick={() => navigate('/', { replace: true })}
        />
      </div>
    </section>
  );
};

export default NotFoundPage;
