import React from "react";
import Profile from "./components/profile/Profile";
import user from "./components/profile/profile.json";
import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistics.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./components/friendList/friends.json";
import TransactionHistory from "./components/transaction/TransactionHistory";
import transactions from "./components/transaction/transactions.json";
const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
          {/* <Statistics stats={statisticalData} /> */}
       
         <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;
