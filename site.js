export class Site {
    // static siteSet = [];
    //if last site object is the same
    //if last site object is different, log an end time for previous.
    constructor(link) {
      this.link = link;
    //   Site.siteSet.add(this);
    }
    startTime = [];
    endTime = [];
    duration = 0 ;
    freq = 0;

    startTime(){
        return this.startTime;
    }
    endTime(){
        return this.endTime;
    }
    duration(){
        return this.duration;
    }
    freq(){
        return this.freq;
    }
    
  }
