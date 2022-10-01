import Editor, { OnChange } from '@monaco-editor/react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
	const [editorData, setEditorData] = useState<string>('');

	const handleEditorChange: OnChange = (value, event) => {
		setEditorData(value as string);
	};

	return (
		<>
			<main>
				<div className="grid grid-cols-2">
					<Editor
						theme="vs-dark"
						defaultLanguage="markdown"
						className="min-h-screen"
						onChange={handleEditorChange}
					/>
					<section>
						<ReactMarkdown className="mx-4 prose dark:prose-invert">
							{editorData}
						</ReactMarkdown>
					</section>
				</div>
			</main>
		</>
	);
}

export default App;
