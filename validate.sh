#!/bin/bash

dir_name=$RANDOM
mkdir -p "/tmp/${dir_name}"
cd "/tmp/${dir_name}"
git clone "$1"
cd "be_practical"
npm install
npm run build
node dist/index.js > /tmp/output
if [ $? -ne 0 ];
then
    echo 'main method failed with a non-zero exit code';
    exit $?
fi
grep "created db patient" /tmp/output && echo "found db patient"
grep "created EHR patient" /tmp/output && echo "found ehr patient"
grep "created IOT patient" /tmp/output && echo "found iot patient"
grep "created Messaging patient" /tmp/output && echo "found iot patient"
grep "created support patient" /tmp/output && echo "found iot patient"

echo "Party on Wayne. Party on Garth"
exit 0
