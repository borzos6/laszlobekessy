
resource "aws_s3_bucket" "site_bucket" {
  provider      = aws.eu_central_1
  bucket        = var.main_url
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "site_bucket_s3_public_access_block" {
  provider = aws.eu_central_1
  bucket   = aws_s3_bucket.site_bucket.bucket

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "site_bucket_s3_website_configuration" {
  provider = aws.eu_central_1
  bucket   = aws_s3_bucket.site_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

data "aws_iam_policy_document" "site_bucket_policy" {
  statement {
    sid    = "Allow public access"
    effect = "Allow"

    principals {
      type        = "*"
      identifiers = ["*"]
    }

    actions = ["s3:GetObject", "s3:GetObjectVersion"]
    resources = [
      "${aws_s3_bucket.site_bucket.arn}",
      "${aws_s3_bucket.site_bucket.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_policy" "site_bucket_policy" {
  provider = aws.eu_central_1
  bucket   = aws_s3_bucket.site_bucket.id
  policy   = data.aws_iam_policy_document.site_bucket_policy.json
}
