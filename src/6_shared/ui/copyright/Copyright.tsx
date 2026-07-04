import React from 'react';

const Copyright: React.FC = () => {
  return <span>{`@ ${new Date().getFullYear()} Music Pulse. Licensed under MIT.`}</span>;
};

export default Copyright;