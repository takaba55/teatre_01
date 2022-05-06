import axios from "axios";
import { useEffect, useState } from "react"

import LoadingButton from '@mui/lab/LoadingButton';

import Ticket from '../../componet/Ticket';

function TicketList() {
  const [itemList, setList] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    setList([]);
    setButtonLoading(true);
    searchFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 読み込みボタン押下 */
  const loadClick = () => {
    setButtonLoading(true);
    searchFunc();
  }

  const searchFunc = async () => {
    const url = 'https://script.google.com/macros/s/AKfycbzJjSJMdW_CfZaNcQ55f8XQsmmrYwbC3CQaKm_pSGLauRXpi-JVR4KwdHvPjTcGiRihDA/exec';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const params = {
      crossDomain: true
    }
    await axios
      .get(url, { headers, params })
      .then((res) => {
        setList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setButtonLoading(false);
  };

  return (
    <>
      <LoadingButton
        variant="contained"
        onClick={e => loadClick(e)}
        loading={buttonLoading}
      >
        読み込み
      </LoadingButton>
      {itemList.length > 0 ?
        itemList.map((item) => (
          <Ticket key={item.id} data={item}></Ticket>
        )) : buttonLoading ? <p>loading...</p> : <p>no ticket...</p>}
    </>
  );
}

export default TicketList;
