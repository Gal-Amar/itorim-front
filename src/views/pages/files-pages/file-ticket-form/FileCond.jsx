import * as Yup from 'yup';
import {  FormikProvider, useFormik } from 'formik';
import MainCard from '../../../../ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import { DateField } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const StyledStack = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '10px',
  padding: '1rem'
}))

const StyledTitle = styled('h4') (({ theme }) => ({
  color: theme.palette.grey[600],
}))


export const FileCond = ({ formik }) => {

  return (
        <Box >
          <StyledStack spacing={1.5}>
            <StyledTitle >פרטי החייב</StyledTitle>
            <TextField
              name="fileStatus"
              label="סטטוס התיק"
              variant="outlined"
              color="secondary"
              size="small"
              onChange={(e)=>{formik.handleChange(e)}}
              value={formik.values.fileStatus}
            />
            <DateField
              name="deliveryDate"
              label="תאריך ביצוע המסירה"
              size="small"
              color="secondary"
              clearable
              onChange={(val)=>{formik.setFieldValue('deliveryDate', val)}}
              value={formik.values.deliveryDate}
            />
            <DateField
              name="closeFileDate"
              label="תאריך סגירת תיק"
              onChange={(val)=>{formik.setFieldValue('closeFileDate', val)}}
              size="small"
              color="secondary"
              clearable
              value={formik.values.closeFileDate}
            />
            <TextField
              name="invoiceStatus"
              label="סטטוס ח\ע"
              variant="outlined"
              size="small"
              color="secondary"
              onChange={(e)=>{formik.handleChange(e)}}
              value={formik.values.invoiceStatus}
            />
            <TextField
              name="invoiceNumber"
              label="מספר ח\ע"
              variant="outlined"
              size="small"
              color="secondary"
              onChange={(e)=>{formik.handleChange(e)}}
              value={formik.values.invoiceNumber}
            />
            <TextField
              name="lawyerFee"
              label='חיוב עו"ד'
              variant="outlined"
              size="small"
              color="secondary"
              onChange={(e)=>{formik.handleChange(e)}}
              value={formik.values.lawyerFee}
            />
            <TextField
              name="deliveryFee"
              label="תשלום למוסר"
              variant="outlined"
              size="small"
              color="secondary"
              onChange={(e)=>{formik.handleChange(e)}}
              value={formik.values.deliveryFee}
            />
              <TextField
                name="lateFee"
                label="תשלום למאחר"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.lateFee}
              />
              <TextField
                name="fileOpened"
                label="תיק נפתח"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.fileOpened}
              />

          </StyledStack>
        </Box>
  );
};