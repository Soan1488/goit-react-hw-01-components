import Profile from './Profile/Profile';
import Section from './Container/Container';
import user from './Profile/user.json';

export default function App() {
  return (
    <Section>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    </Section>
  );
}
