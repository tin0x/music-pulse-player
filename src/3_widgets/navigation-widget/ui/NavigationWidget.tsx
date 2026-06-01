import React from 'react';
import NavigationWrapper from '@shared/ui/navigation-wrapper/NavigationWrapper.tsx';
import { NavLink } from 'react-router-dom';
import classes from '@widgets/navigation-widget/ui/NavigationWidget.module.scss';
import clsx from 'clsx';
import { dataNavigation } from '@widgets/navigation-widget/model/constants.ts';
import { useAppSelector } from '@shared/lib/hooks/redux/useAppSelector.ts';
import { getCurrentLanguage } from '@entities/user/model/selectors.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const NavigationWidget: React.FC = () => {
  const lang = useAppSelector(getCurrentLanguage);
  const t = getTranslate(lang);

  return (
    <div className={classes.navigation}>
      {dataNavigation.map((section) => (
        <NavigationWrapper key={section.title} label={t.str[section.title as keyof typeof t.str]}>
          <nav className={classes.navigationNav}>
            {section.items.map((item) => (
              <NavLink
                className={({ isActive }) => clsx(classes.navigationItem, { [classes.navigationItemActive]: isActive })}
                key={item.to}
                to={item.to}
              >
                {item.icon && <item.icon className={classes.navigationIcon} stroke="currentColor" />}
                {item.label && <span>{t.str[item.label as keyof typeof t.str]}</span>}
              </NavLink>
            ))}
          </nav>
        </NavigationWrapper>
      ))}
    </div>
  );
};

export default NavigationWidget;
