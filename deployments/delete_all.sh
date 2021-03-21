#!/usr/bin/env bash

echo "deleting..."
kubectl -n app-polls delete -f polling-app-client.yaml
kubectl -n app-polls delete -f polling-app-server.yaml
kubectl -n app-polls delete -f mysql-deployment.yaml
kubectl -n app-polls delete -f polling-secret.yaml