import moment from 'moment';
import 'moment/locale/ja';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Ticket(props) {
  const { data } = props;
  return (
    <Card>
      <CardContent>
        {data.title}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {data.place}
        </Typography>
        <p>
          {moment(data.ivtDate).format('YYYY-MM-DD(dd)')}
          {data.ivtTime}
        </p>
        <p>
          {data.seat}
        </p>
        <p>
          {data.payment}{data.receipt}
        </p>
      </CardContent>
    </Card>
  );
}

export default Ticket;
