import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Button from './button';

describe('<Button /> component', () => {
    const onClickMock = jest.fn();

        it('should find button in the document ', () => {
            const {getByTestId, } =
                render(<Button onclick={onClickMock}>Failed</Button>); 
            
            expect(getByTestId('button')).toBeInTheDocument();

        })
        it('should  fire on click function passed as props', () => {
            const {getByTestId, } = 
                render(<Button onclick={onClickMock}>Failed</Button>); 

            fireEvent.click(getByTestId('button'));

            expect(onClickMock).toBeCalledTimes(1);

        })
        it('Should test and check for children', ()  => {
            const {getByText } = 
            render(<Button onclick={onClickMock}>Button</Button>); 
            
            expect(getByText('Button')).toBeTruthy();

        })
        
        
})
