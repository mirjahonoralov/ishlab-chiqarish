import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function Small_calendar({onChange , name,value}) {
    return(
        <>
        <LocalizationProvider   dateAdapter={AdapterDateFns}>
      <Stack spacing={3} width="230px">
        <DateTimePicker
          name={name}
          value={value}
          onChange={onChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
        </>
    )
}

export default Small_calendar