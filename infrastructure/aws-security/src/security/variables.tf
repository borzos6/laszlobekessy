# ==================================== #
# These are the human users
# ==================================== #
locals {
  laszlobekessy_human_users = {
    "laszlo_bekessy" = "laszlo.bekessy",
  }

  # NOTE: This must be a subset of laszlobekessy_human_users found in security/variables.tf
  laszlobekessy_sysadmin_users = {
    "laszlo_bekessy" = "laszlo.bekessy",
  }

  # NOTE: This must be a subset of laszlobekessy_human_users found in security/variables.tf
  laszlobekessy_billing_users = {
    "laszlo_bekessy" = "laszlo.bekessy",
  }

  laszlobekessy_deployment_users = {
    "laszlobekessy_deploy_website" = "laszlobekessy.deploy.website",
  }
}
