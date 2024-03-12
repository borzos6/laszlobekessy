resource "aws_iam_policy" "laszlobekessy_s3_console_generic_access" {
  provider    = aws.us_east_1
  name        = "laszlobekessy-s3-console-generic-access"
  description = "Generic access to S3 buckets"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "AllowSESAccess"
        Action = [
          "s3:GetAccountPublicAccessBlock",
          "s3:GetBucketPublicAccessBlock",
          "s3:GetBucketPolicyStatus",
          "s3:GetBucketAcl",
          "s3:ListAccessPoints"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_policy" "laszlobekessy_cloudwatch_metrics_access" {
  provider    = aws.us_east_1
  name        = "laszlobekessy-cloudwatch-metrics-access"
  description = "Access to Cloudwatch Metrics"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "AllowCloudWatchMetricAccess"
        Action = [
          "cloudwatch:PutMetricData",
          "cloudwatch:GetMetricData",
          "cloudwatch:GetMetricStatistics",
          "cloudwatch:GetMetricWidgetImage",
          "cloudwatch:ListMetrics"
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_policy" "laszlobekessy_secrets_manager_access" {
  provider    = aws.us_east_1
  name        = "laszlobekessy-secrets-manager-access"
  description = "Access to Secrets Manager"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid      = "AllowSecretsManagerAccess"
        Action   = "secretsmanager:GetSecretValue"
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_policy" "laszlobekessy_dynamodb_access" {
  provider    = aws.us_east_1
  name        = "laszlobekessy-dynamodb-access"
  description = "Access to DynamoDB"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid = "AllowDynamoDBAccess"
        Action = [
          "dynamodb:PutItem",
          "dynamodb:Query",
          "dynamodb:Scan",
          "dynamodb:GetItem",
          "dynamodb:UpdateItem",
          "dynamodb:DeleteItem",
        ]
        Effect   = "Allow"
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_policy" "laszlobekessy_cloudwatch_logging_access" {
  provider    = aws.us_east_1
  name        = "laszlobekessy-cloudwatch-logging-access"
  description = "Read and Write Cloudwatch logs"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid      = "AllowCloudWatchLoggingAccess"
        Action   = "logs:*",
        Effect   = "Allow"
        Resource = "*",
      }
    ]
  })
}
