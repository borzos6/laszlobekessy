import { secretsManagerConnector } from './secrets-manager-connector';

describe('secretsManagerConnector', () => {
  it('should work', () => {
    expect(secretsManagerConnector()).toEqual('secrets-manager-connector');
  });
});
