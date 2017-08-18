import { DBaljeetsinghNgPage } from './app.po';

describe('d-baljeetsingh-ng App', () => {
  let page: DBaljeetsinghNgPage;

  beforeEach(() => {
    page = new DBaljeetsinghNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
