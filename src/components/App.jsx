import Profile from './Profile/Profile';
import Container from './Container/Container';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import Friends from './Friends/Friends';
import friendsList from './Friends/friendsList.json';
import Transaction from './Transaction/Transaction';
import transactions from './Transaction/transactions.json';

export default function App() {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>
      <Container>
        <Friends data={friendsList} />
      </Container>
      <Container>
        <Transaction items={transactions} />
      </Container>
    </>
  );
}
