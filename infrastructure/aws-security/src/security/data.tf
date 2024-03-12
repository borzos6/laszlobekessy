data "aws_caller_identity" "current" {
  provider = aws.us_east_1
}

data "local_file" "pgp_key" {
  filename = "pgp/public-key-binary.gpg"
}