resource "aws_iam_group_policy_attachment" "administrator_access" {
  provider   = aws.us_east_1
  group      = "sysadmin"
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

resource "aws_iam_group_policy_attachment" "billing_access" {
  provider   = aws.us_east_1
  group      = "billing"
  policy_arn = "arn:aws:iam::aws:policy/job-function/Billing"
}