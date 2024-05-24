import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/system';

export default function IntroText() {
  const theme = useTheme();

  return (
    <Box id="introText" sx={{ py: 6, maxWidth: '1000px', mx: 'auto'}}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        <i style={{ color: '#e2883c' }}>
          <b>Dance Marathon</b>
        </i>{' '}
        at the{' '}
        <i style={{ color: '#e2883c' }}>
          <b>University of Florida</b>
        </i>{' '}
        is the largest student-run and highest fundraising philanthropy in the Southeast United States. Our mission is to strive to bring together the campus and community to raise funds and awareness for our local Children's Miracle Network Hospital,{' '}
        <i style={{ color: '#233563' }}>
          <b>UF Health Shands Children's Hospital</b>
        </i>
        . We are going into our 31st year of{' '}
        <i style={{ color: '#e2883c' }}>
          <b>Dance Marathon</b>
        </i>{' '}
        at{' '}
        <i style={{ color: '#e2883c' }}>
          <b>UF</b>
        </i>
        , having fundraised over $31,000,000 thus far. This past year, we celebrated our 30th year by raising a historic{' '}
        <i style={{ color: '#233563' }}>
          <b>$1,531,518.24!</b>
        </i>
      </Typography>
    </Box>
  );
}
