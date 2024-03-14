# ==================================== #
# CLOUDFRONT LOGS BUCKET
# ==================================== #
resource "aws_s3_bucket" "laszlobekessy_cloudfront_logs" {
  provider      = aws.eu_central_1
  bucket        = "laszlobekessy-cloudfront-logs"
  force_destroy = false
}

resource "aws_s3_bucket_ownership_controls" "laszlobekessy_cloudfront_logs_ownership_controls" {
  provider = aws.eu_central_1
  bucket   = aws_s3_bucket.laszlobekessy_cloudfront_logs.id
  rule {
    object_ownership = "ObjectWriter"
  }
}

resource "aws_s3_bucket_acl" "laszlobekessy_cloudfront_logs_bucket_acl" {
  provider   = aws.eu_central_1
  depends_on = [aws_s3_bucket_ownership_controls.laszlobekessy_cloudfront_logs_ownership_controls]
  bucket     = aws_s3_bucket.laszlobekessy_cloudfront_logs.id
  acl        = "private"
}

resource "aws_s3_bucket_public_access_block" "laszlobekessy_cloudfront_logs_access_block" {
  bucket = aws_s3_bucket.laszlobekessy_cloudfront_logs.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "laszlobekessy_cloudfront_logs_versioning" {
  provider = aws.eu_central_1
  bucket   = aws_s3_bucket.laszlobekessy_cloudfront_logs.id
  versioning_configuration {
    status = "Disabled"
  }
}

resource "aws_s3_bucket_lifecycle_configuration" "laszlobekessy_cloudfront_logs_lifecycle_configuration" {
  provider = aws.eu_central_1
  bucket   = aws_s3_bucket.laszlobekessy_cloudfront_logs.id

  rule {
    id = "remove-objects-older-than-1-year"

    expiration {
      days                         = 365
      expired_object_delete_marker = false
    }

    noncurrent_version_expiration {
      noncurrent_days = 1
    }

    status = "Enabled"
  }
}
