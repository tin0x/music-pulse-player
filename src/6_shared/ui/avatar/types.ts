export type AvatarProps = {
  className?: string;
  src: string;
  type: 'track' | 'user';
  alt: string;
  isActive?: boolean;
  isThisPlayingTrack?: boolean;
  isPlaying?: boolean;
  isBuffering?: boolean;
  pathTo?: string;
};
