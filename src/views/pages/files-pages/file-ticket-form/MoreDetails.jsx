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


export const MoreDetails = () => {
  const getValidationSchema = () => {
    return Yup.object({
      lawyerName: Yup.string()
        .required('הכנס שם תיק עו"ד')
      // .test('not a number', 'צריך ערך מספרי')
      ,
      clientName: Yup.string().required('הכנס שם הלקוח'),
      courierName: Yup.string(),
      locatorName: Yup.string(),
      caseType: Yup.string(),
      status: Yup.string(),
      address: Yup.string(),
      moreInfo: Yup.string(),
    })
  };

  const formik = useFormik({
    initialValues: {
      lawyerName: '',
      clientName: '',
      courierName: '',
      locatorName:'',
      caseType: '',
      status:'',
      address:'',
      moreInfo:'',
    },
    validationSchema: getValidationSchema(),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ margin: '10px', display: 'flex', alignItems: 'center', gap: '6px', flexDirection: 'row'  }}>
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
        </form>
    </FormikProvider>
  );
};