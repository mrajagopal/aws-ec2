var AWS = require('aws-sdk');
AWS.config.region = 'ap-southeast-2';
AWS.config.apiVersions =
{
  ec2: '2016-04-01',
}


// Attempt to create an AMI off madhu-v12 instance name  - instance ID i-cc80f263
var EC2 = new AWS.EC2();
var params =
{
  InstanceId: 'i-cc80f263',      // required
  Name: 'AMI-off-madhu-v12-3-NoReboot-true',     // required
  // BlockDeviceMappings: [ ]       // Not specifying these and leaving to the defaults of the API
  Description: 'AMI created off madhu-v12 instance',
  DryRun: false,
  NoReboot: true
}

EC2.createImage(params, function (err, data) {
  if(err){
    console.log(err, err.stack);
  }
  else{
    console.log(data);
  }
});
