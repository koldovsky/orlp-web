#!/bin/bash

container_name="orlp-web";

if [ ! "$(docker ps -q -f name=$container_name)" ]; then
    echo "Container $container_name is not running.";
    else
    echo "Stop $container_name container.";
    docker container stop $container_name && docker container rm $container_name
fi