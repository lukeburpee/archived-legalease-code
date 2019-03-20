import React from 'react';
import Paper from 'material-ui/Paper';
import Table from './../../table/components';


const StatusTable = ({type, collection}) => (
	<Paper>
		{(collection)?<Table
			height={'auto'}
			selectable={true}
			columns={
				(type === 'extract')?[
					{key:'controlId',label:'Control Id'},
					{key:'textExtracted',label:'Text Extracted'},
					{key:'metaExtracted',label:'Meta Extracted'}
				]:(type === 'convert')?[
					{key:'controlId',label:'Control Id'},
					{key:'pdfConverted',label:'Pdf Converted'},
					{key:'htmlConverted',label:'Html Converted'}
				]:(type === 'exception')?[
					{key:'controlId',label:'Control Id'},
					{key:'passwordRequired',label:'Password Required'},
					{key:'passwordExtracted',label:'Password Extracted'}
				]:(type === 'analysis')?[
					{key:'controlId',label:'Control Id'},
					{key:'textTokenized',label:'Text Tokenized'},
					{key:'textTagged',label:'Text Tagged'},
					{key:'collectionCorpus',label:'Collection Corpus'}
				]:[
					{key:'controlId',label:'Control Id'},
					{key:'textExtracted',label:'Text Extracted'},
					{key:'metaExtracted',label:'Meta Extracted'},
					{key:'pdfConverted',label:'Pdf Converted'},
					{key:'htmlConverted',label:'Html Converted'},
					{key:'passwordRequired',label:'Password Required'},
					{key:'passwordExtracted',label:'Password Extracted'},
					{key:'textTokenized',label:'Text Tokenized'},
					{key:'textTagged',label:'Text Tagged'},
					{key:'collectionCorpus',label:'Collection Corpus'}
				]
			}
			data={collection}
		/>:<div>No Collection Selected</div>}
	</Paper>
);

export default StatusTable;