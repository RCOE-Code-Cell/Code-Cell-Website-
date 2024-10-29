# Create a Python virtual environment (recommended to avoid PEP 668 issue)
if [ ! -d "venv" ]; then
    echo "Creating a Python virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "Activating the virtual environment..."
. ./venv/bin/activate

# Install detect-secrets
echo "Installing detect-secrets..."
pip install detect-secrets

# Initialize and audit secrets
echo "Scanning for secrets..."
detect-secrets scan > .secrets.baseline
echo "Auditing for secrets..."
detect-secrets audit .secrets.baseline
