import React from 'react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import { Link } from 'react-router-dom';
import classes from '@entities/search/ui/input-search/InputSearch.module.scss';
import type { InputSearchProps } from '@entities/search/types.ts';
import { getTranslate } from '@shared/lib/utils/ui/getTranslate.ts';

const InputSearch: React.FC<InputSearchProps> = ({ response, actionSlot, isLoading, lang }) => {
  const isOpen = !isLoading && response.length > 0;

  const t = getTranslate(lang);

  return (
    <div className={classes.inputSearch}>
      {actionSlot}
      <Dropdown className={classes.inputSearchDropdown} isOpen={isOpen}>
        <ul className="inputSearchList">
          {response?.map((item) => {
            const routePath = item.type === 'track' ? `/track/${item.trackId}` : `/artist/${item.id}?page=1&limit=10`;
            const typeResult = item.type === 'track' ? t.str.resultTypeTrack : t.str.resultTypeArtist;

            return (
              <li className="inputSearchItem" key={item.type === 'track' ? item.trackId : item.id}>
                <Link className={classes.inputSearchLink} to={routePath}>
                  <span className={classes.inputSearchLinkName}>{item.name}</span>
                  <span className={classes.inputSearchLinkLabel}>{typeResult}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Dropdown>
    </div>
  );
};

export default InputSearch;
