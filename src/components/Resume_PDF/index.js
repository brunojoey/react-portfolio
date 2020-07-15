import React, { useState } from "react";
import ContainerDiv from "../Container";
import { Row, Col } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf/dist/entry.webpack";
import MyResume from "../../joseph_bruno_resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumePDF() {
  const [pageNumbers, setPageNumbers] = useState(1);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumbers(numPages);
  }

  return (
      <>
    <ContainerDiv>
      <Row className='resume-title mt-3'>
        <h3 className='resume-title'>My Resumé</h3>
      </Row>
    </ContainerDiv>
      <Row className='mt-3'>
        <Col className='joey-resume'>
          <Document file={MyResume} onLoadSuccess={onDocumentLoadSuccess} >
            <Page pageNumber={pageNumbers} />
          </Document>
        </Col>
      </Row>
    </>
  );
}

export default ResumePDF;
