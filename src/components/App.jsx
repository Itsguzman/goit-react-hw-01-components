import { RecipeList } from './RecipeList/RecipeList';
import friends from '../data/friends.json';
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Stats } from './statistics/Stats';
import data from '../data/data.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={data} />
      <RecipeList friendsData={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
