import Grid from '@mui/material/Grid2';
import { styled, useTheme } from '@mui/material/styles';
import { FileFields } from './FileFields';
import Box from '@mui/material/Box';
import { FormikProvider, useFormik } from 'formik';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import { fileFormKeys } from './contants';
import { HistoryTable } from './HistoryTable';
import Stack from '@mui/material/Stack';

const StyledGrid = styled(Grid) (({ theme }) => ({
  height: 'max-content',
}))
const StyledCardBox = styled(Box) (({ theme }) => ({
  flexGrow: 1 ,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: '10px',
  padding: '10px'
}))



export const FileDetails = () => {
  const theme = useTheme();
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
          <StyledCardBox>
            <Stack direction="column" spacing={2}>
            <StyledGrid container spacing={2}>
              {Object.values(fileFormKeys).map((key, index) => (
                <Grid key={index} size={{ xs:12, sm: 12, md: 4 }}>
                  <FileFields detailsType={key} />
                </Grid>
              ))}
            </StyledGrid>

            <Box sx={{display: 'flex', gap: '5px', marginTop: '10px'}}>
              <Button type={'submit'} variant="contained" color={'secondary'}>שמירת שינויים בתיק</Button>
              <Button  variant="contained" color={'secondary'}>סגירת התיק</Button>
              <Button  variant="contained" color={'secondary'}>מחיקת התיק</Button>
            </Box >
              <Divider sx={{height: '4px', color:'red'}} />
            <HistoryTable />
          </Stack>
          </StyledCardBox>

        </form>
      </FormikProvider>
    )
};