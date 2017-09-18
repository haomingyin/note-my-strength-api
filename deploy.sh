#!/usr/bin/env bash

cd /var/lib/jenkins/workspace/note-my-strength-api
pkill -f "note-my-strength-api"
export JENKINS_MODE=true
npm start
exit