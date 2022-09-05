/** @jsxImportSource @emotion/react */

import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useReducer } from "react";
import { capitalizeWord } from "../utils";

export function AlertsExample({dispatch}) {
    const initialAlert = {
        text: "",
        link: "",
        timeLimit: "",
        alertType: "",
      };

    const reducer = (state, {type, payload}) => {
        switch (type) {
            case 'updateValue':
                state = payload;
                break;
            case 'reset':
                state = initialAlert;
                break;
            default:
                console.error(`unknown action type for updating alert form: ${type}`)
        }
        return state
    }

  const [alert, updateAlert] = useReducer(reducer, initialAlert);

  function handleSubmit(e) {
    e.preventDefault();
    alert.alertTitle = capitalizeWord(alert.alertType);
    alert.timeLimit = alert.timeLimit || 10;
    dispatch({type: 'add', payload: alert});
    updateAlert({type: 'reset'})
  }

  return (
    <Container maxWidth="xs" css={wrapperStyles}>
      <Typography variant="h4">Add Alert</Typography>
      <form css={formStyles} onSubmit={handleSubmit}>
        <TextField
          id="text"
          label="Alert Text"
          variant="standard"
          value={alert.text}
          onChange={(e) => updateAlert({type: 'updateValue', payload: { ...alert, text: e.target.value }})}
          required
        ></TextField>
        <TextField
          id="link"
          label="Alert Link"
          variant="standard"
          value={alert.link}
          onChange={(e) => updateAlert({type: 'updateValue', payload: { ...alert, link: e.target.value }})}
        ></TextField>
        <TextField
          id="timeLimit"
          label="Time to Display"
          variant="standard"
          value={alert.timeLimit}
          onChange={(e) => updateAlert({type: 'updateValue', payload: { ...alert, timeLimit: e.target.value }})}
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">sec</InputAdornment>,
          }}
        ></TextField>
        <FormControl variant="standard" fullWidth required>
          <InputLabel>Alert Level</InputLabel>
          <Select
            id="alertType"
            label="Alert Level"
            value={alert.alertType}
            onChange={(e) => updateAlert({type: 'updateValue', payload: { ...alert, alertType: e.target.value }})}
          >
            <MenuItem value="error">Error</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="success">Success</MenuItem>
          </Select>
        </FormControl>
        <div css={buttonRowStyles}>
          <Button variant="contained" type="submit">
            Submit Alert
          </Button>
        </div>
      </form>
    </Container>
  );
}

const wrapperStyles = {
  backgroundColor: "white",
  height: "fit-content",
  padding: 24,
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
};

const buttonRowStyles = {
  display: "flex",
  justifyContent: "end",
  marginTop: "15px",
};
