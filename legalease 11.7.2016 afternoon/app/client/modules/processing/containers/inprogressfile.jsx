import { connect } from 'react-redux';
import { useDeps } from 'mantra-core';
import InProgressFileImpl from './../components/inprogressfile.jsx';

const mapStateToProps = (state) => ({
	files: state.processing.uploading,
	custodian: state.processing.custodian,
	collectionPrefix: state.processing.collectionPrefix,
	extractMeta: state.processing.extractAllMeta,
	extractText: state.processing.extractAllText,
	imagePDF: state.processing.imageAllPDF,
	imageHTML: state.processing.imageAllHTML,
	tokenizeText: state.processing.tokenizeText,
	translate: state.processing.translate,
	allowLSA: state.processing.allowLSA,
	createCorpus: state.processing.createCorpus,
	semanticAnalysis: state.processing.semanticAnalysis,
	collectPasswords: state.processing.collectPasswords,
	removeDuplicates: state.processing.removeDuplicates
});

const mapDepsToProps = (context, actions) => ({
	uploadCollection: context.DiscoveryFiles
});

const InProgressFileWR = connect(mapStateToProps)(InProgressFileImpl);
const InProgressFile = useDeps(mapDepsToProps)(InProgressFileWR);
export default InProgressFile;