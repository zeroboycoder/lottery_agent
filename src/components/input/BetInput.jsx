import { TextField } from "@mui/material";

const BetInput = (props) => {
  return (
    <div className="border rounded p-4 mb-4 mt-2">
      <TextField
        required
        id="outlined-required"
        label="Number"
        fullWidth
        helperText="Example: 231, 321, 423"
        onChange={props.onChangeNumber}
      />
      <TextField
        required
        id="outlined-required"
        label="Amount"
        fullWidth
        onChange={props.onChangeAmount}
      />
    </div>
  );
};

export default BetInput;
