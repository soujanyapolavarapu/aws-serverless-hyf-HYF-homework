const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.s3PriceAnalyzer = async (event) => {
  const getObjectRequests = event.Records.map(record => {
    const params = {
      Bucket: record.s3.bucket.name,
      Key: record.s3.object.key
    };

    return s3.getObject(params).promise().then(data => {
      // implement code here
      let items = data.Body.toString().split("\n")
      const itemsWithLowPrice = items.map(item => item.split(',')).filter(item=> Number(item[2])<10)
      const arrayOfLowPrices= itemsWithLowPrice.map(item=>{console.log(Number(item[2]))
      return Number(item[2])
    })
      console.log({
          itemsWithLowPrice,
           arrayOfLowPrices,         
          minimumPrice: Math.min(...arrayOfLowPrices),
          maximumPrice: Math.max(...arrayOfLowPrices),
        });    

     return itemsWithLowPrice;

    }).catch(err => {
      console.error("Error calling S3 getObject:", err);
      return Promise.reject(err);
    })
  });

  return Promise.all(getObjectRequests).then(() => {
    console.debug('Complete!');
  });
}
