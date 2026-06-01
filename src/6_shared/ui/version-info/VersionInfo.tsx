import React from 'react';
import classes from '@shared/ui/version-info/VersionInfo.module.scss';

const VersionInfo: React.FC<{ text: string }> = ({ text }) => {
  return <span className={classes.versionInfo}>{text}</span>;
};

export default VersionInfo;
