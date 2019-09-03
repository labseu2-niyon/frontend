import Tab from './Tab';
import styled from 'styled-components';

const Wrapper = () => {
  return (
    <main>
      <Tabs>
        <Tab name="Edit Profile" route="/settings" />
        <Tab name="Change Password" route="/password"></Tab>
      </Tabs>
      <div>
        {/* 1. Change Profile Picture
       2. First Name and Last Name
       3. Username
       4. Biography
       5. Mentor or mentee option
       6. City, Country
       6. Social Usernames */}
      </div>
    </main>
  );
};

export default Wrapper;
