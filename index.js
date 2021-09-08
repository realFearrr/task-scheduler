const cp = require('child_process'),
    openURL = `https://youtube.com`;
const CurrentTime = new Date();

class Class {
    constructor(Data) {
        if (
            !(
                Data.time &&
                Data.day &&
                Data.TZ
            )
        )
            return console.log("Invalid Declaration");
        this.time = Data.time;
        this.day = Data.day;
        this.TZ = Data.TZ;
        this.localTime = this.getLocalTime();
        this.msTime = this.getMsTime();
        this.numericDate = this.localTime.getDay();
        if (this.msTime > 0 && this.numericDate == this.day) this.setAlert();
    }
    setAlert() {
        setTimeout(() => {
            cp.spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', ['-new-tab', openURL]);
            console.log(`
opened linK: ${openURL}, time opened: ${this.time}
            `);
        }, this.msTime);
    }
    GetOffset(TimeZone) {
        return +new Date("1") - +new Date(`1 ${TimeZone}`);
    }
    getMsTime() {
        const M = this.localTime.getMonth() + 1;
        const Y = this.localTime.getFullYear();
        const D = this.localTime.getDate();
        return (
            +new Date(`${M} ${D} ${Y} ${this.time} ${this.TZ}`) - +new Date()
        );
    }
    getLocalTime() {
        let offset = this.GetOffset(this.TZ);
        return new Date(+new Date() + offset);
    }
}

[
    {
        time: `13:21`,
        day: 3,
        TZ: "GMT+7",
    }
].map((c) => new Class(c));
