// MQTT client for testing
// mosca server in mqtt_cc project
// this client publishes msg every 10 secs
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function() {
  setInterval(function() {
    client.publish('/mosquitto/test', 'I amm mqtt_pub not nodemcu');
    console.log('message sent');
  }, 10000);
});
