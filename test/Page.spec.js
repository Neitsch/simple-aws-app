import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import Page from '../app/Page.jsx';

describe('<Page />', () => {
  it('did mount', () => {
    expect(shallow(<Page name="World!" />).is('.commentBox')).to.equal(true);
  });
});
