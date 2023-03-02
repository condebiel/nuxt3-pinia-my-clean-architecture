import { render } from '@/test/test.utils'

import CardSimple from './CardSimple.vue'

const COMMON_PROPS = {
	buttonText: 'Button Text',
	name: 'Random Name',
	url: '#',
	imageUrl: 'https://random.url/image.jpg',
}

describe('CardSimple', () => {
	it('should render proper name', () => {
		const { getByText } = render(CardSimple, {
			props: COMMON_PROPS,
		})

		expect(getByText('Random Name')).toBeVisible()
	})

	it('should render proper link', () => {
		const { getAllByRole } = render(CardSimple, {
			props: COMMON_PROPS,
		})

		expect(getAllByRole('link')[0]).toHaveAttribute('href', '#')
	})
})
