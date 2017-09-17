#!/usr/bin/env bash

cd /var/lib/jenkins/workspace/note-my-strength-api
npm stop
export JENKINS_MODE=true
npm install
npm start
exit