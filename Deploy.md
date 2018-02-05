Instuction for deploy.
==================================================
We use Ubuntu server to run our application, so here is description how to do it.

INSTALLATION
------------

* On your server install nginx.
* Change port in `.angular-cli.json` to `80`.
* In terminal of your local IDEA run command: 
  ```
  ng build --env=prod
  ```
  * The result will be package `/dist` with static information about your app.
* On Ubuntu server install [letsencrypt](https://dzone.com/articles/spring-boot-secured-by-lets-encrypt).
* Go to `/etc/nginx/sites-available/default`.
  * Change path for `root` as following:
    ```
    root /home/user_name/web/dist/;
    ```
  * Change `index` and `server_name`:
    ```
    server_name infolve.com;
    index index.html;
    ```
  * Also for access pages by its url add this:
    ```
    location /{
             try_files $uri $uri/ /index.html;
    }
    ```
  * And for using `https`:
    ```
    ssl_certificate /etc/letsencrypt/live/infolve.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/infolve.com/privkey.pem;  
        if ($scheme != "https") {
            return 301 https://$host$request_uri;
        }  
    }
    ```
* Copy `/dist` package to your server. Using Putty or Linux console:
  ```
  scp -r absolute_path/dist user_name@remote_host:/home/user_name/web
  ``` 
QUICK START
-----------
* Now you can start your app:
  ```
  sudo java -jar server/Spaced.Repetition.jar
  ```
* Then reload nginx:
  ```
  /etc/init.d/nginx reload
  ```

REMARKS
------

***The ORLP Developer Team***
- [**Volodymyr Tkachyk**](https://github.com/vldmr1703)
- [**Volodymyr Kurylo**](https://github.com/KuryloVolodymyr)
- [**Bohdan Dubyniak**](https://github.com/b0hdan)
- [**Igor Faryna**](https://github.com/IhorF)
- [**Pavelchak Andrii**](https://github.com/Pavelchak)
- [**Tamara Shyika**](https://github.com/Tamara20)
- [**Soluk Andrian**](https://github.com/SolukAndrian)


