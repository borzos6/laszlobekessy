# ==================================== #
# ROUTING RESOURCES
# ==================================== #
data "aws_route53_zone" "zone" {
  provider = aws.us_east_1
  name     = var.zone_name
}

data "aws_acm_certificate" "acm_certificate" {
  provider    = aws.us_east_1
  domain      = var.acm_certificate_domain
  statuses    = ["ISSUED"]
  most_recent = true
}

