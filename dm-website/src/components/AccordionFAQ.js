import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import FAQ from './FAQ'; // Adjust the import path as necessary

const AccordionFAQ = () => {
  const [faqs] = useState([]);

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 1 }}>
      <Typography variant="h4" color="text.secondary" gutterBottom>
        FAQ
      </Typography>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </Box>
  );
};

export default AccordionFAQ;
