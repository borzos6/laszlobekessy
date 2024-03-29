# ==================================== #
# US-EAST-1
# ==================================== #
resource "aws_default_network_acl" "acl_us_east_1" {
  provider = aws.us_east_1

  default_network_acl_id = aws_vpc.vpc_us_east_1.default_network_acl_id
  tags                   = { Name = "us-east-1 default" }

  subnet_ids = [
    aws_subnet.subnet_1a_us_east_1.id,
    aws_subnet.subnet_1b_us_east_1.id,
    aws_subnet.subnet_1c_us_east_1.id,
    aws_subnet.subnet_1d_us_east_1.id,
    aws_subnet.subnet_1e_us_east_1.id,
    aws_subnet.subnet_1f_us_east_1.id,
  ]

  ingress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  egress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }
}

# ==================================== #
# EU-CENTRAL-1
# ==================================== #
resource "aws_default_network_acl" "acl_eu_central_1" {
  provider = aws.eu_central_1

  default_network_acl_id = aws_vpc.vpc_eu_central_1.default_network_acl_id
  tags                   = { Name = "eu-central-1 default" }

  subnet_ids = [
    aws_subnet.subnet_1a_eu_central_1.id,
    aws_subnet.subnet_1b_eu_central_1.id,
    aws_subnet.subnet_1c_eu_central_1.id,
  ]

  egress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }

  ingress {
    protocol   = -1
    rule_no    = 100
    action     = "allow"
    cidr_block = "0.0.0.0/0"
    from_port  = 0
    to_port    = 0
  }
}
