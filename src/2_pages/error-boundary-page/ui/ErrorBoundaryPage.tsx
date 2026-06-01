import React from 'react';
import classes from '@pages/error-boundary-page/ui/ErrorBoundaryPage.module.scss';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useInitErrorBoundaryPage } from '@pages/error-boundary-page/model/useInitErrorBoundaryPage.ts';

const ErrorBoundaryPage: React.FC = () => {
  const { lang, handleReloadPage, handleRedirectToMainPage } = useInitErrorBoundaryPage();

  return (
    <section className={classes.errorBoundary}>
      <div className={classes.errorBoundaryWrapper}>
        <QueryPlaceholder
          lang={lang}
          variant="globalError"
          onClick={handleReloadPage}
          onClickAlternative={handleRedirectToMainPage}
        />
      </div>
    </section>
  );
};

export default ErrorBoundaryPage;
