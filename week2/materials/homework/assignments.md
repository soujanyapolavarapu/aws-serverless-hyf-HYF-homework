## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `https://s3.console.aws.amazon.com/s3/buckets/soujanya-week2-homework?region=us-east-1&tab=objects`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name: `AWS Certificate Manager`

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: `First 50 TB / Month:	$0.023 per GB`

Total size of website: `Total Size: 494.6 KiB`
(aws s3 ls s3://soujanya-week2-homework --recursive --human-readable --summarize)

**Assignment 7:**

Write down the main cost factors for S3

brief description: ` Storing data pricing, Request and data retrieval pricing, Data transfer and Transfer acceleration pricing, Data management and Analytics pricing, The price to process your data with S3 Object Lambda`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs: 

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment: 

use case: `As a data lake, centralized, secure, and durable cloud-based storage platform that allows to ingest and store structured and unstructured data, and transform these raw data assets as needed. It can be used as a complete portfolio of data exploration, reporting, analytics, machine learning, and visualization tools on the data. A data lake makes data and the optimal analytics tools available to more users, across more lines of business. This enables them to get all of the business insights they need, whenever they need them.`

command: URL:`https://docs.aws.amazon.com/whitepapers/latest/building-data-lakes/amazon-s3-data-lake-storage-platform.html`

## Optional assignments: 

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description: `Clean up incomplete multipart uploads. Delete previous versions of objects that you don't need. Review your storage-class transition costs. Review your data retrieval costs. Track the requests made to your bucket. Check for changes in the size of your bucket. Review the cost of individual buckets. Understand how your usage relates to your charges.` 

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `AWS s3 offers server-side encryption.(https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)` 
