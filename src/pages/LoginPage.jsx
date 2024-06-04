import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, Button } from "@mui/material";
import axios from "axios";
import BgImage from "../assets/img/login_bg.png";

import { baseUrl } from "../config/base_url";

const LoginPage = () => {
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const loginHandler = async () => {
    try {
      const data = {
        phone,
        password,
      };
      const res = await axios.post(`${baseUrl}/agent/auth/login`, data);
      const token = res?.data?.data?.token;
      const agentId = res?.data?.data?.agentId;
      localStorage.setItem("token", token);
      localStorage.setItem("agentId", agentId);
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${BgImage})`,
        height: "100vh",
        marginTop: "-84px",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        style={{
          width: "100%",
          height: "calc(100vh - 200px)",
        }}
        className="bg-[url('https://astrotalk.com/astrology-blog/wp-content/uploads/2020/01/lottery-hd-1-1-1-1-1-e1580291063290-1280x720.png')]"
      >
        <div
          className="flex flex-col w-72 space-y-5"
          style={{ filter: "brightness(1)" }}
        >
          <h1 className="text-center text-3xl font-bold">Welcome Back!</h1>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            style={{ backgroundColor: "#eee", borderRadius: "6px" }}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            style={{ backgroundColor: "#eee", borderRadius: "6px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" onClick={loginHandler}>
            Login
          </Button>
        </div>
      </Stack>
    </div>
  );
};

export default LoginPage;
