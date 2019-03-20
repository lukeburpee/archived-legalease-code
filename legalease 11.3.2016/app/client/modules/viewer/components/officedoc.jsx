import React,{ Component, PropTypes } from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import JsFile from 'JsFile'
import JsFileOoxml from 'jsfile-ooxml'
import JsFileDsv from 'jsfile-dsv'
import JsFileWcbff from 'jsfile-wcbff'

import { Meteor } from 'meteor/meteor'

JsFile.defineEngine(JsFileOoxml);
JsFile.defineEngine(JsFileDsv);
JsFile.defineEngine(JsFileWcbff);

const makeCancelable = (promise) => {
  let hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => (
      hasCanceled ? reject({ officedoc: val, isCanceled: true }) : resolve(val)
    ));
    promise.catch(error => (
      hasCanceled ? reject({ isCanceled: true }) : reject(error)
    ));
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
};

class OfficeDoc extends Component {
	  static onDocumentError(err) {
    if (err.isCanceled && err.pdf) {
      err.pdf.destroy();
    }
  }
  static defaultBinaryToBase64(arrayBuffer) {
    let base64 = '';
    const encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

    const bytes = new Uint8Array(arrayBuffer);
    const byteLength = bytes.byteLength;
    const byteRemainder = byteLength % 3;
    const mainLength = byteLength - byteRemainder;

    let a;
    let b;
    let c;
    let d;
    let chunk;

    // Main loop deals with bytes in chunks of 3
    for (let i = 0; i < mainLength; i += 3) {
      // Combine the three bytes into a single integer
      chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];

      // Use bitmasks to extract 6-bit segments from the triplet
      a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
      b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
      c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
      d = chunk & 63;               // 63       = 2^6 - 1

      // Convert the raw binary segments to the appropriate ASCII encoding
      base64 = [base64, encodings[a], encodings[b], encodings[c], encodings[d]].join('');
    }

    // Deal with the remaining bytes and padding
    if (byteRemainder === 1) {
      chunk = bytes[mainLength];

      a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2

      // Set the 4 least significant bits to zero
      b = (chunk & 3) << 4; // 3   = 2^2 - 1

      base64 = [base64, encodings[a], encodings[b], '=='].join('');
    } else if (byteRemainder === 2) {
      chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];

      a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
      b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4

      // Set the 2 least significant bits to zero
      c = (chunk & 15) << 2; // 15    = 2^4 - 1

      base64 = [base64, encodings[a], encodings[b], encodings[c], '='].join('');
    }

    return base64;
  }
	constructor(props){
		super(props);
		this.state = {};
		this.getDocument = this.getDocument.bind(this);
		this.onDocumentComplete = this.onDocumentComplete.bind(this);
		this.onGetOfficeDocRaw = this.onGetOfficeDocRaw.bind(this);
	}
	componentDidMount(){
		this.loadOfficeDocument(this.props);
		this.renderOfficeDocument();
	}
	onDocumentComplete(officedoc) {
    	this.setState({ officedoc });
    	const { onDocumentComplete, onContentAvailable, onBinaryContentAvailable } = this.props;
    	if (typeof onDocumentComplete === 'function') {
    	  onDocumentComplete(officedoc.length);
    }
    if (typeof onContentAvailable === 'function' || typeof onBinaryContentAvailable === 'function') {
      officedoc.getData().then(this.onGetOfficeDocRaw);
    }
    officedoc.page(this.props.page).then(this.onPageComplete);
  }
    onPageComplete(page) {
    this.setState({ page });
    this.renderOfficeDocument();
    const { onPageComplete } = this.props;
    if (typeof onPageComplete === 'function') {
      onPageComplete(page.pageIndex + 1);
    }
  }

    onGetOfficeDocRaw(officeDocRaw) {
    const { onContentAvailable, onBinaryContentAvailable, binaryToBase64 } = this.props;
    if (typeof onBinaryContentAvailable === 'function') {
      onBinaryContentAvailable(officeDocRaw);
    }
    if (typeof onContentAvailable === 'function') {
      let convertBinaryToBase64 = this.defaultBinaryToBase64;
      if (typeof binaryToBase64 === 'function') {
        convertBinaryToBase64 = binaryToBase64;
      }
      onContentAvailable(convertBinaryToBase64(officeDocRaw));
    }
  }
  getDocument(val) {
    let file;
    let blob;
  	Meteor.call('doc.get', val, function(error, response){
      if (error){
        console.log(error);
      } else {
        console.log(response);
        blob = new Blob(response);
        console.log(blob);
        file = new JsFile(blob).read().then(
          (error) => {
            console.log(error);
          },
          (document) => {
            console.log(document); 
            return document
          });
        return file
      }
    });
  }
	 loadByteArray(byteArray) {
    this.getDocument(byteArray);
  }
	loadOfficeDocument(props) {
		if (props.file) {
			if (typeof props.file === 'string') {
        	return this.getDocument(props.file);
      }
      // Is a File object
      const reader = new FileReader();
      reader.onloadend = () =>
        this.loadByteArray(new Uint8Array(reader.result));
      reader.readAsArrayBuffer(props.file);
    } else if (props.binaryContent) {
      this.loadByteArray(props.binaryContent);
    } else if (props.content) {
      const bytes = window.atob(props.content);
      const byteLength = bytes.length;
      const byteArray = new Uint8Array(new ArrayBuffer(byteLength));
      for (let index = 0; index < byteLength; index += 1) {
        byteArray[index] = bytes.charCodeAt(index);
      }
      this.loadByteArray(byteArray);
    } else if (props.documentInitParameters) {
      return this.getDocument(props.documentInitParameters);
    } else {
      throw new Error('office-doc works with a file(URL) or (base64)content. At least one needs to be provided!');
    }
  }
    renderOfficeDocument() {
    const { page } = this.state;
    if (page) {
      const { canvas } = this;
      const canvasContext = canvas.getContext('2d');
      const { scale, rotate } = this.props;
      const viewport = page.getViewport(scale, rotate);
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      page.render({ canvasContext, viewport });
    }
  }
	render(){
		    const { loading } = this.props;
    const { page } = this.state;
    return page ?
      <canvas ref={(c) => { this.canvas = c; }} /> :
      <CircularProgress/> || <CircularProgress/>;
	}
}

OfficeDoc.propTypes = {
  content: PropTypes.string,
  documentInitParameters: PropTypes.shape({
    url: PropTypes.string,
  }),
  binaryContent: PropTypes.shape({
    data: PropTypes.any,
  }),
  file: PropTypes.any, // Could be File object or URL string.
  loading: PropTypes.any,
  page: PropTypes.number,
  scale: PropTypes.number,
  rotate: PropTypes.number,
  onContentAvailable: PropTypes.func,
  onBinaryContentAvailable: PropTypes.func,
  binaryToBase64: PropTypes.func,
  onDocumentComplete: PropTypes.func,
  onPageComplete: PropTypes.func,
};

export default OfficeDoc;