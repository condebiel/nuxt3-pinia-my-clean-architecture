import { render } from '@testing-library/vue'
import CustomButton from './CustomButton.vue'

const options = {
	slots: { default: 'Click me!' },
}

describe('CustomButton', () => {
	test('renders a button element by default', () => {
		const { getByRole } = render(CustomButton, options)

		expect(getByRole('button')).toBeInTheDocument()
	})

	test('renders a disabled button if disabled prop is passed', () => {
		const customOptions = Object.assign({ props: { disabled: true } }, options)
		const { getByRole } = render(CustomButton, customOptions)

		expect(getByRole('button')).toBeDisabled()
	})

	test('renders the button text', () => {
		const { getByText } = render(CustomButton, options)

		expect(getByText('Click me!')).toBeInTheDocument()
	})

	test('renders an icon slot', () => {
		const { getByTestId } = render(CustomButton, {
			slots: {
				default: 'Click me! <i data-testid="icon"/>',
			},
		})

		expect(getByTestId('icon')).toBeInTheDocument()
	})

	test('if the icon is from google, renders an image', () => {
		const { getByAltText } = render(CustomButton, {
			slots: {
				default: 'Click me! <img src="google-icon.svg" alt="google"/>',
			},
		})

		expect(getByAltText('google')).toBeInTheDocument()
	})
})
