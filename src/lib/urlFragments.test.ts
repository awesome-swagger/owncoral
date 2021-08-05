import { assert } from 'chai';

import { addressToUrlFragment } from './urlFragments';

describe('addressToUrlFragment', () => {
  it('empty address returns empty', () => {
    assert.equal(
      addressToUrlFragment({
        line1: '',
        line2: '',
        line3: '',
        cityLocality: '',
        stateRegion: '',
        postalCode: '',
        country: '',
      }),
      '',
    );
  });

  it('simple address', () => {
    assert.equal(
      addressToUrlFragment({
        line1: '123 Scary Ln',
        line2: '',
        line3: '',
        cityLocality: 'San Dimas',
        stateRegion: 'CA',
        postalCode: '',
        country: '',
      }),
      '123-Scary-Ln-San-Dimas-CA',
    );
  });

  it('URI encodes weird characters', () => {
    assert.equal(
      addressToUrlFragment({
        line1: '123 Scary Ln',
        line2: 'шеллы',
        line3: null,
        cityLocality: 'San Dimas??',
        stateRegion: 'CA',
        postalCode: '',
        country: 'Russia',
      }),
      '123-Scary-Ln-%D1%88%D0%B5%D0%BB%D0%BB%D1%8B-San-Dimas%3F%3F-CA-Russia',
    );
  });

  it('handles nulls', () => {
    assert.equal(
      addressToUrlFragment({
        line1: '123 Scary Ln',
        line2: null,
        line3: null,
        cityLocality: 'San Dimas',
        stateRegion: 'CA',
        postalCode: '',
        country: '',
      }),
      '123-Scary-Ln-San-Dimas-CA',
    );
  });
});
