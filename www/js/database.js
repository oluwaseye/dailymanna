onDBDefaults(); 

document.addEventListener("deviceready", onDBDefaults, false);
             
            var db;
             
            function onDBDefaults() {
                //CREATE DATABASE
                db = window.openDatabase("Database", "1.0", "DailyMannaDB", 2*1024*1024);
                db.transaction(createTables, errorTables, successTables);
     
            }
         
            function createTables(tx) {

                //CREATE THE SETTINGS TABLE
                tx.executeSql('CREATE TABLE IF NOT EXISTS SETTINGS (bibversion, noti_sound, noti_time)');
                
                //insert default data
                   tx.executeSql('INSERT INTO SETTINGS (bibversion, noti_sound, noti_time) VALUES ("NIV","yes","6am")');
                
                
                //CREATE THE DAILY SCRIPTURE TABLE
                  tx.executeSql('CREATE TABLE IF NOT EXISTS SCRIPTURE (verse, reference, scrp_date)');
                
                //insert default data
                tx.executeSql('INSERT INTO SCRIPTURE (verse, reference, scrp_date) VALUES ("","","")');
                
           }
         
            function errorTables(err) {
                alert("Error processing SQL: "+err.code);
            }
         
            function successTables() {
               // alert("YEAH!!!!");
            }


     


