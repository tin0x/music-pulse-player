import React from 'react';
import { useFetchUser } from '@widgets/profile-card-widget/model/useFetchUser.ts';
import type { ProfileCardWidgetProps } from '@widgets/profile-card-widget/types.ts';
import ProfileItem from '@entities/user/ui/profile-item/ProfileItem.tsx';
import ProfileCardSkeleton from '@shared/ui/skeletons/profile-card-skeleton/ProfileCardSkeleton.tsx';
import { useIsAuth } from '@features/auth/model/hooks/useFetchToken.ts';
import { useInitProfileCardWidget } from '@widgets/profile-card-widget/model/useInitProfileCardWidget.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';

const ProfileCardWidget: React.FC<ProfileCardWidgetProps> = ({ renderMessage }) => {
  const { isPath, lang } = useInitProfileCardWidget();
  const { user, messages } = useFetchUser();
  const { isAuth } = useIsAuth();

  const reversedMessages = [...messages].reverse();

  if (!isAuth) {
    return <ProfileCardSkeleton />;
  }

  if (!user) {
    return <QueryPlaceholder lang={lang} variant="empty" />;
  }

  return (
    <ProfileItem user={user} messages={reversedMessages} renderMessage={renderMessage} isActive={isPath} lang={lang} />
  );
};

export default ProfileCardWidget;
