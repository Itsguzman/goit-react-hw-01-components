import PropTypes from 'prop-types';

import css from '../RecipeList/Friends.module.css';

export const FriendList = ({ id, name, avatar, status }) => {
  return (
    <li className={css.item}>
      <span className={status ? css.online : css.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendList.prototype = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
