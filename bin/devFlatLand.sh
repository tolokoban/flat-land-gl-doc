#!/bin/bash

if [ -z "$(byobu-tmux list-sessions | grep 'dev-FlatLand')" ]
then
  byobu-tmux new-session -d -t 'dev-FlatLand' # creates a new detached byobu-tmux session

  byobu-tmux rename-window Library
  byobu-tmux send-keys -t 0 'cd ~/Code/github/flat-land-gl' 'C-m'
  byobu-tmux send-keys -t 0 'nvm install node' 'C-m'
  byobu-tmux send-keys -t 0 'git pull && npm start' 'C-m'
  byobu-tmux split-window -h
  byobu-tmux send-keys -t 1 'cd ~/Code/github/flat-land-gl-doc' 'C-m'
  byobu-tmux send-keys -t 1 'nvm install node' 'C-m'
  byobu-tmux send-keys -t 1 'atom . ../flat-land-gl/ &' 'C-m'
  byobu-tmux send-keys -t 1 'git pull && npm start' 'C-m'
fi
# Enter byobu-tmux
byobu-tmux attach -t 'dev-FlatLand'
