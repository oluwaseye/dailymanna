 document.addEventListener("deviceready", onDeviceReady, false);
             
            var db;
             
            function onDeviceReady() {
                //CREATE DATABASE
                db = window.openDatabase("Database", "1.0", "DailyMannaDB", 2*1024*1024);
                db.transaction(createTables, errorTables, successTables);
     
            }
         
            function createTables(tx) {
                //CREATE THE SETTINGS TABLE
                tx.executeSql('CREATE TABLE IF NOT EXISTS SETTINGS (title, image, description)');
                
                //INSERT DEFAULT DATA
                default_settings_data(tx);
                default_scripture_data(tx);
                
                //CREATE THE DAILY SCRIPTURE TABLE
                  tx.executeSql('CREATE TABLE IF NOT EXISTS SCRIPTURE (title, image, description)');
             
            }
         
            function errorTables(err) {
                alert("Error processing SQL: "+err.code);
            }
         
            function successTables() {
               // alert("YEAH!!!!");
            }
         
            function insertDB(tx) {
                var _title = $("[name='title']").val();
                var _image = $("[name='image']").val();
                var _description = $("[name='description']").val();
                var sql = 'INSERT INTO DEMO (title, image, description) VALUES (?,?,?)';
                tx.executeSql(sql, [_title,_image,_description], sucessQueryDB, errorCB);
 
            }
         
            function sucessQueryDB(tx) {     
                tx.executeSql('SELECT * FROM DEMO', [], renderList, errorCB);
            }
         


    
            function default_settings_data(tx){
                
            }
            function default_scripture_data(tx){
                
            }



            /*function renderList(tx,results) {
                var htmlstring = '';
                 
                var len = results.rows.length;
                 
                for (var i=0; i<len; i++){
                    htmlstring += '<li>' + results.rows.item(i).title + '</li>';
                     
                }
                 
                $('#resultList').html(htmlstring);
                $('#resultList').listview('refresh');
                 
                 
            }*/
 


