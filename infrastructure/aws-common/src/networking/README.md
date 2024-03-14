# Networking

- Network resources are created by default on launch of an AWS profile. It is the best to import these first and then modify the configuration later. The easiest way to do that is to do a terraformer diff and import them one by one. _Note: There's a VPC structure for each region, so if you use multiple, you need to import them all._

- For importing, use this order (and example commands)

  1. VPC: `terraform import module.networking.aws_vpc.vpc_us_east_1 vpc-22283845`
  2. Internet Gateway: `terraform import module.networking.aws_internet_gateway.igw_us_east_1 igw-c26eb4a5`
  3. Subnets: `terraform import module.networking.aws_subnet.subnet_1_us_east_1 subnet-09f73535`
  4. Security group: _Note: don't change the default, it cannot be deleted or modified_ `terraform import module.networking.aws_security_group.default_security_group_vpc_us_east_1 sg-85689af8`
  5. Route table: `terraform import module.networking.aws_route_table.route_table_us_east_1 rtb-3e87ff58`
  6. NACL: `terraform import module.networking.aws_network_acl.acl_us_east_1 acl-e8a87f8e`
