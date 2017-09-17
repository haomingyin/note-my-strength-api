#!/usr/bin/env bash

pkill -x node-my-strength-api | cat

export JENKINS_MODE=true

node App.js note-my-strength-api &

if [ $? -eq 0 ]
then
    date
    echo "Application is running..."
else
    echo "Failed to run application!"
    exit 1
fi
exit 0