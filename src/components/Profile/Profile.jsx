import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsContainer,
  StatsFollowers,
  StatsViews,
  StatsLikes,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsContainer>
        <StatsFollowers>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsFollowers>
        <StatsViews>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsViews>
        <StatsLikes>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsLikes>
      </StatsContainer>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
