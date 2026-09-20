import React from 'react';

export type ClearHistoryArgs = {
  userId: string;
  entityType: string;
};

export type ClearHistoryProps = {
  type: 'artists' | 'tracks';
  children: React.ReactNode;
};
