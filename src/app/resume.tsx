import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import LinearProgress from '@mui/material/LinearProgress'

import PageBody from '../components/pageBody'
import ResumePDF from '../assets/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const ResumePage = () => {
  const [, setNumPages] = useState<number | undefined>()
  const [pageNumber] = useState(1)

  function onDocumentLoadSuccess(numPages: number) {
    setNumPages(numPages)
  }

  return (
    <PageBody title="Resume">
      <Document
        file={ResumePDF}
        loading={<LinearProgress />}
        noData={<LinearProgress />}
        onLoadSuccess={onDocumentLoadSuccess}
        className="resume"
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </PageBody>
  )
}

export default ResumePage
