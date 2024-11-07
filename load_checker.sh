#!/bin/bash

# Set the URLs for your apps
DJANGO_URL="https://code-cell-website-fv8m.onrender.com/"
NEXT_URL="https://code-cell-website.vercel.app/"

# Number of requests
REQUESTS=1000
# Number of concurrent users
<<<<<<< HEAD
CONCURRENCY=1000
=======
CONCURRENCY=100
>>>>>>> d4ade32963d06325eb5181312d091f99b2352576

echo "Testing Django App..."
ab -n $REQUESTS -c $CONCURRENCY $DJANGO_URL

echo "Testing Next.js App..."
ab -n $REQUESTS -c $CONCURRENCY $NEXT_URL
