#!/bin/bash

# Set the device path and QNN version
DEVICE_DIR_PATH=/data/local/workspace
QNN_VERSION=229

# Enable root access and remount the filesystem
adb root
adb remount

# Clean up the output directory
rm -rf output/

# Download QNN lib
wget https://tosv.byted.org/obj/pico-tarball/apaul/demos/avatar_asset.tar
tar -xvf avatar_asset.tar

# Download and extract the model
MODEL_URL="http://tosv.byted.org/obj/pico-tarball/spaceport/output/avatar_model.tar"
wget $MODEL_URL -O avatar_model.tar
tar -xvf avatar_model.tar

# Replace the model in the appropriate directory
cp aarch64-android/libavatar_model.so modelzoo/avatar${QNN_VERSION}/

# Push the updated model and application to the device
adb push modelzoo ${DEVICE_DIR_PATH}
adb push ./build/cmake-build/arm64-v8a/deep_learning/app/qnn${QNN_VERSION}/net_run_app ${DEVICE_DIR_PATH}