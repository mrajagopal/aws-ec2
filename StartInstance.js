var AWS = require('aws-sdk');
AWS.config.region = 'ap-southeast-2';
AWS.config.apiVersions =
{
  ec2: '2016-04-01',
}


var EC2 = new AWS.EC2();
var params =
{
  InstanceIds: ['i-cc80f263']
}

EC2.startInstances(params, function (err, data) {
  if(err){
    console.log(err, err.stack);
  }
  else{
    console.log(data);
  }
});

// req.send();
