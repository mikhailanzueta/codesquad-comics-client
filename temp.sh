#!/bin/sh
for file in *.jpeg; 
    do mv -- "$file" "${file%.jpeg}.jpg";
done