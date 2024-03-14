# ==================================== #
# PRODUCTION
# ==================================== #
module "codeberryschool_com_production" {
  source = "../../../infrastructure/aws-blueprint-github-s3-cloudfront/src"

  providers = {
    aws.us_east_1    = aws.us_east_1
    aws.eu_central_1 = aws.eu_central_1
  }

  # Domain setup
  main_url = "codeberryschool.com"
  desired_urls = [
    "codeberryschool.com",
    "www.codeberryschool.com",
    "hu.codeberryschool.com",
    "orange.codeberryschool.com",
    "central.codeberryschool.com",
    "data-mining.codeberryschool.com",
    "stabill.codeberryschool.com",
    "payment.codeberryschool.com",
    "api.codeberryschool.com",
    "design-system.codeberryschool.com",
  ]
  zone_name              = "codeberryschool.com"
  acm_certificate_domain = "codeberryschool.com"

  # Deployment setup
  iam_deployment_user_name    = "laszlobekessy.deploy.website"
  cloudfront_logs_bucket_name = "laszlobekessy-cloudfront-logs"
}




