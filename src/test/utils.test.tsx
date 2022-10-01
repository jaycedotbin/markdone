import { describe, expect } from 'vitest';
import { render } from './utils';

describe('Custom Mount', () => {
	it('should render', () => {
		const renderedElement = render(<div>Hello!</div>);
		const mockedElement = render(<div>Hello!</div>);

		expect(renderedElement.container).toStrictEqual(mockedElement.container);
	});
});
