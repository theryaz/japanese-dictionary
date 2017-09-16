import { JapaneseStudyPage } from './app.po';

describe('japanese-study App', () => {
  let page: JapaneseStudyPage;

  beforeEach(() => {
    page = new JapaneseStudyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to jap!!');
  });
});
