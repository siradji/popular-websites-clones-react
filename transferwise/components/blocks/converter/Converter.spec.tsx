import React from 'react';
import { render } from '@testing-library/react';

import Converter from './index';


describe('<Converter /> Component', () => {
        test('should render Converter', () => {
                const { getByTestId } = render(<Converter />);
                expect(getByTestId('converter-component')).toBeInTheDocument();
            }); 
        
})
