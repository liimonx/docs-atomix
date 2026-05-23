#!/bin/bash
sed -i "s/    if (error.code === 'ENOENT') {/    if (error \&\& typeof error === 'object' \&\& 'code' in error \&\& error.code === 'ENOENT') {/g" app/api/markdown/\[...path\]/route.ts
