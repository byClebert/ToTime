# ToTime
This is a time conversion package.

<img src="https://img.shields.io/github/license/clebertsfigueiredo/totime">
<img src="https://img.shields.io/npm/v/@clebertsfigueiredo/totime">
<img src="https://img.shields.io/github/repo-size/clebertsfigueiredo/totime">
<img src="https://img.shields.io/npm/dt/@clebertsfigueiredo/totime">

<!-- ![](https://img.shields.io/github/license/clebertsfigueiredo/totime)
![](https://img.shields.io/npm/v/@clebertsfigueiredo/totime)
![](https://img.shields.io/github/repo-size/clebertsfigueiredo/totime)
![](https://img.shields.io/npm/dt/@clebertsfigueiredo/totime) -->


### INSTALL
```
npm i @clebertsfigueiredo/totime
```

### IMPORT
```js
const totime = require('@clebertsfigueiredo/totime')
// or
import totime from '@clebertsfigueiredo/totime'
```

### USE
```js
const { minutesToHours } = require('@clebertsfigueiredo/totime')

const response = minutesToHours(85)

console.log(response) // '01:25'

```

### METHODS
```js
const {
    intervalInMinutes,
    minutesToHours,
    secondsToHours,
    secondsToMinutes,
    timeToMinutes,
    timeToSeconds 
} = require('@clebertsfigueiredo/totime')

// Gets the interval in minutes
intervalInMinutes('14:10', '14:30') // Output: 20

// Transform minutes into hours
minutesToHours(125) // Output: '02:05'

// Transform seconds into hours
secondsToHours(10860) // Output: '03:01'
secondsToHours(14465) // Output: '04:01:05'

// Transform seconds into minutes
secondsToMinutes(60) // Output: '01' **minutes
secondsToMinutes(75) // Output: 01:15 **PS.: <minutes>:<seconds>, does not return the time

// Transform time to minutes
timeToMinutes('02:00') // Output: 120

// Transform time to seconds
timeToSeconds('02:00') // Output: 7200

```