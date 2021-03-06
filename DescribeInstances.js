var AWS = require('aws-sdk');
var util = require('util');
AWS.config.region = 'ap-southeast-2';
AWS.config.apiVersions =
{
  ec2: '2016-04-01',
}


var EC2 = new AWS.EC2();
// var params =
// {
//   InstanceIds: ['i-babaf938']
// }


// EC2.stopInstances(params, function (err, data) {
//   if(err){
//     console.log(err, err.stack);
//   }
//   else{
//     console.log(data);
//   }
// });

// req.send();





var params =
{
  DryRun: false,
  // Filters: [{Name: 'instance-state-code', Value: 48}],
  Filters: [{Name: 'instance-state-code', Values: ['48', '80'] }],
  // InstanceIds: [
  //   // 'i-cc80f263',
  //   /* more items */
  // ],
  // // IncludeAllInstances: true
};

EC2.describeInstances(params, function(err, data) {
  if(err){
    console.log(err, err.stack);
  }
  else{
  	console.log(util.inspect(data, false, 5)); // log the successful data response
  }
});
