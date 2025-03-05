import * as Yup from 'yup';
import {  FormikProvider, useFormik } from 'formik';
import MainCard from '../../../../ui-component/cards/MainCard';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


const StyledStack = styled(Stack)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '10px',
  padding: '1rem'
}))

const StyledTitle = styled('h4') (({ theme }) => ({
  color: theme.palette.grey[600],
}))


export const MoreDetails = ({formik}) => {
  return (

          <Box>
            <StyledStack spacing={1.5}>
              <StyledTitle >פרטים נוספים</StyledTitle>
              <TextField
                name="lawyerName"
                label="שם עורך דין"
                variant="outlined"
                color="secondary"
                size="small"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.lawyerName}
              />
              <TextField
                name="clientName"
                label="שם הלקוח"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.clientName}
              />
              <TextField
                name="courierName"
                label="שם השליח"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.courierName}
              />
              <TextField
                name="locatorName"
                label="שם המאתר"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.locatorName}
              />
                <TextField
                  name="caseType"
                  label="סוג"
                  variant="outlined"
                  size="small"
                  color="secondary"
                  onChange={(e)=>{formik.handleChange(e)}}
                  value={formik.values.caseType}
                />

              <TextField
                name="status"
                label="סטטוס"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.status}
              />
              <TextField
                name="address"
                label="כתובת שנאמרה לשליח"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.address}
              />
              <TextField
                name="moreInfo"
                label="מידע נוסף"
                variant="outlined"
                size="small"
                color="secondary"
                onChange={(e)=>{formik.handleChange(e)}}
                value={formik.values.moreInfo}
              />

            </StyledStack>
          </Box>

  );
};