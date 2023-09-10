# Distributed-Systems


# next task

- microservice a divide kora. (3 ta hobe amader) & subfolder a rakha
- prottek subfolder a 1 ta docker file thakbe
- docker file gular jonno docker composer 1 tai hobe and eita root folder a thakbe
- 4 ta database create korte hobe. (3ta MongoDB, 1ta Minio)


- client k production build korte hobe. (eita kichu static file (html, css, js) create kore dibe)
- ei static files nginx a liklhe dite hobe...and browser theke access kora jabe.




# MongoDB setup in Linux

Install MongoDB Community Edition


1. Import the public key used by the package management system.<br/>
From a terminal, install gnupg and curl if they are not already available:

    ``` sudo apt-get install gnupg curl ``` 

    To import the MongoDB public GPG key from 
    https://pgp.mongodb.com/server-7.0.asc
    , run the following command:

    ```
    curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
    sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
    --dearmor

    ```

2. Create a /etc/apt/sources.list.d/mongodb-org-7.0.list file for MongoDB.<br/>
Create the list file using the command appropriate for your version of Debian: <br/>


    Debian 11 "Bullseye"
    ```
    echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] http://repo.mongodb.org/apt/debian bullseye/mongodb-org/7.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

    ```
3. Reload local package database.<br/>
Issue the following command to reload the local package database: <br/>

    ``` sudo apt-get update ```

    3.1. Some additional packages need to install (libssl) <br/>
            ```sudo -i``` <br/>
            ```wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb``` <br/>
            ```sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb```

4. Install the MongoDB packages. You can install either the latest stable version of MongoDB or a specific version of MongoDB. <br/>
Install the latest version of MongoDB

    ```sudo apt-get install -y mongodb-org```


# MongoDB commands

- start mongodb ```sudo systemctl start mongod```
- if failed run this first ```sudo systemctl daemon-reload```
- check status ```sudo systemctl status mongod```
- stop mongodb ```sudo systemctl stop mongod```
- restart mongodb ```sudo systemctl restart mongod``` 


# MongoDB Comapss setup in Linux

1. Download mongodb comapss <br/>
    ```wget https://downloads.mongodb.com/compass/mongodb-compass_1.39.3_amd64.deb```

2. Install 
    ```sudo dpkg -i mongodb-compass_1.39.3_amd64.deb```


# Minio Setup in Linux

1. Download Minio server package ```wget https://dl.minio.io/server/minio/release/linux-amd64/minio```

2. Make the file executable ```chmod +x minio```

- To use minio server ```sudo ./minio server /minio``` <br/>
  then paste the address http://127.0.0.1/9000 at browser and hit enter