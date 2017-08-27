var SELENIUM_CONFIGURATION = {
    start_process: true,
    server_path: 'source/selenium-server-standalone-3.5.2.jar',
    host: '127.0.0.1',
    port: 4444,
	cli_args : {
      "webdriver.chrome.driver" : "source/chromedriver.exe",
      "webdriver.gecko.driver" : "source/geckodriver.exe",
      "webdriver.edge.driver" : "source/MicrosoftWebDriver.exe"
    }
};

var FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true
};

var CHROME_CONFIGURATION = {
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true
};

var DEFAULT_CONFIGURATION = {
    launch_url: 'https://github.com',
    selenium_port: 4444,
    selenium_host: 'localhost',
    desiredCapabilities: CHROME_CONFIGURATION
};

var ENVIRONMENTS = {
    default: DEFAULT_CONFIGURATION
};

module.exports = {
    src_folders: ['tests'],
    page_objects_path: ['pages'],
    selenium: SELENIUM_CONFIGURATION,
    test_settings: ENVIRONMENTS
};
