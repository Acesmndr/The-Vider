#!/bin/bash
cp thevider.scpt /usr/local/bin;
if [ "$( grep -r 'thevider' ~/.zshrc )" == "" ]
then
  echo 'alias tv="osascript /usr/local/bin/thevider.scpt"' >> ~/.zshrc;
fi;
