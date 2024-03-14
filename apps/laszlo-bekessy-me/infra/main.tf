# ==================================== #
# PRODUCTION
# ==================================== #
module "laszlo_bekessy_me_production" {
  source = "../../../infrastructure/aws-blueprint-github-s3-cloudfront/src"

  providers = {
    aws.us_east_1    = aws.us_east_1
    aws.eu_central_1 = aws.eu_central_1
  }

  # Domain setup
  main_url               = "laszlo.bekessy.me"
  desired_urls           = ["laszlo.bekessy.me", "bekessy.me", "www.bekessy.me"]
  zone_name              = "bekessy.me"
  acm_certificate_domain = "bekessy.me"

  # Deployment setup
  iam_deployment_user_name    = "laszlobekessy.deploy.website"
  cloudfront_logs_bucket_name = "laszlobekessy-cloudfront-logs"
}




