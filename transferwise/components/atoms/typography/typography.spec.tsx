import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';



describe('<Typography />  Heading components', () => {
        it('should check for children for heading component ', () => {
                const { getByText} = render(<Heading color="#fff">Heading component</Heading>);

                expect(getByText('Heading component')).toBeTruthy();
        })
        
})


