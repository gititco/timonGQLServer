import client  from './connection';
import casual from 'casual';

let bulk = [];
let vehicleNumbers = [];
let cameras = [];

const directions = {'in', 'out'}
const vehicleTypes = {'Car', 'Bus', 'Taxi', 'Motorcycle', 'Bicycle'}
console.log('script started');

//random car numbers
for(let i = 10000000; i < 30000000; i++) {
  vehicleNumbers.push(i);
}

// random snaps
for(let i = 0; i < 200000; i++) {

  //let datetime = casual.date('dd-MM-yyyy HH:mm:ss');
  //let dayOfWeek = datetime.format('ddd dddd');
  let record = {
    cameraId: casual.random_element(cameras);
    lpr: casual.random_element(vehicleNumbers),
    direction: casua.random_element(directions),
    vehicleType: casua.random_element(vehicleTypes),
    datetime: datetime,
    dayOfWeek: dayOfweek
  }
}
