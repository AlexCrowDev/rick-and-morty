#!/bin/sh
set -eu

echo Installing dependencies
npm install

echo Building
npm run build

echo Done