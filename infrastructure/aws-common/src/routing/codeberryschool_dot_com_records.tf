# ==================================== #
# Main TXT record
# ==================================== #
resource "aws_route53_record" "codeberryschool_com_txt_record" {
  provider = aws.us_east_1
  name     = "codeberryschool.com"
  records = [
    "v=spf1 include:mailgun.org ~all"
  ]
  ttl     = 300
  type    = "TXT"
  zone_id = aws_route53_zone.codeberryschool_com_zone.zone_id
}

# ==================================== #
# Messaging
# ==================================== #
resource "aws_route53_record" "email__domainkey_codeberryschool_com_txt_record" {
  provider = aws.us_east_1
  name     = "email._domainkey.codeberryschool.com"
  records  = ["k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDS2qOE4kKPJ8ocdJb3dp5B16S6qNUoDpJYBzdj75V2mIVrRB7Ff0P/YlSxpPkUUoUrEIZHGI/srzX3Lznew0fkVTZGrYGn+ujkSWOThSuxHnDbpAMTOGsR2cm5PKqgLl6aDeV+5WfUX5x6gdmwvhC4uCCssu5HTi+laqHptM+JWwIDAQAB"]
  ttl      = 300
  type     = "TXT"
  zone_id  = aws_route53_zone.codeberryschool_com_zone.zone_id
}

# ==================================== #
# Mailing
# ==================================== #
resource "aws_route53_record" "codeberryschool_com_mx_record" {
  provider = aws.us_east_1
  name     = "codeberryschool.com"
  records  = ["10 mxa.eu.mailgun.org", "10 mxb.eu.mailgun.org"]
  ttl      = 300
  type     = "MX"
  zone_id  = aws_route53_zone.codeberryschool_com_zone.zone_id
}

resource "aws_route53_record" "email_codeberryschool_com_cname_record" {
  provider = aws.us_east_1
  name     = "email.codeberryschool.com"
  records  = ["eu.mailgun.org"]
  ttl      = 300
  type     = "CNAME"
  zone_id  = aws_route53_zone.codeberryschool_com_zone.zone_id
}


