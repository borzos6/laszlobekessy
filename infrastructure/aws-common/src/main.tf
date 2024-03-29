# ==================================== #
# Logging module
# ==================================== #
module "logging" {
  source = "./logging"

  providers = {
    aws.us_east_1    = aws.us_east_1
    aws.eu_central_1 = aws.eu_central_1
  }
}

# ==================================== #
# Networking module
# ==================================== #
module "networking" {
  source = "./networking"

  providers = {
    aws.us_east_1    = aws.us_east_1
    aws.eu_central_1 = aws.eu_central_1
  }
}

# ==================================== #
# Routing module
# ==================================== #
module "routing" {
  source = "./routing"

  providers = {
    aws.us_east_1    = aws.us_east_1
    aws.eu_central_1 = aws.eu_central_1
  }
}

# ==================================== #
# Utility module
# ==================================== #
module "utility" {
  source = "./utility"

  providers = {
    aws.us_east_1    = aws.us_east_1
    aws.eu_central_1 = aws.eu_central_1
  }
}
