import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import classes from '@app/layout/ui/Layout.module.scss';
import HeaderWidget from '@widgets/header-widget/ui/HeaderWidget.tsx';
import FooterWidget from '@widgets/footer-widget/ui/FooterWidget.tsx';
import AsideWidget from '@widgets/aside-widget/ui/AsideWidget.tsx';
import MainWidget from '@widgets/main-widget/ui/MainWidget.tsx';
import ProfileCardWidget from '@widgets/profile-card-widget/ui/ProfileCardWidget.tsx';
import Logo from '@shared/ui/logo/Logo.tsx';
import NavigationWidget from '@widgets/navigation-widget/ui/NavigationWidget.tsx';
import IconLogo from '@shared/assets/icons/logo.svg?react';
import VersionInfo from '@shared/ui/version-info/VersionInfo.tsx';
import MessageCardWidget from '@widgets/message-card-widget/ui/MessageCardWidget.tsx';
import TopArtistsWidget from '@widgets/top-artists-widget/ui/TopArtistsWidget.tsx';
import RecentlyPlayedWidget from '@widgets/recently-played-widget/ui/RecentlyPlayedWidget.tsx';
import PlayerBarWidget from '@widgets/player-bar-widget/ui/PlayerBarWidget.tsx';
import HistoryControls from '@features/toggle-app-history/ui/history-controls/HistoryControls.tsx';
import LogoContainer from '@shared/ui/logo-container/LogoContainer.tsx';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconClose from '@shared/assets/icons/close.svg?react';
import clsx from 'clsx';
import Copyright from '@shared/ui/copyright/Copyright.tsx';

const Layout: React.FC = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(() => window.innerWidth >= 1600);
  const [isAsideOpen, setIsAsideOpen] = useState(() => window.innerWidth >= 1600);

  const { pathname } = useLocation();

  useEffect(() => {
    if (window.innerWidth < 1600) {
      const timer = setTimeout(() => {
        setIsHeaderOpen(false);
        setIsAsideOpen(false);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={classes.layout} data-header-open={isHeaderOpen} data-aside-open={isAsideOpen}>
      <HeaderWidget className={classes.layoutHeaderWidget} isOpen={isHeaderOpen}>
        <LogoContainer className={classes.layoutLogoContainer}>
          <Logo Icon={IconLogo} text="Music Pulse" pathTo="/dashboard" />
          <HistoryControls className={classes.layoutHistoryControls} />
          <Button className={classes.layoutButtonClose} onClick={() => setIsHeaderOpen(false)}>
            <IconClose />
          </Button>
        </LogoContainer>
        <NavigationWidget />
        <div className={classes.layoutBottomHeader}>
          <VersionInfo text={`${t.str.versionHeader} 1.1.0`} />
          <Copyright />
        </div>
      </HeaderWidget>
      <MainWidget
        isHeaderOpen={isHeaderOpen}
        isAsideOpen={isAsideOpen}
        handleToggleHeader={() => {
          setIsHeaderOpen((prev) => !prev);
          setIsAsideOpen(false);
        }}
        handleToggleAside={() => {
          setIsAsideOpen((prev) => !prev);
          setIsHeaderOpen(false);
        }}
      >
        <Outlet />
      </MainWidget>
      <AsideWidget className={classes.layoutAsideWidget} isOpen={isAsideOpen}>
        <ProfileCardWidget renderMessage={(m) => <MessageCardWidget id={m.id} title={m.title} text={m.text} />} />
        <Button
          className={clsx(classes.layoutButtonClose, classes.layoutButtonCloseFlex)}
          onClick={() => setIsAsideOpen(false)}
        >
          <IconClose />
        </Button>
        <TopArtistsWidget />
        <RecentlyPlayedWidget />
      </AsideWidget>
      <FooterWidget>
        <PlayerBarWidget />
      </FooterWidget>
    </div>
  );
};

export default Layout;
