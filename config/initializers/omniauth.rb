Rails.application.config.middleware.use OmniAuth::Builder do
  client_id = '426995133353-mjm3jm9j5176sssmso2oa0ipo0ju58a2.apps.googleusercontent.com'
  secret_key = 'bRTxHzByWbYwP_NkVv40Xy_T'
  provider :google, client_id, secret_key
end