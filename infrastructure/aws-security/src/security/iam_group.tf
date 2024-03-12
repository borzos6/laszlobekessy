# -------------- Sysadmin -------------- #
resource "aws_iam_group" "sysadmin" {
  provider = aws.us_east_1
  name     = "sysadmin"
  path     = "/"
}

resource "aws_iam_group_membership" "sysadmin" {
  provider = aws.us_east_1
  name     = "sysadmin"
  users    = [for item, value in local.laszlobekessy_sysadmin_users : "${value}"]
  group    = aws_iam_group.sysadmin.name
}

# -------------- Billing -------------- #
resource "aws_iam_group" "billing" {
  provider = aws.us_east_1
  name     = "billing"
  path     = "/"
}

resource "aws_iam_group_membership" "billing" {
  provider = aws.us_east_1
  name     = "billing"
  users    = [for item, value in local.laszlobekessy_billing_users : "${value}"]
  group    = aws_iam_group.sysadmin.name
}
