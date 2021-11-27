# URL Shortener API

API that gets urls though the post method, stores it in a database and returns a json containing the shorter url. 
Once someone makes a get request using the shorter url, the api will look for the original url stored in the database. If the url is found, then the client is redirected
to the original url, otherweise it will send a json saying that the url was invalid.
