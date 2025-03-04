import * as Yup from 'yup';
import {  FormikProvider, useFormik } from 'formik';
import MainCard from '../../../../ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { DateField } from '@mui/x-date-pickers';

const StyledStack = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '10px',
  padding: '1rem'
}))

const StyledTitle = styled('h4') (({ theme }) => ({
  color: theme.palette.grey[600],
}))


export const DebtorDetails = (Props) => {
  const getValidationSchema = () => {
    return Yup.object({
      lawyerFileNumber: Yup.number()
        .required('הכנס מספר תיק עו"ד')
      // .test('not a number', 'צריך ערך מספרי')
      ,
      debtorName: Yup.string().required('הכנס שם החייב'),
      debtorId: Yup.number().required('חייב להיות מספר')
        .min(100000000, 'המספר חייב להיות באורך של 9 ספרות')
        .max(999999999, 'המספר חייב להיות באורך של 9 ספרות'),
      debtorAddress: Yup.mixed(),
      homeNumber: Yup.number(),
      apartmentNumber: Yup.mixed(),
      openFileDate: Yup.date().required('אנה הכנס תאריך פתיחת התיק'),
      transferDate: Yup.date(),
    })
  };

  const formik = useFormik({
    initialValues: {
      lawyerFileNumber: '',
      debtorName: '',
      debtorId: '',
      debtorAddress:'',
      homeNumber: '',
      apartmentNumber:'',
      openFileDate:'',
      transferDate:'',
    },
    validationSchema: getValidationSchema(),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Box >
            <StyledStack spacing={1.5}>
              <StyledTitle >פרטי החייב</StyledTitle>
              <TextField
                name="lawyerFileNumber"
                label="תיק עורך דין"
                variant="outlined"
                color="secondary"
                size="small"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.lawyerFileNumber}
              />
              <TextField
                name="debtorName"
                label="שם החייב"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.debtorName}
              />
              <TextField
                name="debtorId"
                label="תז"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.debtorId}
              />
              <TextField
                name="debtorAddress"
                label="כתובת- עיר ורחוב"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.debtorAddress}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '5px' }}>
                <TextField
                  name="homeNumber"
                  label="בית"
                  variant="outlined"
                  size="small"
                  sx={{width: '50%'}}
                  color="secondary"
                  onChange={(e)=>{formik.handleChange(e)}}
                  value={formik.values.homeNumber}
                />
                <TextField
                  name="apartmentNumber"
                  label="דירה"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  sx={{width: '50%'}}
                  onChange={(e)=>{formik.handleChange(e)}}
                  value={formik.values.apartmentNumber}
                />
              </Box>
              <TextField
                id="outlined-helperText"
                label="עיר"
                value={""}
                variant="outlined"
                size="small"
                color="secondary"
              />
              <DateField
                name="openFileDate"
                label="תאריך פתיחת תיק"
                onChange={(e)=>{formik.handleChange(e)}}
                size="small"
                color="secondary"
                clearable
              />
              <DateField
                name="transferDate"
                label="תאריך העברה לשליח"
                onChange={(e)=>{formik.handleChange(e)}}
                size="small"
                color="secondary"
                clearable
              />
            </StyledStack>
          </Box>
        </form>
    </FormikProvider>
  );
};