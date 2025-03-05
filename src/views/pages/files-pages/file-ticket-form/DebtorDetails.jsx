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


export const DebtorDetails = ({ formik }) => {

  return (
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
                onChange={(val)=>{formik.setFieldValue('openFileDate', val)}}
                size="small"
                color="secondary"
                clearable
                value={formik.values.openFileDate}
              />
              <DateField
                name="transferDate"
                label="תאריך העברה לשליח"
                onChange={(val)=>{formik.setFieldValue('transferDate', val)}}
                size="small"
                color="secondary"
                clearable
                value={formik.values.transferDate}
              />
            </StyledStack>
          </Box>
);
};