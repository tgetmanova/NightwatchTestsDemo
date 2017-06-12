var SELENIUM_CONFIGURATION = {
    start_process: false,
    server_path: '',
    host: '127.0.0.1',
    port: 4444
};

var FIREFOX_CONFIGURATION = {
    browserName: 'firefox',
    javascriptEnabled: true,
    acceptSslCerts: true
};

var DEFAULT_CONFIGURATION = {
    launch_url: 'https://github.com',
    selenium_port: 4444,
    selenium_host: 'localhost',
    desiredCapabilities: FIREFOX_CONFIGURATION
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