output "cloudfront_distributions" {
  value = {
    "${var.main_url}" = {
      id          = aws_cloudfront_distribution.cloudfront_distribution.id
      urls        = aws_cloudfront_distribution.cloudfront_distribution.aliases
      domain_name = aws_cloudfront_distribution.cloudfront_distribution.domain_name
    }
  }
}
