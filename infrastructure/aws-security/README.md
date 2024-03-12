# Laszlo Bekessy Security-related Infrastructure

This repository contains infrastructure as code (in Terraform) designed to deploy on Amazon AWS.

# Setup

## Install

- _(requirement)_ Install Terraform CLI (https://learn.hashicorp.com/tutorials/terraform/install-cli)
- _(requirement)_ Install AWS CLI v2 (https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- _(requirement)_ Install Terraform-docs (https://terraform-docs.io/user-guide/installation/)
- _(requirement)_ Install GNU PGP = GPG (https://gnupg.org/download/) for encryption
  - OS X: https://sourceforge.net/p/gpgosx/docu/Download/
- _(requirement)_ Install JQ for terraform output processing (https://stedolan.github.io/jq/download/)

## Credentials

- You need to have access to the laszlobekessy-terraform IAM user. Either get the credentials or create a new user/access key to be able to apply changes
- Setup the credentials in your local machine:
  - `aws configure --profile laszlobekessy-terraform`
    - default region: us-east-1
    - default output: json

## Init

- `AWS_PROFILE=laszlobekessy-terraform terraform init`
- or `AWS_PROFILE=laszlobekessy-terraform terraform init -reconfigure`

## Encryption

- During initialization you'll need a PGP key for encrypting passwords and secret attributes
- Create: `gpg --batch --gen-key pgp/key-gen-template`
- Export: `gpg --output pgp/public-key-binary.gpg --export laszlo@bekessy.me`
- Full tutorial here: https://menendezjaume.com/post/gpg-encrypt-terraform-secrets/
- Disclaimer: Keys have expiry dates. If you try to use the keys after the expiration, IAM will deny it with a `Error encrypting IAM Access Key Secret: error setting up encryption for PGP message: openpgp: invalid argument: cannot encrypt a message to key id xxxx because it has no encryption keys` error. In this case change the expiry date of the key
  - `gpg -k`: get the key uid
  - `gpg --edit-key [uid]`
    - command> `list`
    - command> `key [subkey]` where [subkey] is an integer (array index)
    - command> `expire`
    - command> `save` (Passphrase in the pgp/key-gen-template file)
  - Don't forget to export the key: `gpg --output pgp/public-key-binary.gpg --export laszlo@bekessy.me`

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
