#!/usr/bin/env bash

echo "starting..."
kubectl -n app-polls apply -f polling-secret.yaml
kubectl -n app-polls apply -f mysql-deployment.yaml
kubectl -n app-polls apply -f polling-app-server.yaml
kubectl -n app-polls apply -f polling-app-client.yaml