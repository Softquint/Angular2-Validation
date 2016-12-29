import { PractisPage } from './app.po';

describe('practis App', function() {
  let page: PractisPage;

  beforeEach(() => {
    page = new PractisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
