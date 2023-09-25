#!/bin/bash

cur_dir=$(pwd)
read -p "Enter path to be_practical directory (or empty for current dir): " be_practical_dir
if [ -z "$be_practical" ];
then
    be_practical=$cur_dir
fi
cd "${be_practical_dir}"
npm install
npm run build
node dist/index.js > /tmp/output
if [ $? -ne 0 ];
then
    echo 'main method failed with a non-zero exit code';
    exit $?
fi
grep "created db patient" /tmp/output
if [ $? -ne 0 ];
then
    echo 'db patient not created';
    exit $?
fi
grep "created EHR patient" /tmp/output
if [ $? -ne 0 ];
then
    echo 'ehr patient not created';
    exit $?
fi
grep "created IOT patient" /tmp/output
if [ $? -ne 0 ];
then
    echo 'IOT patient not created';
    exit $?
fi
grep "created Messaging patient" /tmp/output
if [ $? -ne 0 ];
then
    echo 'messaging patient not created';
    exit $?
fi
grep "created support patient" /tmp/output
if [ $? -ne 0 ];
then
    echo 'support patient not created';
    exit $?
fi

echo "Party on Wayne. Party on Garth"
cd "${cur_dir}"
exit 0
