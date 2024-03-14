output "laszlobekessy_human_users" {
  value       = module.security.laszlobekessy_human_users
  description = "The Access keys and secrets for the IAM human users"
}

output "laszlobekessy_deployment_users" {
  value       = module.security.laszlobekessy_deployment_users
  description = "The Access keys and secrets for the IAM deployment users"
}
