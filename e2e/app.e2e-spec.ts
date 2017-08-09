import { OrlpWebCliPage } from './app.po';

describe('orlp-web-cli App', () => {
  let page: OrlpWebCliPage;

  beforeEach(() => {
    page = new OrlpWebCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
