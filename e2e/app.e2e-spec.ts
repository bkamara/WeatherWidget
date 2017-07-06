import { WeatherWidgetPage } from './app.po';

describe('weather-widget App', () => {
  let page: WeatherWidgetPage;

  beforeEach(() => {
    page = new WeatherWidgetPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
