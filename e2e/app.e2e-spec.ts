import { CpupRunPage } from './app.po';

describe('cpup-run App', () => {
  let page: CpupRunPage;

  beforeEach(() => {
    page = new CpupRunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
