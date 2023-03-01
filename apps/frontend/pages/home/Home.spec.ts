import { render } from '@/test/test.utils'

import Home from './Home.vue'

describe('Home Page', () => {
	it('should render', () => {
		const { getByText } = render(Home)

		expect(getByText('pages.home.welcome')).toBeVisible()
	})
})
