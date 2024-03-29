resource "aws_cloudfront_distribution" "cloudfront_distribution" {
  provider = aws.us_east_1
  aliases  = var.desired_urls
  enabled  = true

  origin {
    domain_name = "${aws_s3_bucket.site_bucket.bucket}.s3-website.${aws_s3_bucket.site_bucket.region}.amazonaws.com"
    origin_id   = "S3-${aws_s3_bucket.site_bucket.bucket}"

    custom_origin_config {
      http_port                = 80
      https_port               = 443
      origin_keepalive_timeout = 5
      origin_protocol_policy   = "http-only"
      origin_read_timeout      = 30
      origin_ssl_protocols     = ["TLSv1.2"]
    }
  }

  default_cache_behavior {
    allowed_methods        = ["HEAD", "DELETE", "POST", "GET", "OPTIONS", "PUT", "PATCH"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    max_ttl                = 31536000
    min_ttl                = 0
    default_ttl            = 86400
    smooth_streaming       = false
    target_origin_id       = "S3-${aws_s3_bucket.site_bucket.bucket}"
    viewer_protocol_policy = "redirect-to-https"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
      headers = ["Referer"]
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = data.aws_acm_certificate.acm_certificate.arn
    cloudfront_default_certificate = false
    minimum_protocol_version       = "TLSv1.2_2019"
    ssl_support_method             = "sni-only"
  }

  custom_error_response {
    # S3 returns 403 for non-existing pages
    error_caching_min_ttl = 0
    error_code            = "403"
    response_code         = "404"
    response_page_path    = "/404.html"
  }

  logging_config {
    bucket          = "${var.cloudfront_logs_bucket_name}.s3.amazonaws.com"
    include_cookies = false
    prefix          = var.main_url
  }

  is_ipv6_enabled     = true
  default_root_object = "index.html"
  http_version        = "http2"
  price_class         = "PriceClass_100"
  retain_on_delete    = false
}
