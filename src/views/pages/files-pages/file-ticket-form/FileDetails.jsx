import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

import { DebtorDetails } from './DebtorDetails';
import { MoreDetails } from './MoreDetails';
import Box from '@mui/material/Box';
import { FileCond } from './FileCond';
import { FormikProvider, useFormik } from 'formik';
import dayjs from 'dayjs';
import * as Yup from 'yup';



const StyledGrid = styled(Grid) (({ theme }) => ({

  height: 'max-content',
}))



export const FileDetails = () => {
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
      lawyerFileNumber: '',
      debtorName: '',
      debtorId: '',
      debtorAddress:'',
      homeNumber: '',
      apartmentNumber:'',
      openFileDate: dayjs(),
      transferDate: dayjs(),
      lawyerName: '',
      clientName: '',
      courierName: '',
      locatorName:'',
      caseType: '',
      status:'',
      address:'',
      moreInfo:'',
      fileStatus: '',
      deliveryDate: dayjs(),
      closeFileDate: dayjs(),
      invoiceStatus:'',
      invoiceNumber: '',
      lawyerFee:'',
      deliveryFee:'',
      lateFee:'',
      fileOpened:''
    },
    validationSchema: getValidationSchema(),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
    return (
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <StyledGrid container spacing={2}>
              <Grid size={{ xs:12, sm: 12, md: 4 }} >
                <DebtorDetails formik={formik}/>
              </Grid>
              <Grid size={{ xs:12, sm: 12, md: 4 }} >
                <MoreDetails formik={formik}/>
              </Grid>
              <Grid size={{ xs:12, sm: 6, md: 4 }} >
                <FileCond formik={formik}/>
              </Grid>
            </StyledGrid>
            {/*<StyledGrid container spacing={2} alignItems="stretch">*/}
            {/*  <Grid item xs={12} sm={12} md={4} sx={{ height: '100%' }}>*/}
            {/*    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>*/}
            {/*      <DebtorDetails formik={formik} />*/}
            {/*    </Box>*/}
            {/*  </Grid>*/}
            {/*  <Grid item xs={12} sm={12} md={4} sx={{ height: '100%' }}>*/}
            {/*    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>*/}
            {/*      <MoreDetails formik={formik} />*/}
            {/*    </Box>*/}
            {/*  </Grid>*/}
            {/*  <Grid item xs={12} sm={6} md={4} sx={{ height: '100%' }}>*/}
            {/*    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>*/}
            {/*      <FileCond formik={formik} />*/}
            {/*    </Box>*/}
            {/*  </Grid>*/}
            {/*</StyledGrid>*/}
          </Box>
        </form>
      </FormikProvider>
    )
};