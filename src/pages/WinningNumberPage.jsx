import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Loading from "../components/loading/loding";
import axios from "axios";
import { baseUrl } from "../config/base_url";

const WinningNumberPage = () => {
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [showPerPage, setShowPerPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get(
        `${baseUrl}/admin/winning-number?page=1&showPerPage=5&sort=desc`
      );
      setWinningNumbers(res.data.data.data);
      setShowPerPage(res.data.data.showPerPage);
      setLoading(false);
    };
    fetchData();
  }, []);

  const rows = winningNumbers.map((winningNumber, i) => ({
    id: ++i,
    ...winningNumber,
  }));

  const columns = [
    { field: "id", headerName: "No", width: 100 },
    { field: "date", headerName: "Date", width: 130 },
    {
      field: "winningNumber",
      headerName: "Winning Number",
      width: 200,
    },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          {/* Latest Bets */}
          <div style={{ height: "100%", width: "100%" }}>
            <Typography variant="h5" my={2}>
              Winning Numbers
            </Typography>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: showPerPage },
                },
              }}
            />
          </div>
        </Container>
      )}
    </>
  );
};

export default WinningNumberPage;
