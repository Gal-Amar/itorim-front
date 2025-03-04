import { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useFormik, Field, FormikProvider } from 'formik';
// material-ui
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { Input } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
// project imports
import MainCard from '../../../ui-component/cards/MainCard';

const searchByOptions = ['שם החייב', 'תז החייב', 'מספר תיק פנימי', 'מספר תיק עו"ד', 'נוסף'];

export default function SearchFilesCard() {
  const [selectedOption, setSelectedOption] = useState('שם החייב'); // Default selected option
  const getValidationSchema = () => {
    if (selectedOption === searchByOptions[0]) {
      return Yup.object({
        searchFileInput: Yup.string()
          .required('הכנס שם החייב')
          .test('not a number', 'הכנס שם תקין או שנה את סוג החיפוש.', (value) => {
            return isNaN(Number(value)); // Ensures it's not a number
          })
      });
    } else if (selectedOption === searchByOptions[1]) {
      return Yup.object({
        searchFileInput: Yup.number()
          .required('אנא הכנס מספר')
          .typeError('חייב להיות מספרי')
          .min(100000000, 'המספר חייב להיות באורך של 9 ספרות')
          .max(999999999, 'המספר חייב להיות באורך של 9 ספרות')
      });
    }
    return Yup.object({
      searchFileInput: Yup.number().required('אנא הכנס מספר').typeError('חייב להיות מספרי')
    });
  };

  const formik = useFormik({
    initialValues: {
      selectOption: searchByOptions[0],
      searchFileInput: ''
    },
    validationSchema: getValidationSchema(),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <FormikProvider value={formik}>
      <MainCard
        sx={{
          '& > *': {
            flexGrow: 1,
            flexBasis: '50%'
          },
          maxWidth: '1024px'
        }}
        content={false}
      >
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ margin: '10px', display: 'flex', alignItems: 'center', gap: '6px', flexDirection: 'row' }}>
            <TextField
              select
              name="selectOption"
              color="secondary"
              id="select-search-option"
              label={'חיפוש לפי'}
              variant={'standard'}
              defaultValue="שם החייב"
              sx={{ width: '180px', border: 'none' }}
              onChange={(e) => {
                setSelectedOption(e.target.value);
                formik.handleChange(e);
              }}
              value={formik.values.selectOption}
            >
              {searchByOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
              <Field
                name={'searchFileInput'}
                as={Input}
                color="secondary"
                fullWidth
                id="standard-adornment-amount"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon color="secondary" />
                  </InputAdornment>
                }
                value={formik.values.searchFileInput}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.searchFileInput && Boolean(formik.errors.searchFileInput)}
              />
              {formik.errors.searchFileInput && formik.touched.searchFileInput && (
                <div style={{ color: 'red', fontSize: 'x-small', fontWeight: 'bold' }}>{formik.errors.searchFileInput}</div>
              )}
            </FormControl>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" type="submit">
              <ArrowBackIcon color="secondary" />
            </IconButton>
          </Box>
        </form>
      </MainCard>
    </FormikProvider>
  );
}

SearchFilesCard.propTypes = { children: PropTypes.any, other: PropTypes.any };
