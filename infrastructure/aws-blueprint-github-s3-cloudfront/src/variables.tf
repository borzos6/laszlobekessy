variable "main_url" {
  type        = string
  description = "The main url. The s3 bucket will be named after this as well."
}

variable "desired_urls" {
  type        = list(string)
  description = "The desired urls for the cloudfront distribution, including the main url"
}

variable "zone_name" {
  type        = string
  description = "The name of the Route53 zone"
}

variable "acm_certificate_domain" {
  type        = string
  description = "The domain of the ACM certificate"
}

variable "iam_deployment_user_name" {
  type        = string
  description = "The name of the IAM user for deployment"
}

variable "cloudfront_logs_bucket_name" {
  type        = string
  description = "The name of the bucket for the cloudfront logs"
}





