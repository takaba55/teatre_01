
import Logout from './Logout';
import TicketList from './ticket/TicketList';

const Top = (props) => {
  const { user } = props;

  return (
    <div>
      <h1>TEATRE</h1>
      {user}
      <Logout />
      <TicketList />
    </div>
  );
};

export default Top;