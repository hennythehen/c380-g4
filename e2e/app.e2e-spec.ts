import { EnrollmentSystemPage } from './app.po';

describe('enrollment-system App', () => {
  let page: EnrollmentSystemPage;

  beforeEach(() => {
    page = new EnrollmentSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
