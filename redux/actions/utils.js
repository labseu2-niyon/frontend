function getOrigin(req) {
  let protocol = 'https:';

  let host = '';

  if (typeof window !== 'undefined') {
    host = window.location.host;
  } else if (req && req.headers) {
    host = req.headers['x-forwarded-host'] || req.headers['host'];
  }

  if (host.indexOf('localhost') > -1) {
    protocol = 'http:';
  }
  return protocol + '//' + host;
}

export const getUrl = req => {
  let _BASE_URL;
  if (process.env.NODE_ENV === 'production') {
    const url = getOrigin(req);
    _BASE_URL =
      url === 'https://app.niyonapp.com'
        ? 'https://niyon-prod.herokuapp.com/api'
        : 'https://niyon-staging.herokuapp.com/api';
  } else {
    _BASE_URL = 'https://niyon-dev.herokuapp.com/api';
  }

  return _BASE_URL;
};
