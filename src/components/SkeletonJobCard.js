import React from 'react';
import User from './Skeleton';

const SkeletonJobCard = ({ users }) => {
  return (
    <div className="user-list">
      {users && users.map((user) => <User key={user.login.uuid} {...user} />)}
    </div>
  );
};
 
export default SkeletonJobCard;
