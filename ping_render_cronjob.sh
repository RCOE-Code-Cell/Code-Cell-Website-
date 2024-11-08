#!/bin/bash
# Script to ping Render service to keep it active

# Replace with your actual Render service URL
RENDER_URL="https://code-cell-website-fv8m.onrender.com"

# Print a message before sending the request
echo "$(date) - Sending request to $RENDER_URL"

# Send a GET request to the URL and capture the HTTP response code
HTTP_RESPONSE=$(curl -I "$RENDER_URL" -s -o /dev/null -w "%{http_code}")

# Print the HTTP response code
echo "$(date) - HTTP response code: $HTTP_RESPONSE"

# Check the HTTP response code and log it
if [ "$HTTP_RESPONSE" -eq 200 ]; then
  echo "$(date) - Successfully pinged $RENDER_URL, HTTP $HTTP_RESPONSE" >> ~/ping_log.txt
else
  echo "$(date) - Failed to ping $RENDER_URL, HTTP $HTTP_RESPONSE" >> ~/ping_log.txt
fi

# Check if the log file exists
echo "$(date) - Log file status: $(ls -l ~/ping_log.txt)"

