# Routing

This module contains the Routing resources

- Route 53 zone and domain-related entries
- Generic load balancers
- ACM resources

## Importing existing resources

- Use these as examples:
  - Route53 Zone: `terraform import module.routing.aws_route53_zone.xxx_com_zone <<RESOURCE ID>>`
  - Route53 Record: `terraform import module.routing.aws_route53_record.subdomain_xxx_com_cname_record <<ZONE ID>>_subdomain.xxx.com_CNAME_`
