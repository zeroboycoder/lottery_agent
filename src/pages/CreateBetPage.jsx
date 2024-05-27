import { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Add } from "@mui/icons-material";
import BetInput from "../components/input/BetInput";
import { baseUrl } from "../config/base_url";

const CreateBetPage = () => {
  let [betInputCount, setBetInputCount] = useState(1);
  const [errorMsg, setErrorMsg] = useState(null);
  const [playerName, setName] = useState(null);
  const [playerPhone, setPhone] = useState(null);
  const [betting, setBetting] = useState([
    {
      betNumber: null,
      betAmount: null,
    },
  ]);

  const betInputs = [];
  for (let i = 0; i < betInputCount; i++) {
    betInputs.push(
      <BetInput
        key={i}
        onChangeNumber={(e) => (betting[i].betNumber = e.target.value)}
        onChangeAmount={(e) => (betting[i].betAmount = e.target.value)}
      />
    );
  }

  const onSubmitHandler = async () => {
    try {
      const data = {
        playerName,
        playerPhone,
        agentId: localStorage.getItem("agentId"),
        betting,
      };
      await axios.post(`${baseUrl}/agent/betting`, data);
      window.location.reload();
    } catch (error) {
      setErrorMsg(error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };

  return (
    <div className="relative" style={{ height: "calc(100vh - 100px)" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Container>
          <Typography variant="h5" my={2}>
            Create Bet
          </Typography>
          <div>
            <TextField
              required
              id="outlined-required"
              label="Name"
              fullWidth
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Phone"
              fullWidth
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {betInputs}
          {errorMsg && (
            <p className="text-red-500 text-center text-sm m-0">{errorMsg}</p>
          )}
          <Button
            variant="outlined"
            fullWidth
            style={{ margin: "12px 0" }}
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </Container>

        <div className="bg-blue-400 w-fit rounded-full fixed bottom-4 right-4">
          <Button
            variant="contained"
            endIcon={<Add />}
            onClick={() => {
              setBetInputCount(++betInputCount);
              setBetting([
                ...betting,
                {
                  betNumber: null,
                  betAmount: null,
                },
              ]);
            }}
          >
            Add Input
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default CreateBetPage;
