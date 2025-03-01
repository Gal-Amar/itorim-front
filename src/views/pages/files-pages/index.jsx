import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid2';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import SearchFilesCard from './SearchFile';
import FilesTable from './FilesTable';
import Stack from '@mui/material/Stack';

// ==============================|| DEFAULT DASHBOARD ||============================== //

export default function FilesPage() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Stack spacing={2}>
      <SearchFilesCard />

      <FilesTable />
    </Stack>
  );
}
