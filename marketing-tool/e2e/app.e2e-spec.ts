import { MarketingToolPage } from './app.po';

describe('marketing-tool App', function() {
  let page: MarketingToolPage;

  beforeEach(() => {
    page = new MarketingToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
