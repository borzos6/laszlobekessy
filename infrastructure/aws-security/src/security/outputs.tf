# laszlobekessy human users
output "laszlobekessy_human_users" {
  value = {
    for k, user in aws_iam_user.laszlobekessy_human_users : k => {
      name       = aws_iam_user.laszlobekessy_human_users[k].name
      password   = aws_iam_user_login_profile.laszlobekessy_human_users_login_profile[k].encrypted_password
      key_id     = aws_iam_access_key.laszlobekessy_human_users_access_key[k].id
      key_secret = aws_iam_access_key.laszlobekessy_human_users_access_key[k].encrypted_secret
    }
  }
}

# laszlobekessy deployment users
output "laszlobekessy_deployment_users" {
  value = {
    for k, user in aws_iam_user.laszlobekessy_deployment_users : k => {
      name       = aws_iam_user.laszlobekessy_deployment_users[k].name
      key_id     = aws_iam_access_key.laszlobekessy_deployment_users_access_key[k].id
      key_secret = aws_iam_access_key.laszlobekessy_deployment_users_access_key[k].encrypted_secret
    }
  }
}
