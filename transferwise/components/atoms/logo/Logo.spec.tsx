import React from 'react';
import {render} from '@testing-library/react';

import Logo from './index';


describe('<Logo  /> Component', () => {
        it('should  render logo component', () => {
                const { getByTestId } = render(<Logo />);
                expect(getByTestId('logo-component')).toBeTruthy();
            });
        
});
