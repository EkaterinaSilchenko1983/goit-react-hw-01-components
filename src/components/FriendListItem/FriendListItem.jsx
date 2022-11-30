import PropTypes from 'prop-types';
import { FriendItem, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
