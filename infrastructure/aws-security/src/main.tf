# ==================================== #
# Security module
# ==================================== #
module "security" {
  source = "./security"

  providers = {
    aws.us_east_1    = aws.us_east_1
    aws.eu_central_1 = aws.eu_central_1
  }
}
