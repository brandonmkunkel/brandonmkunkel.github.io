import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import LinearProgress from '@mui/material/LinearProgress'

import PageBody from '../components/page_body';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ResumePage = () => {
  const [, setNumPages] = useState(null);
  const [pageNumber, ] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <PageBody>
        <Document 
          file="assets/resume.pdf" 
          loading={<LinearProgress />}
          noData={<LinearProgress />}
          onLoadSuccess={onDocumentLoadSuccess}
          className="resume"
        >
          <Page pageNumber={pageNumber} />
        </Document>
    </PageBody>
  );
};

export default ResumePage;
