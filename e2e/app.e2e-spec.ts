import { MinicardPage } from './app.po';

describe('minicard App', () => {
  let page: MinicardPage;

  beforeEach(() => {
    page = new MinicardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mi works!');
  });
});
