import React from 'react';
import { render } from '@testing-library/react';

import Header from './index';


describe('<Header /> Component', () => {
        test('should render header', () => {
                const { getByTestId } = render(<Header />);
                expect(getByTestId('header-component')).toBeInTheDocument();
            }); 
        
})
