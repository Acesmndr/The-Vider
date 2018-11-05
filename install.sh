#!/bin/bash
cp thevider.scpt /usr/local/bin;
if [ "$( grep -r 'thevider' ~/.zshrc )" == "" ]
then
  echo 'alias thevider="osascript /usr/local/bin/thevider.scpt"' >> ~/.zshrc;
fi;
