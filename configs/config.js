var Config = function() {
}

Config.prototype.getConfig = function() {
  config = {
    db: {
      prod: "mongodb://commercialtribe:commercialtribe@paulo.mongohq.com:10003/dev",
      dev: "mongodb://commercialtribe:commercialtribe@paulo.mongohq.com:10003/dev",
      test: "mongodb://commercialtribe:commercialtribe@paulo.mongohq.com:10003/dev"
    }
  }

  return config;
}

module.exports = Config;
