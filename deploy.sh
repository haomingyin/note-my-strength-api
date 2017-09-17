#!/usr/bin/env bash

ssh -t -t haoming@haomingyin.com << EOF
  cd /var/lib/jenkins/workspace/note-my-strength-api
  npm stop
  export JENKINS_MODE=true
  npm install
  npm start
  exit
EOF