import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
    let component: ShallowWrapper;
    const onClickSpy = jest.fn();

    beforeEach(() => {
        component = shallow(<Button onClick={onClickSpy}>Hello World</Button>);
    });

    it('should render button', () => {
        expect(component.find('button').exists()).toBe(true);
    });

    it('should call onClickSpy', () => {
        component.simulate('click');

        expect(onClickSpy).toBeCalled();
    });
});
