# Blueprint - Static website through Github Actions -> S3 -> Cloudfront

This repository contains a BLUEPRINT for static website continuous deployment as code (in Terraform), designed to deploy on Amazon AWS.

## Tech stack & method

- Source: GitHub (this repository)
- Trigger: branch/subfolder push
- Build: GitHub Actions
- Storage: S3 Bucket
- Routing: Cloudfront + Route53
