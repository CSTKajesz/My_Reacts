import { useContext } from 'react';     //importálom a useContext-et így hozom át a user adatokat
import { userContext } from './UserContext';  //importálom a userContexet is így hozom át a user adatokat

const Dashboard = () => {
  const { user } = useContext(userContext);  // itt hozom át a user adatokat az App.js-ből
  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
    </section>
  );
};
export default Dashboard;
