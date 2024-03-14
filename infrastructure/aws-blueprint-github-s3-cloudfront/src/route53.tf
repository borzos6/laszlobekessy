resource "aws_route53_record" "a_record" {
  for_each = toset(var.desired_urls)

  provider = aws.us_east_1
  name     = "${each.key}.${data.aws_route53_zone.zone.name}"
  type     = "A"
  zone_id  = data.aws_route53_zone.zone.zone_id

  alias {
    evaluate_target_health = true

    name    = aws_cloudfront_distribution.cloudfront_distribution.domain_name
    zone_id = aws_cloudfront_distribution.cloudfront_distribution.hosted_zone_id
  }
}
