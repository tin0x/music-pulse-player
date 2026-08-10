import React, { useState } from 'react';
import classes from '@widgets/player-bar-widget/ui/PlayerBarWidget.module.scss';
import { useInitPlayerBarWidget } from '@widgets/player-bar-widget/model/useInitPlayerBarWidget.ts';
import ChooseRepeatTrack from '@features/player-controls/ui/choose-repeat-track/ChooseRepeatTrack.tsx';
import Button from '@shared/ui/button/Button.tsx';
import IconDots from '@shared/assets/icons/dots.svg?react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import { TrackInfo } from '@entities/player';
import {
  ChangeDurationRange,
  ChangeLoudnessRange,
  ChooseShuffleList,
  SeekBackward,
  SeekForward,
  SwitchNextTrack,
  SwitchPreviousTrack,
  TogglePlayback,
} from '@features/player-controls';
import { ToggleFavorite } from '@features/toggle-favorite';

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
