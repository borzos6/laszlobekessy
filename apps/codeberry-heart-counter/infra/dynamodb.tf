resource "aws_dynamodb_table" "codeberry_heart_counter" {
  provider     = aws.us_east_1
  name         = "CodeberryHeartCounter"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "Name"

  attribute {
    name = "Name"
    type = "S"
  }

  point_in_time_recovery {
    enabled = true
  }

  deletion_protection_enabled = true

  tags = {
    Name        = "CodeberryHeartCounter"
    Environment = "production"
  }
}
