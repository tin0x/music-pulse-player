import React, { useState } from 'react';
import classes from '@widgets/player-bar-widget/ui/PlayerBarWidget.module.scss';
import TrackInfo from '@entities/player/ui/track-info/TrackInfo.tsx';
import SeekBackward from '@features/player-controls/ui/seek-backward/SeekBackward.tsx';
import SwitchPreviousTrack from '@features/player-controls/ui/switch-previous-track/SwitchPreviousTrack.tsx';
import TogglePlayback from '@features/player-controls/ui/toggle-playback/TogglePlayback.tsx';
import SwitchNextTrack from '@features/player-controls/ui/switch-next-track/SwitchNextTrack.tsx';
import SeekForward from '@features/player-controls/ui/seek-forward/SeekForward.tsx';
import ChangeDurationRange from '@features/player-controls/ui/change-duration-range/ChangeDurationRange.tsx';
import ChangeLoudnessRange from '@features/player-controls/ui/change-loudness-range/ChangeLoudnessRange.tsx';
import { useInitPlayerBarWidget } from '@widgets/player-bar-widget/model/useInitPlayerBarWidget.ts';
import ChooseShuffleList from '@features/player-controls/ui/choose-shuffle-list/ChooseShuffleList.tsx';
import ChooseRepeatTrack from '@features/player-controls/ui/choose-repeat-track/ChooseRepeatTrack.tsx';
import ToggleFavorite from '@features/toggle-favorite/ui/ToggleFavorite.tsx';
import Button from '@shared/ui/button/Button.tsx';
import IconDots from '@shared/assets/icons/dots.svg?react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';

const PlayerBarWidget: React.FC = () => {
  const { playerContext, currentTrack, isThisPlayingTrack, isPlaying, isBuffering } = useInitPlayerBarWidget();

  const [isOpenExtraControls, setIsOpenExtraControls] = useState(false);

  if (!currentTrack || !playerContext) return;

  return (
    <div className={classes.playerBar}>
      <TrackInfo
        poster={currentTrack.poster}
        name={currentTrack.name}
        artist={{
          id: currentTrack.artist.id,
          name: currentTrack.artist.name,
        }}
        isThisPlayingTrack={isThisPlayingTrack}
        isPlaying={isPlaying}
        isBuffering={isBuffering}
      />

      <div className={classes.playerBarControls}>
        <SeekBackward />
        <SwitchPreviousTrack />
        <TogglePlayback className={classes.playerBarPlayback} playerContext={playerContext} track={currentTrack} />
        <SwitchNextTrack />
        <SeekForward />
      </div>

      <div className={classes.playerBarControlsAdaptive}>
        <TogglePlayback className={classes.playerBarPlayback} playerContext={playerContext} track={currentTrack} />
      </div>

      <ChangeDurationRange />
      <ChangeLoudnessRange />

      <div className={classes.playerBarExtraControls}>
        <ChooseShuffleList />
        <ChooseRepeatTrack />
        <ToggleFavorite type="track" id={currentTrack.id} variantButton="icon" />
      </div>

      <div className={classes.playerBarExtraControlsDropdownWrapper}>
        <Button
          className={classes.playerBarExtraControlsDropdownButton}
          onClick={() => setIsOpenExtraControls((prev) => !prev)}
        >
          <IconDots aria-hidden />
        </Button>
        <Dropdown className={classes.playerBarExtraControlsDropdown} isOpen={isOpenExtraControls}>
          <ChooseShuffleList />
          <ChooseRepeatTrack />
          <ToggleFavorite type="track" id={currentTrack.id} variantButton="icon" />
        </Dropdown>
      </div>
    </div>
  );
};

export default PlayerBarWidget;
