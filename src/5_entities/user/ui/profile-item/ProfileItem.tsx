import React, { useRef, useState } from 'react';
import MediaItem from '@shared/ui/media-item/MediaItem.tsx';
import classes from '@entities/user/ui/profile-item/ProfileItem.module.scss';
import iconAvatar from '@shared/assets/images/human.webp';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import IconBell from '@shared/assets/icons/bell.svg?react';
import { useClickOutside } from '@shared/lib/hooks/ui/useClickOutside.ts';
import type { ProfileItemProps } from '@entities/user/types.ts';
import Button from '@shared/ui/button/Button';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const ProfileItem: React.FC<ProfileItemProps> = ({ user, messages, renderMessage, isActive, lang }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const refElement = useRef<HTMLDivElement | null>(null);

  useClickOutside(refElement, () => setIsOpenDropdown(false));

  const toggleDropdown = () => setIsOpenDropdown((prev) => !prev);

  const t = getTranslate(lang);
  const subscriptionType = t.str[user.subscriptionType as keyof typeof t.str] || user.subscriptionType;
  const statusType = t.str[user.statusUser as keyof typeof t.str] || user.statusUser;

  return (
    <MediaItem
      className={classes.profileItem}
      classNameAvatar={classes.profileItemAvatar}
      srcAvatar={user.avatar ? user.avatar : iconAvatar}
      title={user?.username ?? ''}
      subtext={`${subscriptionType} ${statusType}`}
      refElement={refElement}
      pathTo="/profile"
      isBorder={isActive}
      alt="profile avatar"
      slots={{
        action: (
          <>
            <Button className={classes.profileItemButton} onClick={toggleDropdown} aria-label="open messages" lang="en">
              {messages.length > 0 && <div className={classes.profileItemCircle}></div>}
              <IconBell stroke="currentColor" aria-hidden />
            </Button>
            <Dropdown className={classes.profileItemDropdown} isOpen={isOpenDropdown}>
              <ul className={classes.profileItemCardList}>
                {messages.length === 0 ? (
                  <li className={classes.profileItemItemCenter}>
                    <span className={classes.profileItemEmpty}>{t.str.messagePlaceholderProfile}</span>
                  </li>
                ) : (
                  messages.map((m) => (
                    <li className={classes.profileItemItem} key={m.id}>
                      {renderMessage ? renderMessage(m) : null}
                    </li>
                  ))
                )}
              </ul>
            </Dropdown>
          </>
        ),
      }}
    />
  );
};

export default ProfileItem;
