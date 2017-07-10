import { BoardPage } from './app.po';

describe('board App', () => {
  let page: BoardPage;

  beforeEach(() => {
    page = new BoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
