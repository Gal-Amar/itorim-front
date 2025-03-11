import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Field } from 'formik';
import { DateField } from '@mui/x-date-pickers';
import {fileFormFields, fileFormTitles} from './contants';

const StyledStack = styled(Stack)(() => ({
  padding: '6px'
}));

const StyledTitle = styled('h4')(({ theme }) => ({
  color: theme.palette.grey[600],
}));

const FormTextField = ({ name, label }) => (
  <Field name={name} sx={name === 'homeNumber' || name === 'apartmentNumber' ? '50%' : {}}>
    {({ field, form }) => (
      <TextField
        {...field}
        label={label}
        variant="outlined"
        size="small"
        color="secondary"
        error={form.touched[name] && Boolean(form.errors[name])}
      />
    )}
  </Field>
);

const FormDateField = ({ name, label }) => (
  <Field name={name} >
    {({field, form}) =>
      <DateField
        {...field}
        label={label}
        size="small"
        color="secondary"
        clearable
        error={form.touched[name] && Boolean(form.errors[name])}
        onChange={(val)=>{form.setFieldValue(name, val)}}
        value={form.values.name}
      />
    }
    </Field>
)
export const FileFields = ({detailsType}) => {
  return (
    <Box>
      <StyledStack spacing={1.5}>
        <StyledTitle>{fileFormTitles[detailsType]}</StyledTitle>
        {fileFormFields[detailsType].map(({ name, label, type }) =>
          type === 'text' ? (
            <FormTextField key={name} name={name} label={label} />
          ) : (
            <FormDateField key={name} name={name} label={label} />
          )
        )}
      </StyledStack>
    </Box>
  );
};
