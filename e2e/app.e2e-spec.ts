import { LawlietblackPage } from './app.po';

describe('lawlietblack App', function() {
  let page: LawlietblackPage;

  beforeEach(() => {
    page = new LawlietblackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
