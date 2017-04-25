import { FahrtkostenClientPage } from './app.po';

describe('fahrtkosten-client App', () => {
  let page: FahrtkostenClientPage;

  beforeEach(() => {
    page = new FahrtkostenClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
