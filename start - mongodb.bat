@echo off
del /s /q D:\project\testApi2\database\*.*
mongod --dbpath=D:\project\testApi2\database
d:
cd\project\testApi2
npm start