# ==================================== #
# The main Zone, NS & SOA
# ==================================== #
resource "aws_route53_zone" "codeberryschool_com_zone" {
  provider      = aws.us_east_1
  name          = "codeberryschool.com"
  comment       = "codeberryschool.com zone"
  force_destroy = false
}

resource "aws_route53_record" "codeberryschool_com_ns_record" {
  provider        = aws.us_east_1
  name            = "codeberryschool.com"
  type            = "NS"
  ttl             = 172800
  allow_overwrite = false
  zone_id         = aws_route53_zone.codeberryschool_com_zone.zone_id

  records = [
    "${aws_route53_zone.codeberryschool_com_zone.name_servers[0]}.",
    "${aws_route53_zone.codeberryschool_com_zone.name_servers[1]}.",
    "${aws_route53_zone.codeberryschool_com_zone.name_servers[2]}.",
    "${aws_route53_zone.codeberryschool_com_zone.name_servers[3]}.",
  ]
}

resource "aws_route53_record" "codeberryschool_com_soa_record" {
  provider = aws.us_east_1
  name     = "codeberryschool.com"
  type     = "SOA"
  ttl      = 900
  zone_id  = aws_route53_zone.codeberryschool_com_zone.zone_id
  records  = ["${aws_route53_zone.codeberryschool_com_zone.name_servers[0]}. awsdns-hostmaster.amazon.com. 1 7200 900 1209600 86400"]
}

resource "aws_route53_record" "codeberryschool_com_caa_record" {
  provider = aws.us_east_1
  zone_id  = aws_route53_zone.codeberryschool_com_zone.zone_id
  name     = "codeberryschool.com"
  type     = "CAA"
  ttl      = "300"

  records = [
    "0 issuewild \"amazon.com\"",
    "0 issuewild \"amazontrust.com\"",
    "0 issuewild \"awstrust.com\"",
    "0 issuewild \"amazonaws.com\""
  ]
}
