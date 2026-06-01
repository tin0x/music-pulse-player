import React from 'react';
import classes from '@entities/track/ui/tracks/track-list/TrackList.module.scss';
import Subtitle from '@shared/ui/subtitle/Subtitle.tsx';
import IconHeadphone from '@shared/assets/icons/headphone.svg?react';
import TrackItem from '@entities/track/ui/tracks/track-item/TrackItem.tsx';
import type { TrackListProps } from '@entities/track/types.ts';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Equalizer from '@shared/ui/equalizer/Equalizer.tsx';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const TrackList: React.FC<TrackListProps> = React.memo(
  ({
    className,
    subtitle,
    tracks,
    lang,
    renderAction,
    renderDuration,
    isLinkShowMore,
    pathTo,
    isPlaying,
    isBuffering,
    currentTrackId,
    currentPage,
    tracksLimitPerPage,
    limitTracks,
  }) => {
    if (!tracks || tracks.length === 0) return;

    const t = getTranslate(lang);

    const filteredTracks = tracks.slice(0, limitTracks || tracks.length);

    return (
      <div className={clsx(className, classes.trackList)}>
        <div className={classes.trackListTopBar}>
          <Subtitle Icon={IconHeadphone} text={subtitle || 'Top Music'} />
          {isLinkShowMore && pathTo && (
            <Link className={classes.trackListLink} to={pathTo}>
              {t.str.linkTopMusic}
            </Link>
          )}
        </div>

        <ul className={classes.trackListList}>
          {filteredTracks.map((track, index) => {
            const isTrackActive = currentTrackId === track.id;
            const isTrackPlaying = isTrackActive && isPlaying;
            const currentIndex =
              !currentPage || !tracksLimitPerPage ? index + 1 : (currentPage - 1) * tracksLimitPerPage + (index + 1);

            return (
              <li className={classes.trackListItem} key={track.id}>
                <TrackItem
                  index={currentIndex}
                  avatar={track.cover}
                  title={`${track.title} - ${track.user.name}`}
                  beforeDuration={
                    <Equalizer className={classes.trackListEqualizer} isActive={isTrackPlaying && !isBuffering} />
                  }
                  duration={renderDuration(track)}
                  actionSlot={renderAction(track)}
                  isActive={isTrackActive}
                  pathTo={`/track/${track.id}`}
                  id={track.id}
                  isTrackActive={isTrackActive}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  },
);

export default TrackList;
