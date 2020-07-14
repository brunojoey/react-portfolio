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
    <div>
      <Row>
        <h3>My Resumé</h3>
      </Row>
      <Row>
        <Col>
          <Document file={MyResume} onLoadSuccess={onDocumentLoadSuccess} className='joeyResume'>
            <Page pageNumber={pageNumbers} width={600} />
          </Document>
        </Col>
      </Row>
    </div>
  );
}

export default ResumePDF;
