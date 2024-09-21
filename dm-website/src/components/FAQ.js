import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = ({ question, answer }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color="text.secondary">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="text.secondary">{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQ;
