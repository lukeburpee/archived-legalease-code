import React from 'react';
import ChatToolbar from './chattoolbar';
import Layer from './layer';

const ChatBox = ({open, minimized, children})=>(
	<div>
	<Layer 
		id="chat-box" 
		position='absolute'
		zIndex={21} 
		top={'auto'} 
		bottom={0} 
		left={(open)?'12vw':'32vw'} 
		right={'auto'} 
		height={(minimized || !open)? '8vh': '52vh'}
		width={(open)?'25vw':'8vh'}>
		<ChatToolbar/>
		{children}
	</Layer>
	</div>
);

export default ChatBox;