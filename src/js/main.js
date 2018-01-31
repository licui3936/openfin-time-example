//event listeners.
document.addEventListener('DOMContentLoaded', () => {

    if (typeof fin != 'undefined') {
        fin.desktop.main(onMain);
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});

//Once the DOM has loaded and the OpenFin API is ready
function onMain() {
    const app = fin.desktop.Application.getCurrent();
    //fin.desktop.System.showDeveloperTools(app.uuid, app.uuid);
    fin.desktop.System.getVersion(version => {
        const ofVersion = document.querySelector('#of-version');
        ofVersion.innerText = version;
    });

}

document.querySelector("#new-btt").addEventListener('click', function(e){
	const app = fin.desktop.Application.getCurrent();
	const subTopic = "timeService/" + app.uuid;
	fin.desktop.InterApplicationBus.publish("timeService", {
		uuid: app.uuid,
		subTopic: subTopic
	});
	fin.desktop.InterApplicationBus.subscribe("*", subTopic, function(message, uuid, name) {
		console.log("The application " + uuid + " sent this time: " + message.time);
		const ofTime = document.querySelector('#of-time');
		ofTime.innerText = message.time;
	});	
});
