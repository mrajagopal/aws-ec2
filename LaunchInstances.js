var AWS = require('aws-sdk');
AWS.config.region = 'ap-southeast-2';
AWS.config.apiVersions =
{
  ec2: '2016-04-01',
}


var EC2 = new AWS.EC2();
var params =
{
  InstanceIds: ['i-cc80f263']       // This is a specific ami created earlier using CreateAmi.js
}

var params = {
  ImageId: 'ami-a3fbcac0', /* required */
  MaxCount: 1, /* required */
  MinCount: 1, /* required */

  DryRun: false,
  KeyName: 'aws-sydney-madhu',
  InstanceType: 'm4.2xlarge',
  Monitoring: {
    Enabled: true
  },
  SecurityGroupIds: [
    'sg-8a4509ee',
  ],
};

EC2.runInstances(params, function (err, data) {
  if(err){
    console.log(err, err.stack);
  }
  else{
  	var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance", instanceId);
    // console.log(data);
	  // Add tags to the instance
	params = {Resources: [instanceId], Tags: [
	  {Key: 'Name', Value: 'private-ami-ve'}
	]};
	EC2.createTags(params, function(err) {
	  console.log("Tagging instance", err ? "failure" : "success");
	});    
  }
});
