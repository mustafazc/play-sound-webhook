# play-sound-webhook
A nodejs server and app that listens on an endpoint and plays sounds. 

This is a project that is running on a local device and has a webhook exposed (using ngrok) to AWS Lambda that is triggered via an AWS IOT button. The button is used as a doorbell and plays a sound when it is pressed.  
The slack channel can calso call the webhook (using slash commands) with a url that just plays a youtube url.
The lambda function also shoots a message to a slack channel when the doorbell is pressed. 

Functionality - 
* play sound 
* play file [TODO]
* play youtube url

TODO: 
* Have endpoints for each different functionality
* Handle slack or json responses better
* Add lambda function to repository
