
echo "Installing detect secret to initialize pre commit hook ..."
pip install detect-secrets
detect-secrets scan > .secrets.baseline

echo "for first state.. to check secrets "
detect-secrets audit .secrets.baseline