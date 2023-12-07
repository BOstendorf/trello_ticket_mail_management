#!/bin/bash

U=tfdmihnz
DEST=host224.checkdomain.de
DIR=ticket-mail-management.trello-powerup.hchs.hamburg
echo "please make sure to enable key based authentication for $U@$DEST"

npm run build
rsync -ap dist/* $U@$DEST:$DIR/.
