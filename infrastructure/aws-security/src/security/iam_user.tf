# -------- Human users -------- #
resource "aws_iam_user" "laszlobekessy_human_users" {
  for_each = local.laszlobekessy_human_users

  provider      = aws.us_east_1
  name          = each.value
  force_destroy = false
  path          = "/human/"
}

resource "aws_iam_user_login_profile" "laszlobekessy_human_users_login_profile" {
  for_each = local.laszlobekessy_human_users

  provider        = aws.us_east_1
  user            = each.value
  pgp_key         = data.local_file.pgp_key.content_base64
  password_length = 20
}

resource "aws_iam_access_key" "laszlobekessy_human_users_access_key" {
  for_each = local.laszlobekessy_human_users

  provider = aws.us_east_1
  user     = each.value
  pgp_key  = data.local_file.pgp_key.content_base64
}

# -------- Deployment users -------- #
resource "aws_iam_user" "laszlobekessy_deployment_users" {
  for_each = local.laszlobekessy_deployment_users

  provider      = aws.us_east_1
  name          = each.value
  force_destroy = false
  path          = "/deploy/"
}

resource "aws_iam_access_key" "laszlobekessy_deployment_users_access_key" {
  for_each = local.laszlobekessy_deployment_users

  provider = aws.us_east_1
  user     = each.value
  pgp_key  = data.local_file.pgp_key.content_base64
}
