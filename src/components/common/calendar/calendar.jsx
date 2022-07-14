import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function Calendar({onChange , name,value ,title}) {
    // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    // console.log(value);
    // const handleChange = (newValue) => {
    //     setValue(newValue);
    // };
    return(
        <>
        <div>
        <p className="form-padding">{title}</p>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DateTimePicker
          value={value}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
        </div>
        </>
    )
}

export default Calendar