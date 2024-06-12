import PropTypes from 'prop-types';
import { FriendList } from 'components/FriendList/FriendList';

import css from './Friends.module.css';

export const RecipeList = ({ friendsData }) => {
  return (
    <ul className={css.friendList}>
      {friendsData.map(({ id, name, avatar, isOnline }) => (
        <FriendList key={id} name={name} avatar={avatar} status={isOnline} />
      ))}
    </ul>
  );
};

RecipeList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
