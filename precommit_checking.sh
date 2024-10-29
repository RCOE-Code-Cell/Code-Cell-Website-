# Create a Python virtual environment (recommended to avoid PEP 668 issue)
if [ ! -d "venv" ]; then
    echo "Creating a Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "Activating the virtual environment..."
. ./venv/bin/activate

echo "Installing detect secret to initialize pre commit hook ..."
pip install detect-secrets
detect-secrets scan > .secrets.baseline

echo "for first state.. to check secrets "
detect-secrets audit .secrets.baseline