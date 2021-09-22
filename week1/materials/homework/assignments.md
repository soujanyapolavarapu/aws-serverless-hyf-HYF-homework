#### Example asignment

command: `lambda list-functions`

doc: `https://docs.aws.amazon.com/cli/latest/reference/lambda/list-functions.html`

## Mandatory assignments

**Assignment 1:**

command: `aws s3 ls`

doc: `https://docs.aws.amazon.com/cli/latest/reference/s3/ls.html`

number of buckets: `11`

**Assignment 2:**
filename: `christopher-was-here.json`

## Optional Assignments

command: `aws s3 presign s3://hyf-products-bucket/christopher-was-here.json --expires-in 60`

url: `https://hyf-products-bucket.s3.amazonaws.com/christopher-was-here.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2F346X675XN7OAVQ%2F20210906%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210906T215119Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=f0726dfc2ed1e2ac34eee14012cbd7833aac5a4513ff6d4e26e974e838cb51ee`

**Assignment 3:**
**Assignment 4:**
command: `aws s3 ls s3://hyf-products-bucket --human-readable --summarize`

result: `2021-08-03 17:05:31    0 Bytes christopher-was-here.json
2021-08-26 22:32:53   11 Bytes hello-hyf.txt
2021-08-03 17:42:51  810 Bytes package.json
2021-08-22 14:21:08  297.4 MiB week3-homework.mkv
2021-08-22 14:21:08  142.8 MiB week3-lessonPlan.mkv
2021-09-04 18:19:54  430.0 MiB week4-homework-p1.mkv
2021-09-04 18:20:57  270.9 MiB week4-homework-p2.mkv

Total Objects: 7
   Total Size: 1.1 GiB`


