terraform {
  backend "s3" {
    encrypt = true
    region  = "eu-central-1"
    bucket  = "laszlobekessy-terraform-state"
    key     = "codeberryschool-com/codeberryschool-com.tfstate"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.24.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "2.4.0"
    }
  }
}

provider "aws" {
  alias   = "us_east_1"
  region  = "us-east-1"
  profile = "laszlobekessy-terraform"
  default_tags {
    tags = { Terraformed = true }
  }
}

provider "aws" {
  alias   = "eu_central_1"
  region  = "eu-central-1"
  profile = "laszlobekessy-terraform"
  default_tags {
    tags = { Terraformed = true }
  }
}


