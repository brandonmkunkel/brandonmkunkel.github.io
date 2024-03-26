import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import LinearProgress from '@mui/material/LinearProgress'

import PageBody from '../components/pageBody'
import ResumePDF from '../assets/Resume_BrandonKunkel.pdf'
import { Fab } from '@mui/material'
import { Save } from '@mui/icons-material'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const ResumePage = () => {
  const [, setNumPages] = useState<number | undefined>()
  const [pageNumber] = useState(1)

  const onDocumentLoadSuccess = (numPages: number) => {
    setNumPages(numPages)
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = ResumePDF
    link.download = 'Resume_BrandonKunkel.pdf'

    // Append to html link element page
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <PageBody title="Resume">
      <Fab
        variant="extended"
        color="info"
        aria-label="download resume"
        onClick={downloadResume}
        sx={{
          position: 'sticky',
          top: 80,
        }}
      >
        <Save />
        Download Resume
      </Fab>

      <Document
        file={ResumePDF}
        loading={<LinearProgress />}
        noData={<LinearProgress />}
        onLoadSuccess={onDocumentLoadSuccess}
        className="resume"
      >
        <Page
          pageNumber={pageNumber}
          style={{
            position: 'absolute',
            top: 80,
          }}
        />
      </Document>
    </PageBody>
  )
}

export default ResumePage
