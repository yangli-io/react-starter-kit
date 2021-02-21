import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import LoginInput from './LoginInput';

describe('<LoginInput />', () => {
  const spy = jest.fn();
  let component: ShallowWrapper;
  beforeEach(() => {
    spy.mockReset();

    component = shallow(<LoginInput value="Hello" labelId="abc" onChange={spy} />);
  });

  it('should render properly', () => {
    expect(component.find('div').exists()).toBe(true);
  });

  it('should handle onChange', () => {
    component.find('input').simulate('change', { currentTarget: { value: 'hi' } });

    expect(spy.mock.calls.length).toBe(1);

    expect(spy.mock.calls[0][0]).toBe('hi');
  });
});
