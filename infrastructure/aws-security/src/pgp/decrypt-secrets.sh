#!/bin/bash

export GPG_TTY=$(tty)
export AWS_PROFILE=laszlobekessy-terraform

echo "=== Getting terraform output for IAM users"
terraform output -json laszlobekessy_human_users > pgp/secret-keys-encrypted.json
terraform output -json laszlobekessy_deployment_users >> pgp/secret-keys-encrypted.json

echo "=== Parsing the Output JSON"
echo "====== For the encryption PASSPHRASE check the key-gen-template"

jq -c '.[]' pgp/secret-keys-encrypted.json | while read i; do
    name=$(jq -r '.name' <<< "$i");
    password_encoded=$(jq -r '.password' <<< "$i");
    password_decoded=$(echo $password_encoded | base64 --decode | gpg --decrypt)
    key_id=$(jq -r '.key_id' <<< "$i")
    key_secret_encoded=$(jq -r '.key_secret' <<< "$i")
    key_secret_decoded=$(echo $key_secret_encoded | base64 --decode | gpg --decrypt)
    echo " ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
    echo " - $name | key_id: $key_id | key_secret: $key_secret_decoded | password: $password_decoded"
    echo " ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
done
