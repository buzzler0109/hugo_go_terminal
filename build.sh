#!/bin/bash

# Initialize and update submodules
git submodule init
git submodule update

# Build Hugo
hugo --minify 