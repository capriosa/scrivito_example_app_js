
import * as React from "react";
import * as Scrivito from "scrivito";
import { Document, Page } from 'react-pdf';
import urlFromBinary from '../../utils/urlFromBinary';

import "./PdfWidget.scss";

class PdfWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: 1,
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber } = this.state;
    const widget = this.props.widget;
    const PDF = urlFromBinary(widget.get('file'));

      return (
        <div>
          <Document
            file={PDF}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>

        </div>
      );

  }
}

Scrivito.provideComponent('PdfWidget', PdfWidget);