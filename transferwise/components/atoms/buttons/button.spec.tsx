import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Button} from './Button';

describe('<Button /> component', () => {
    const onClickMock = jest.fn();


        it('should find button in the document ', () => {
            const {getByTestId, } =
                render(<Button color="3333" onclick={onClickMock}>Failed</Button>); 
            
            expect(getByTestId('button')).toBeInTheDocument();

        })
        it('should  fire on click function passed as props', () => {
            const {getByTestId, } = 
                render(<Button color="3333" onclick={onClickMock}>Failed</Button>); 

            fireEvent.click(getByTestId('button'));

            expect(onClickMock).toBeCalledTimes(1);

        })
        it('Should test and check for children', ()  => {
            const {getByText } = 
            render(<Button  color="1111" onclick={onClickMock}>Button</Button>); 
            
            expect(getByText('Button')).toBeTruthy();

        })
        
        
})
