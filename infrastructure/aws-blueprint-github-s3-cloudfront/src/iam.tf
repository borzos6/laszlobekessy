resource "aws_iam_policy" "s3_deploy_policy" {
  provider    = aws.us_east_1
  name        = "${var.main_url}-s3-deploy-policy"
  description = "IAM Policy for S3 automated deployment"
  path        = "/"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        "Sid" : "AllowBucketAccess",
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:ListBucket",
          "s3:DeleteObject",
          "s3:GetBucketPolicy",
        ]
        Effect = "Allow"
        Resource = [
          "${aws_s3_bucket.site_bucket.arn}",
          "${aws_s3_bucket.site_bucket.arn}/*",
        ]
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "attachment_1" {
  provider   = aws.us_east_1
  user       = var.iam_deployment_user_name
  policy_arn = aws_iam_policy.s3_deploy_policy.arn
}

resource "aws_iam_policy" "cloudfront_invalidation_policy" {
  provider    = aws.us_east_1
  name        = "${var.main_url}-cloudfront-invalidation-policy"
  description = "IAM Policy for CloudFront automated deployment"
  path        = "/"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        "Sid"    = "AllowCloudFrontInvalidation",
        "Effect" = "Allow",
        "Action" = "cloudfront:CreateInvalidation",
        "Resource" = [
          "${aws_cloudfront_distribution.cloudfront_distribution.arn}",
        ]
      }
    ]
  })
}

resource "aws_iam_user_policy_attachment" "attachment_2" {
  provider   = aws.us_east_1
  user       = var.iam_deployment_user_name
  policy_arn = aws_iam_policy.cloudfront_invalidation_policy.arn
}
