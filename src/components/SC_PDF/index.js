import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/entry.webpack";
import ContainerDiv from "../Container";
import { Row, Col } from "react-bootstrap";
import RugSample from "../../2019Catalog_RUGS-Digital-Sample.pdf";
import TextileSample from "../../2019Catalog_TEXTILE-Digital-Sample.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function SocialMediaPDF() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <ContainerDiv>
        <Row>
          <Col s={5} lg={10}>
            <h3 className="card-title mt-3">Rizzy Home's 2019 Catalog | Rug Section</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <Document
              file={RugSample}
              onLoadSuccess={onDocumentLoadSuccess}
              className="rugCatalog"
              alt="Rug section of the Rizzy Home 2019 Catalog featuring various styles of rugs."
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Col>
        </Row>
        <Row>
          <Col s={4} m={6} lg={12}>
            <p className="description">
              Rug section of the Rizzy Home 2019 Catalog featuring various
              styles of rugs.
            </p>
            <p className="technologies">
              Tools Utilized: Adobe InDesign and Adobe Photoshop
            </p>
          </Col>
        </Row>
      </ContainerDiv>
      <ContainerDiv>
        <Row>
          <Col s={5} lg={10}>
            <h3 className="card-title mt-3">Rizzy Home's 2019 Catalog | Textile Section</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <Document
              file={TextileSample}
              onLoadSuccess={onDocumentLoadSuccess}
              className="textileCatalog"
              alt="Textile section of the Rizzy Home 2019 Catalog featuring various styles of beds and pillows."
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Col>
        </Row>
        <Row>
          <Col s={4} m={6} lg={12}>
            <p className="description">
              Textile section of the Rizzy Home 2019 Catalog featuring various
              styles of beds and pillows.
            </p>
            <p className="technologies">
              Tools Utilized: Adobe InDesign and Adobe Photoshop
            </p>
          </Col>
        </Row>
      </ContainerDiv>
    </>
  );
}

export default SocialMediaPDF;
