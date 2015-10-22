   var id = 1, dialog;

            callback = function () {
                cordova.plugins.notification.local.getIds(function (ids) {
                    showToast('IDs: ' + ids.join(' ,'));
                });
            };

            showToast = function (text) {
                setTimeout(function () {
                    if (device.platform != 'windows') {
                        window.plugins.toast.showShortBottom(text);
                    } else {
                        showDialog(text);
                    }
                }, 100);
            };

            showDialog = function (text) {
                if (dialog) {
                    dialog.content = text;
                    return;
                }

                dialog = new Windows.UI.Popups.MessageDialog(text);

                dialog.showAsync().done(function () {
                    dialog = null;
                });
            };

        


        /* schedule */
       
      

            scheduleMinutely = function () {
                var sound = device.platform == 'Android' ? 'file://notification_sound.mp3' : 'file://beep.caf';

                cordova.plugins.notification.local.schedule({
                    id: 1,
                    text: 'Hi!, here is today\'s Manna',
                    every: 'minute',
                    sound: sound,
                });
            };
       

    

        /* IDs */
        
            var callbackIds = function (ids) {
                console.log(ids);
                showToast(ids.length === 0 ? '- none -' : ids.join(' ,'));
            };

            getIds = function () {
                cordova.plugins.notification.local.getIds(callbackIds);
            };

            getScheduledIds = function () {
                cordova.plugins.notification.local.getScheduledIds(callbackIds);
            };

            getTriggeredIds = function () {
                cordova.plugins.notification.local.getTriggeredIds(callbackIds);
            };
       

        /* notifications */
       
            var callbackOpts = function (notifications) {
                console.log(notifications);
                showToast(notifications.length === 0 ? '- none -' : notifications.join(' ,'));
            };

            var callbackSingleOpts = function (notification) {
                console.log(notification);
                showToast(notification.toString());
            };

            get = function () {
                cordova.plugins.notification.local.get(1, callbackSingleOpts);
            };

            getMultiple = function () {
                cordova.plugins.notification.local.get([1, 2], callbackOpts);
            };

            getAll = function () {
                cordova.plugins.notification.local.getAll(callbackOpts);
            };

            getScheduled = function () {
                cordova.plugins.notification.local.getScheduled(callbackOpts);
            };

            getTriggered = function () {
                cordova.plugins.notification.local.getTriggered(callbackOpts);
            };
        

        /* defaults */
        
            setDefaultTitle = function () {
                cordova.plugins.notification.local.setDefaults({
                    title: 'New Default Title'
                });
            };
      

        /* callbacks */
        
            document.addEventListener('deviceready', function () {

                cordova.plugins.notification.local.on('schedule', function (notification) {
                    console.log('onschedule', arguments);
                    // showToast('scheduled: ' + notification.id);
                });

                cordova.plugins.notification.local.on('update', function (notification) {
                    console.log('onupdate', arguments);
                    // showToast('updated: ' + notification.id);
                });

                cordova.plugins.notification.local.on('trigger', function (notification) {
                    console.log('ontrigger', arguments);
                    showToast('triggered: ' + notification.id);
                });

                cordova.plugins.notification.local.on('click', function (notification) {
                    console.log('onclick', arguments);
                    showToast('clicked: ' + notification.id);
                });

                cordova.plugins.notification.local.on('cancel', function (notification) {
                    console.log('oncancel', arguments);
                    // showToast('canceled: ' + notification.id);
                });

                cordova.plugins.notification.local.on('clear', function (notification) {
                    console.log('onclear', arguments);
                    showToast('cleared: ' + notification.id);
                });

                cordova.plugins.notification.local.on('cancelall', function () {
                    console.log('oncancelall', arguments);
                    // showToast('canceled all');
                });

                cordova.plugins.notification.local.on('clearall', function () {
                    console.log('onclearall', arguments);
                    // showToast('cleared all');
                });
            }, false);
       