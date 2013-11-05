var mongoose = require('mongoose');
var Config = require('../configs/config');

var config = new Config();
config = config.getConfig().db.dev;
mongoose.connect(config);

var Schema = mongoose.Schema;

var ScenarioSchema = new Schema({
  title: 'String', 
  description: 'String', 
  createdDate: 'Date', 
  numberOfViews: 'Number'
});

var Scenarios = mongoose.model('scenarios', ScenarioSchema);

module.exports.Scenarios = Scenarios;
