var AWS = require('aws-sdk');
const util = require('util');

/**
 * Don't hard-code your credentials!
 * Export the following environment variables instead:
 *
 * export AWS_ACCESS_KEY_ID='AKID'
 * export AWS_SECRET_ACCESS_KEY='SECRET'
 */


// var ec2 = new AWS.EC2();
// ec2.acceptVpcPeeringConnection(params, function (err, data) {
//   if (err){
//     console.log(err, err.stack); // an error occurred
//   }
//   else{
//     console.log(data);           // successful response
//   }
// });

AWS.config.region = 'ap-southeast-2';
AWS.config.apiVersions =
{
  ec2: '2016-04-01',
}

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

var request = new AWS.EC2().describeInstances(params);

// register a callback to report on the data
request.on('success', function(resp) {
  console.log(util.inspect(resp.data, false, 5)); // log the successful data response
  // console.log(resp.data);
});

request.on('error', function(resp) {
  if (resp.error){
    console.log(resp.data);
  }
  else {
    console.log('Unable to process AWS request: ', resp.error);
  }
});

// send the request
// console.log(request);
request.send();


var startInstanceParams =
{
  InstanceIds: ['i-babaf938']
}

var instanceStartReq = new AWS.EC2().startInstances(startInstanceParams);

instanceStartReq.on('success', function(resp){
  console.log(resp.data);
});

instanceStartReq.send();
