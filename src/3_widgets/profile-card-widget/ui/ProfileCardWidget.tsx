import { ProfileItem } from '@entities/user';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useFetchUser } from '@widgets/profile-card-widget/model/useFetchUser.ts';
import { useInitProfileCardWidget } from '@widgets/profile-card-widget/model/useInitProfileCardWidget.ts';
import type { ProfileCardWidgetProps } from '@widgets/profile-card-widget/types.ts';
import React from 'react';

const ProfileCardWidget: React.FC<ProfileCardWidgetProps> = ({ renderMessage }) => {
  const { isPath, lang } = useInitProfileCardWidget();
  const { user, messages } = useFetchUser();

  const reversedMessages = [...messages].reverse();

  if (!user) {
    return <QueryPlaceholder lang={lang} variant="empty" />;
  }

  return (
    <ProfileItem user={user} messages={reversedMessages} renderMessage={renderMessage} isActive={isPath} lang={lang} />
  );
};

export default ProfileCardWidget;
