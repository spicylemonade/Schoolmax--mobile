logic=./src/logic/TS/
for entry in "$logic"/*
do
  tsc $entry --outDir ./src/logic/
done