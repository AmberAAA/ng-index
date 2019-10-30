import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('e2e is working!', () => {
    page.navigateTo();
    expect(true).toBe(true);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
  });
});
