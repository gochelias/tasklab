/* eslint-disable class-methods-use-this */

import Document, { Head, Html, Main, NextScript } from 'next/document';

class TasklabDocument extends Document {
	render() {
		return (
			<Html>
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default TasklabDocument;
