import PropTypes from 'prop-types';
import { ProfileContainer } from './Profile.styled';
import { Description } from './Profile.styled';
import { Avatar } from './Profile.styled';
import { Name } from './Profile.styled';
import { Tag } from './Profile.styled';
import { Location } from './Profile.styled';
import { StatsContainer } from './Profile.styled';
import { StatsFollowers } from './Profile.styled';
import { StatsViews } from './Profile.styled';
import { StatsLikes } from './Profile.styled';
import { Label } from './Profile.styled';
import { Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
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
