# Laszlo Bekessy Common Infrastructure

This repository contains infrastructure as code (in Terraform) for my personal monorepo designed to deploy on Amazon AWS.

# Setup

## Install

- _(requirement)_ Install Terraform CLI (https://learn.hashicorp.com/tutorials/terraform/install-cli)
- _(requirement)_ Install AWS CLI v2 (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- _(requirement)_ Install Terraform-docs (https://terraform-docs.io/user-guide/installation/)

## Credentials

- You need to have access to the proper IAM user. Either get the credentials or create a new user/access key to be able to apply changes
- Setup the credentials in your local machine:
  - `aws configure --profile «profile-name»`
    - default region: us-east-1
    - default output: json

## Init

- `AWS_PROFILE=«profile-name» terraform init`
- or `AWS_PROFILE=«profile-name» terraform init -reconfigure`

# Workflow

## Naming Conventions

- use \_ in resource names (`resource "aws_iam_role" "default_ecs_role"`)
- use - in visible names (`"${var.project}-${var.environment}"`)
- use full names (`"${var.project}-security-group"`) instead of shourtcuts (`"${var.project}-sg"`) if possible
- make the code self-documenting, don't be afraid of using long names if it describes the code better

## Creating a new module

- Create the subfolder in the `src` folder
- Add `providers.tf` (easiest to copy paste from an existing module)
- Describe resources
- Run `npm run init`
- Use the standard [workflow](#workflow)
