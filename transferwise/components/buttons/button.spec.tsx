import React from 'react';
import {render} from '@testing-library/react';

import Button from './button';

describe('<Button /> component', () => {
        it('should find button in the document ', () => {
            const {getByTestId} = render(<Button />)

            expect(getByTestId('button')).toBeInTheDocument();
        })
        
})
