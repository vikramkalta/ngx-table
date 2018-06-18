import { NgxAwesomeTableDemoPage } from './app.po';

describe('ngx-awesome-table-demo App', () => {
  let page: NgxAwesomeTableDemoPage;

  beforeEach(() => {
    page = new NgxAwesomeTableDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
